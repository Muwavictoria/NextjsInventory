import { PrismaClient } from "@prisma/client";
import { Product, Tag } from "@/generated/prisma";
import { CreateTag } from "../dto/tag.dto";


export class TagRepository{
    constructor(private prisma: PrismaClient){}

    async findByName(tag: string){
        return this.prisma.tag.findUnique({
            where:{tag},
        })
    }

    async create(data: CreateTag):Promise<Tag>{
        return this.prisma.tag.create({data});
    }
    async getAll():Promise<Tag[]>{
        return this.prisma.tag.findMany({});
    }
    async getById(id: number):Promise<Tag>{
        return this.prisma.tag.findUnique({
            where: {tag_id: id},
        });
    }

    async updateTag(id: number, data: { tag: string }): Promise<Tag> {
        return this.prisma.tag.update({
            where: { tag_id: id },
            data,
    });
    }
};