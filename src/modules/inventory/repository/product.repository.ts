import { PrismaClient} from "@prisma/client";
import { Product } from "@/generated/prisma";
import { CreateProductInput } from "../dto/product.dto";

export class ProductRepository {
  constructor(private prisma: PrismaClient) {}

  async create(data: CreateProductInput): Promise<Product> {
    return this.prisma.product.create({ data });
  }

  async getAll(): Promise<Product[]> {
    return this.prisma.product.findMany({
      orderBy: { product_created_at: "desc" },
    });
  }

  async getById(id: number): Promise<Product | null> {
    return this.prisma.product.findUnique({
      where: { product_id: id },
    });
  }
}
