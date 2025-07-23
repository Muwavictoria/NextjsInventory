import { ProductRepository } from "../repository/product.repository";
import { CreateProductInput } from "../dto/product.dto";
import { Product } from "@/generated/prisma";

export class ProductService {
  constructor(private productRepo: ProductRepository) {}

  async createProduct(data: CreateProductInput): Promise<Product> {
    return this.productRepo.create(data);
  }

  async getAllProducts(): Promise<Product[]> {
    return this.productRepo.getAll();
  }

  async getProductById(id: number): Promise<Product | null> {
    return this.productRepo.getById(id);
  }
}
