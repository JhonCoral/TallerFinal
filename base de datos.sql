-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema mascotas
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mascotas
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mascotas` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `mascotas` ;

-- -----------------------------------------------------
-- Table `mascotas`.`mascotas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mascotas`.`mascotas` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(100) NULL DEFAULT NULL,
  `edad` INT NULL DEFAULT NULL,
  `createdAt` TIMESTAMP NULL DEFAULT NULL,
  `updatedAt` TIMESTAMP NULL DEFAULT NULL,
  `foto` VARCHAR(1000) NULL DEFAULT NULL,
  `raza` VARCHAR(100) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_0900_ai_ci' NULL DEFAULT NULL,
  `cualidades` VARCHAR(100) NULL DEFAULT NULL,
  `detalles` VARCHAR(1000) NULL DEFAULT NULL,
  `tipo` VARCHAR(100) NULL DEFAULT NULL,
  `estado` VARCHAR(100) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 34
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `mascotas`.`solicitudes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mascotas`.`solicitudes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(255) NULL DEFAULT NULL,
  `telefono` VARCHAR(255) NULL DEFAULT NULL,
  `correo` VARCHAR(255) NULL DEFAULT NULL,
  `id_mascota` INT NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `id_mascota` (`id_mascota` ASC) VISIBLE,
  CONSTRAINT `solicitudes_ibfk_1`
    FOREIGN KEY (`id_mascota`)
    REFERENCES `mascotas`.`mascotas` (`id`)
    ON UPDATE CASCADE)
ENGINE = InnoDB
AUTO_INCREMENT = 14
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
