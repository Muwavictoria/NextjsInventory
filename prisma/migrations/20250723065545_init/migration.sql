-- CreateTable
CREATE TABLE `Product` (
    `product_id` INTEGER NOT NULL AUTO_INCREMENT,
    `product_name` VARCHAR(191) NOT NULL,
    `product_barcode` INTEGER NOT NULL,
    `product_description` VARCHAR(191) NOT NULL,
    `product_location` VARCHAR(191) NOT NULL,
    `unit_id` INTEGER NOT NULL,
    `caregory_id` INTEGER NOT NULL,
    `tags` VARCHAR(191) NOT NULL,
    `buying_price` INTEGER NOT NULL,
    `selling_price` INTEGER NOT NULL,
    `vat_inclusive` INTEGER NOT NULL,
    `currency_id` INTEGER NOT NULL,
    `ma_id` VARCHAR(191) NOT NULL,
    `st_id` VARCHAR(191) NOT NULL,
    `product_status` INTEGER NOT NULL,
    `product_created_at` VARCHAR(191) NOT NULL,
    `product_updated_at` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Product_product_barcode_key`(`product_barcode`),
    PRIMARY KEY (`product_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Supplier` (
    `supplier_id` INTEGER NOT NULL,
    `supplier_name` VARCHAR(191) NOT NULL,
    `supplier_phone` VARCHAR(191) NOT NULL,
    `supplier_location` VARCHAR(191) NOT NULL,
    `supplier_email` VARCHAR(191) NOT NULL,
    `supplier_status` INTEGER NOT NULL,
    `supplier_created_at` DATETIME(3) NOT NULL,
    `supplier_updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`supplier_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Category` (
    `category_id` INTEGER NOT NULL,
    `category` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`category_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Tag` (
    `tag_id` INTEGER NOT NULL,
    `tag` INTEGER NOT NULL,

    PRIMARY KEY (`tag_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Currency` (
    `currency_id` INTEGER NOT NULL,
    `currency_code` VARCHAR(191) NOT NULL,
    `currency_name` VARCHAR(191) NOT NULL,
    `currency_rate` INTEGER NOT NULL,
    `updated_by` VARCHAR(191) NOT NULL,
    `currency_created_at` DATETIME(3) NOT NULL,
    `currency_updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`currency_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ProductImage` (
    `image_id` INTEGER NOT NULL,
    `product_id` INTEGER NOT NULL,
    `image_url` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`image_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Sale` (
    `sale_id` INTEGER NOT NULL,
    `sale_ref_no` VARCHAR(191) NOT NULL,
    `se_id` INTEGER NOT NULL,
    `sale_total_amount` INTEGER NOT NULL,
    `sale_total_discount` INTEGER NOT NULL,
    `sale_grand_total` INTEGER NOT NULL,
    `currency_id` INTEGER NOT NULL,
    `sale_created_at` DATETIME(3) NOT NULL,
    `sale_updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`sale_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Purchase` (
    `purchase_id` INTEGER NOT NULL,
    `purchase_quantity` INTEGER NOT NULL,
    `purchase_unit_cost` INTEGER NOT NULL,
    `purchase_total_cost` INTEGER NOT NULL,
    `purchase_created_at` DATETIME(3) NOT NULL,
    `purchase_updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`purchase_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SaleProduct` (
    `sale_product_id` INTEGER NOT NULL,
    `sale_id` INTEGER NOT NULL,
    `product_id` INTEGER NOT NULL,
    `quantity` INTEGER NOT NULL,
    `total_vat` INTEGER NOT NULL,
    `total_discount` INTEGER NOT NULL,
    `sale_product_created_at` DATETIME(3) NOT NULL,
    `sale_product_updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`sale_product_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PurchaseProduct` (
    `purchase_product__id` INTEGER NOT NULL,
    `purchase_product_quantity` INTEGER NOT NULL,
    `purchase_product_unit_cost` INTEGER NOT NULL,
    `purchase_product__total_cost` INTEGER NOT NULL,
    `purchase_product_created_at` DATETIME(3) NOT NULL,
    `purchase_purchase_updated_at` DATETIME(3) NOT NULL,
    `product_id` INTEGER NOT NULL,
    `purchase_id` INTEGER NOT NULL,

    PRIMARY KEY (`purchase_product__id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SupplierProduct` (
    `supplier_product_id` INTEGER NOT NULL,
    `product_id` INTEGER NOT NULL,
    `supplier_id` INTEGER NOT NULL,

    PRIMARY KEY (`supplier_product_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Stock` (
    `stock_id` INTEGER NOT NULL AUTO_INCREMENT,
    `product_id` INTEGER NOT NULL,
    `quantity` INTEGER NOT NULL,
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`stock_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_caregory_id_fkey` FOREIGN KEY (`caregory_id`) REFERENCES `Category`(`category_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_currency_id_fkey` FOREIGN KEY (`currency_id`) REFERENCES `Currency`(`currency_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProductImage` ADD CONSTRAINT `ProductImage_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `Product`(`product_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Sale` ADD CONSTRAINT `Sale_currency_id_fkey` FOREIGN KEY (`currency_id`) REFERENCES `Currency`(`currency_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SaleProduct` ADD CONSTRAINT `SaleProduct_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `Product`(`product_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SaleProduct` ADD CONSTRAINT `SaleProduct_sale_id_fkey` FOREIGN KEY (`sale_id`) REFERENCES `Sale`(`sale_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PurchaseProduct` ADD CONSTRAINT `PurchaseProduct_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `Product`(`product_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PurchaseProduct` ADD CONSTRAINT `PurchaseProduct_purchase_id_fkey` FOREIGN KEY (`purchase_id`) REFERENCES `Purchase`(`purchase_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SupplierProduct` ADD CONSTRAINT `SupplierProduct_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `Product`(`product_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SupplierProduct` ADD CONSTRAINT `SupplierProduct_supplier_id_fkey` FOREIGN KEY (`supplier_id`) REFERENCES `Supplier`(`supplier_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
