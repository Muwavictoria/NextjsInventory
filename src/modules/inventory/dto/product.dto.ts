import { z as zod } from "zod";

export const ProductDto = zod.object({
  product_id: zod.number().optional(),
  product_name: zod.string(),
  product_barcode: zod.number(),
  product_description: zod.string().nullable(),
  product_location: zod.string().nullable(),
  unit_id: zod.number(),
  category_id: zod.number(),
  tags: zod.string().nullable(),
  buying_price: zod.number(),
  selling_price: zod.number(),
  vat_inclusive: zod.number(),
  currency_id: zod.number(),
  ma_id: zod.string().nullable(),
  st_id: zod.string().nullable(),
  product_status: zod.number(),
});


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


export type CreateProductInput = z.infer<typeof CreateProductDto>;
