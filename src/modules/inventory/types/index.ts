// Product
export interface Product {
  product_id: number;
  product_name: string;
  product_barcode: number;
  product_description: string;
  product_location: string;
  unit_id: number;
  caregory_id: number;
  tags: string;
  buying_price: number;
  selling_price: number;
  vat_inclusive: number;
  currency_id: number;
  ma_id: string;
  st_id: string;
  product_status: number;
  product_created_at: string;
  product_updated_at: string;

  category?: Category;
  currency?: Currency;
  productImages?: ProductImage[];
  saleProducts?: SaleProduct[];
  purchaseProducts?: PurchaseProduct[];
  suppliers?: SupplierProduct[];
}

// Supplier
export interface Supplier {
  supplier_id: number;
  supplier_name: string;
  supplier_phone: string;
  supplier_location: string;
  supplier_email: string;
  supplier_status: number;
  supplier_created_at: Date;
  supplier_updated_at: Date;

  products?: SupplierProduct[];
}

// Category
export interface Category {
  category_id: number;
  category: string;

  products?: Product[];
}

// Tag
export interface Tag {
  tag_id: number;
  tag: number;
}

// Currency
export interface Currency {
  currency_id: number;
  currency_code: string;
  currency_name: string;
  currency_rate: number;
  updated_by: string;
  currency_created_at: Date;
  currency_updated_at: Date;

  products?: Product[];
  sales?: Sale[];
}

// ProductImage
export interface ProductImage {
  image_id: number;
  product_id: number;
  image_url: string;

  product?: Product;
}

// Sale
export interface Sale {
  sale_id: number;
  sale_ref_no: string;
  se_id: number;
  sale_total_amount: number;
  sale_total_discount: number;
  sale_grand_total: number;
  currency_id: number;
  sale_created_at: Date;
  sale_updated_at: Date;

  currency?: Currency;
  saleProducts?: SaleProduct[];
}

// Purchase
export interface Purchase {
  purchase_id: number;
  purchase_quantity: number;
  purchase_unit_cost: number;
  purchase_total_cost: number;
  purchase_created_at: Date;
  purchase_updated_at: Date;

  purchaseProducts?: PurchaseProduct[];
}

// SaleProduct
export interface SaleProduct {
  sale_product_id: number;
  sale_id: number;
  product_id: number;
  quantity: number;
  total_vat: number;
  total_discount: number;
  sale_product_created_at: Date;
  sale_product_updated_at: Date;

  product?: Product;
  sale?: Sale;
}

// PurchaseProduct
export interface PurchaseProduct {
  purchase_product__id: number;
  purchase_product_quantity: number;
  purchase_product_unit_cost: number;
  purchase_product__total_cost: number;
  purchase_product_created_at: Date;
  purchase_purchase_updated_at: Date;
  product_id: number;
  purchase_id: number;

  product?: Product;
  purchase?: Purchase;
}

// SupplierProduct
export interface SupplierProduct {
  supplier_product_id: number;
  product_id: number;
  supplier_id: number;

  product?: Product;
  supplier?: Supplier;
}

// Stock
export interface Stock {
  stock_id: number;
  product_id: number;
  quantity: number;
  updated_at: Date;
}
