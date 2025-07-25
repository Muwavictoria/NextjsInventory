import { NextRequest, NextResponse } from "next/server";
import { CreateCategoryDto } from "@/modules/inventory/dto/catergory.dto";
import { CategoryRepository } from "@/modules/inventory/repository/catergory.repository";       
import prisma from "@/lib/db";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { SessionService } from "@/services/session.service";
import { CategoryService } from "@/modules/inventory/service/catergory.service";



const service = new CategoryService(new CategoryRepository(prisma));
const sessionService = new SessionService;

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if(!session || !(await sessionService.checkIsUserSessionOk(session))){
    return NextResponse.json({error: "Unauthorized"},{status:401});
  }
      
  const body = await req.json();
  const parsed = CreateCategoryDto.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  try {
    const newCategory = await service.createCategory(parsed.data);
    return NextResponse.json(newCategory, { status: 201 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}


export async function GET() {
  try {
    const categories = await service.getAllCategories();
    return NextResponse.json(categories);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}(sessionService);  