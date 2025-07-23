/*
  Warnings:

  - You are about to alter the column `product_created_at` on the `product` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `DateTime(3)`.
  - You are about to alter the column `product_updated_at` on the `product` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `DateTime(3)`.

*/
-- AlterTable
ALTER TABLE `product` MODIFY `product_created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `product_updated_at` DATETIME(3) NOT NULL;
