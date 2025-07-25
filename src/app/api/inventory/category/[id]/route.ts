import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";
import { CategoryService } from "@/modules/inventory/service/catergory.service";
import { CategoryRepository } from "@/modules/inventory/repository/catergory.repository";   
import { UseCategoryDto } from "@/modules/inventory/dto/catergory.dto";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";   
import { SessionService } from "@/services/session.service";



const service = new CategoryService(new CategoryRepository(prisma));
const sessionService = new SessionService();


export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);
  
  if(!session || !(await sessionService.checkIsUserSessionOk(session))){
    return NextResponse.json({error: "Unauthorized"},{status:401});
  }

  const id = Number(params.id);
  const body = await req.json();
  const parsed = UseCategoryDto.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.format }, { status: 400 });
  }

  try {
    const updated = await service.updateCategory(id, parsed.data);
    return NextResponse.json({
      updated,
      message: `Category '${updated.category}' updated successfully`,
    }, { status: 200 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}