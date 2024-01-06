/*
  Warnings:

  - You are about to drop the column `nft_sold` on the `user_list` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "user_list" DROP COLUMN "nft_sold",
ADD COLUMN     "sold" INTEGER NOT NULL DEFAULT 173,
ALTER COLUMN "volume" SET DEFAULT 541;
