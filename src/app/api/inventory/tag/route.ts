import { TagRepository } from "@/modules/inventory/repository/tag.repository"
import { TagService } from "@/modules/inventory/service/tag.service"
import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import { CreateTagDto } from "@/modules/inventory/dto/tag.dto";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { error } from "console";
import { SessionService } from "@/services/session.service";



const service = new TagService(new TagRepository(prisma));
const sessionService = new SessionService


export async function  POST(req:NextRequest){
    const session = await getServerSession(authOptions);

    if(!session || !(await sessionService.checkIsUserSessionOk(session))){
      return NextResponse.json({error: "Unauthorized"},{status:401});
    }
    const body = await req.json();
    const parsed = CreateTagDto.safeParse(body)

    if(!parsed.success) {
        return NextResponse.json({error: parsed.error.format},{status:400});
    }
    try{
        const newTag = await service.createTag(parsed.data)
         return NextResponse.json(
         { message: "Tag created Successfully", newTag}, 
          {status: 200});
    }catch(err: any){
        return NextResponse.json({error: err.message}, {status:500});
    }
}



export async function GET() {
  try {
    const tags = await service.getAllTags();
    return NextResponse.json(tags);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}