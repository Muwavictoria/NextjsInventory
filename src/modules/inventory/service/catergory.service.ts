import { CategoryRepository } from "../repository/catergory.repository";
import { CreateCategory } from "../dto/catergory.dto";
import { Category } from "@/generated/prisma";



export class CategoryService {
    constructor(private categoryRepo: CategoryRepository) {}

    async createCategory(data: CreateCategory): Promise<Category> {
        const existingCategory = await this.categoryRepo.findByName(data.category);
        if (existingCategory) {
            throw new Error(`Category '${data.category}' already exists.`);
        }
        return this.categoryRepo.create(data);
    }

    async getAllCategories(): Promise<Category[]> {
        return this.categoryRepo.getAll();
    }

    async getCategoryById(id: number): Promise<Category> {
        return this.categoryRepo.getById(id);
    }

    async updateCategory(id: number, data: { category: string }): Promise<Category> {
        const existing = await this.categoryRepo.findByName(data.category);

        if (existing && existing.category_id !== id) {
            throw new Error(`Category '${data.category}' already exists.`);
        }

        return this.categoryRepo.updateCategory(id, data);
    }
}