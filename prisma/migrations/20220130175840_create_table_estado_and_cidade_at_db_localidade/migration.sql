-- CreateTable
CREATE TABLE `estado` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `estado_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `cidade` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `id_estado` INTEGER NOT NULL,

    UNIQUE INDEX `cidade_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `cidade` ADD CONSTRAINT `cidade_id_estado_fkey` FOREIGN KEY (`id_estado`) REFERENCES `estado`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
