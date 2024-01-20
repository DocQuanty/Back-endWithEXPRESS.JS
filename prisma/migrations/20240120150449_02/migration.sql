-- CreateTable
CREATE TABLE "user_list" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "confirmPassword" TEXT NOT NULL,
    "sold" INTEGER NOT NULL DEFAULT 173,
    "volume" INTEGER NOT NULL DEFAULT 541,

    CONSTRAINT "user_list_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "image_list" (
    "id_img" SERIAL NOT NULL,
    "id_user" INTEGER NOT NULL,
    "src" TEXT NOT NULL,

    CONSTRAINT "image_list_pkey" PRIMARY KEY ("id_img")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_list_email_key" ON "user_list"("email");
