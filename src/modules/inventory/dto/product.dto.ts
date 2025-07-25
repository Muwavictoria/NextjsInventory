import { z as zod } from "zod";

import { z  } from "zod";
export const CreateProductDto = z.object({
  product_name: z.string(),
  product_barcode: z.number(),
  product_description: z.string(),
  product_location: z.string(),
  unit_id: z.number(),
  category_id: z.number(),
  tags: z.string(),
  buying_price: z.number(),
  selling_price: z.number(),
  vat_inclusive: z.number(),
  currency_id: z.number(),
  ma_id: z.string(),
  st_id: z.string(),
  product_status: z.number(),
});

export const ProductDto = z.object({
  product_name: z.string(),
  product_barcode: z.number(),
  product_description: z.string(),
  product_location: z.string(),
  unit_id: z.number(),
  category_id: z.number(),
  tags: z.string(),
  buying_price: z.number(),
  selling_price: z.number(),
  vat_inclusive: z.number(),
  currency_id: z.number(),
  ma_id: z.string(),
  st_id: z.string(),
  product_status: z.number(),
});

export const UpdateProductDto = ProductDto.partial();


export type UpdateProductInput = z.infer<typeof UpdateProductDto>;
export type CreateProductInput = z.infer<typeof CreateProductDto>;
export type ProductInput = z.infer<typeof ProductDto>;
