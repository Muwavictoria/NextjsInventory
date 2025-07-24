import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";
import { TagService } from "@/modules/inventory/service/tag.service";
import { TagRepository } from "@/modules/inventory/repository/tag.repository";
import { UseTagDto } from "@/modules/inventory/dto/tag.dto";
import { getToken } from "next-auth/jwt";
import { getServerSession } from "next-auth";
import { SessionService } from "@/services/session.service";
import { authOptions } from "@/lib/auth";

const service = new TagService(new TagRepository(prisma));
const sessionService = new SessionService


export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
   const session = await getServerSession(authOptions);
  
      if(!session || !(await sessionService.checkIsUserSessionOk(session))){
        return NextResponse.json({error: "Unauthorized"},{status:401});
      }

  const id = Number(params.id);
  const body = await req.json();
  const parsed = UseTagDto.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.format }, { status: 400 });
  }

  try {
    const updated = await service.updateTag(id, parsed.data);
    return NextResponse.json({
      updated,
      message: `Tag '${updated.tag}' updated successfully`,
    }, { status: 200 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}
