import { NextRequest, NextResponse } from "next/server";
import { CreateProductDto } from "@/modules/inventory/dto/product.dto";
import { ProductRepository } from "@/modules/inventory/repository/product.repository";
import { ProductService } from "@/modules/inventory/service/product.service";
import prisma from "@/lib/db";

const service = new ProductService(new ProductRepository(prisma));

export async function POST(req: NextRequest) {
  const body = await req.json();
  const parsed = CreateProductDto.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.format() }, { status: 400 });
  }

  try {
    const newProduct = await service.createProduct(parsed.data);
    return NextResponse.json(newProduct, { status: 201 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function GET() {
  try {
    const products = await service.getAllProducts();
    return NextResponse.json(products);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
