import { PrismaClient } from "@prisma/client";
import { Category } from "@/generated/prisma";
import { CreateCategory } from "../dto/catergory.dto";


export class CategoryRepository {
    constructor(private prisma: PrismaClient) {}

    async findByName(category: string) {
        return this.prisma.category.findUnique({
            where: { category },
        });
    }

    async create(data: CreateCategory): Promise<Category> {
        return this.prisma.category.create({ data });
    }

    async getAll(): Promise<Category[]> {
        return this.prisma.category.findMany({});
    }

    async getById(id: number): Promise<Category> {
        return this.prisma.category.findUnique({
            where: { category_id: id },
        });
    }

    async updateCategory(id: number, data: { category: string }): Promise<Category> {
        return this.prisma.category.update({
            where: { category_id: id },
            data,
        });
    }
}