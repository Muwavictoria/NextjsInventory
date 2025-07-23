import { z as zod } from "zod";


export const ProductDtoSchema = zod.object({
  product_id: zod.number().optional(), 
  product_name: zod.string(),
  product_barcode: zod.number(),
  product_description: zod.string(),
  product_location: zod.string(),
  unit_id: zod.number(),
  caregory_id: zod.number(),
  tags: zod.string(),
  buying_price: zod.number(),
  selling_price: zod.number(),
  vat_inclusive: zod.number(),
  currency_id: zod.number(),
  ma_id: zod.string(),
  st_id: zod.string(),
  product_status: zod.number(),
  product_created_at: zod.string(),
  product_updated_at: zod.string(),
});