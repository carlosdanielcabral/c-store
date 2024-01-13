CREATE SCHEMA IF NOT EXISTS `c-store` DEFAULT CHARACTER SET utf8 ;
USE `c-store` ;

-- -----------------------------------------------------
-- Table `c-store`.`category`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `c-store`.`category` ;

CREATE TABLE IF NOT EXISTS `c-store`.`category` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `description` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;

-- -----------------------------------------------------
-- Table `c-store`.`client`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `c-store`.`client` ;

CREATE TABLE IF NOT EXISTS `c-store`.`client` (
  `id` CHAR(36) NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `cnpj` CHAR(14) NOT NULL,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  `deleted_at` DATETIME NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `cnpj_UNIQUE` (`cnpj` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;

-- -----------------------------------------------------
-- Table `c-store`.`payment_method`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `c-store`.`payment_method` ;

CREATE TABLE IF NOT EXISTS `c-store`.`payment_method` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NULL,
  `thumbnail` VARCHAR(255) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;

-- -----------------------------------------------------
-- Table `c-store`.`client_payment_method`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `c-store`.`client_payment_method` ;

CREATE TABLE IF NOT EXISTS `c-store`.`client_payment_method` (
  `client_id` CHAR(36) NOT NULL,
  `payment_method_id` INT NOT NULL,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  `deleted_at` VARCHAR(45) NULL,
  PRIMARY KEY (`client_id`, `payment_method_id`),
  INDEX `fk_client_payment_method_payment_method_id_idx` (`payment_method_id` ASC) VISIBLE,
  CONSTRAINT `fk_client_payment_method_client_id`
    FOREIGN KEY (`client_id`)
    REFERENCES `c-store`.`client` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_client_payment_method_payment_method_id`
    FOREIGN KEY (`payment_method_id`)
    REFERENCES `c-store`.`payment_method` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;

-- -----------------------------------------------------
-- Table `c-store`.`user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `c-store`.`user` ;

CREATE TABLE IF NOT EXISTS `c-store`.`user` (
  `id` CHAR(36) NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `last_name` VARCHAR(45) NULL,
  `email` VARCHAR(150) NOT NULL,
  `image` VARCHAR(255) NULL,
  `password` VARCHAR(255) NOT NULL,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  `deleted_at` VARCHAR(45) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;

-- -----------------------------------------------------
-- Table `c-store`.`user_admin`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `c-store`.`user_admin` ;

CREATE TABLE IF NOT EXISTS `c-store`.`user_admin` (
  `id` CHAR(36) NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_user_admin_id`
    FOREIGN KEY (`id`)
    REFERENCES `c-store`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;

-- -----------------------------------------------------
-- Table `c-store`.`user_customer`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `c-store`.`user_customer` ;

CREATE TABLE IF NOT EXISTS `c-store`.`user_customer` (
  `id` CHAR(36) NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_user_customer_id`
    FOREIGN KEY (`id`)
    REFERENCES `c-store`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;

-- -----------------------------------------------------
-- Table `c-store`.`user_customer_address`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `c-store`.`user_customer_address` ;

CREATE TABLE IF NOT EXISTS `c-store`.`user_customer_address` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` CHAR(36) NOT NULL,
  `address` VARCHAR(150) NOT NULL,
  `city` VARCHAR(150) NOT NULL,
  `state` VARCHAR(45) NOT NULL,
  `cep` CHAR(8) NOT NULL,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  `deleted_at` VARCHAR(45) NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_user_customer_address_user_id`
    FOREIGN KEY (`user_id`)
    REFERENCES `c-store`.`user_customer` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;

-- -----------------------------------------------------
-- Table `c-store`.`user_saler`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `c-store`.`user_saler` ;

CREATE TABLE IF NOT EXISTS `c-store`.`user_saler` (
  `id` CHAR(36) NOT NULL,
  `client_id` CHAR(36) NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_user_saler_client_id_idx` (`client_id` ASC) VISIBLE,
  CONSTRAINT `fk_user_saler_id`
    FOREIGN KEY (`id`)
    REFERENCES `c-store`.`user` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_user_saler_client_id`
    FOREIGN KEY (`client_id`)
    REFERENCES `c-store`.`client` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;

-- -----------------------------------------------------
-- Table `c-store`.`product`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `c-store`.`product` ;

CREATE TABLE IF NOT EXISTS `c-store`.`product` (
  `id` CHAR(36) NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `description` VARCHAR(45) NOT NULL,
  `price` VARCHAR(9) NOT NULL,
  `thumbnail` VARCHAR(255) NULL,
  `client_id` CHAR(36) NOT NULL,
  `stock` INT NOT NULL DEFAULT 0,
  `discount` FLOAT NULL DEFAULT 0,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `deleted_at` VARCHAR(45) NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_product_client_id_idx` (`client_id` ASC) VISIBLE,
  CONSTRAINT `fk_product_client_id`
    FOREIGN KEY (`client_id`)
    REFERENCES `c-store`.`client` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;

-- -----------------------------------------------------
-- Table `c-store`.`product_category`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `c-store`.`product_category` ;

CREATE TABLE IF NOT EXISTS `c-store`.`product_category` (
  `category_id` INT NOT NULL,
  `product_id` CHAR(36) NOT NULL,
  PRIMARY KEY (`category_id`, `product_id`),
  INDEX `fk_product_category_product_id_idx` (`product_id` ASC) VISIBLE,
  CONSTRAINT `fk_product_category_category_id`
    FOREIGN KEY (`category_id`)
    REFERENCES `c-store`.`category` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_product_category_product_id`
    FOREIGN KEY (`product_id`)
    REFERENCES `c-store`.`product` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;

-- -----------------------------------------------------
-- Table `c-store`.`product_image`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `c-store`.`product_image` ;

CREATE TABLE IF NOT EXISTS `c-store`.`product_image` (
  `id` INT NOT NULL,
  `product_id` CHAR(36) NOT NULL,
  `image_url` VARCHAR(255) NOT NULL,
  `created_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP(),
  `deleted_at` VARCHAR(45) NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_product_image_product_id_idx` (`product_id` ASC) VISIBLE,
  CONSTRAINT `fk_product_image_product_id`
    FOREIGN KEY (`product_id`)
    REFERENCES `c-store`.`product` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;

-- -----------------------------------------------------
-- Table `c-store`.`sale_status`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `c-store`.`sale_status` ;

CREATE TABLE IF NOT EXISTS `c-store`.`sale_status` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `description` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;

-- -----------------------------------------------------
-- Table `c-store`.`sale`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `c-store`.`sale` ;

CREATE TABLE IF NOT EXISTS `c-store`.`sale` (
  `id` CHAR(36) NOT NULL,
  `product_id` CHAR(36) NOT NULL,
  `user_customer_id` CHAR(36) NOT NULL,
  `user_customer_address_id` INT NOT NULL,
  `shipping` VARCHAR(9) NOT NULL DEFAULT 0,
  `payment_method_id` INT NOT NULL,
  `quantity` INT NOT NULL,
  `created_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP(),
  `status_id` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_sale_product_id_idx` (`product_id` ASC) VISIBLE,
  INDEX `fk_sale_user_customer_id_idx` (`user_customer_id` ASC) VISIBLE,
  INDEX `fk_sale_user_customer_address_id_idx` (`user_customer_address_id` ASC) VISIBLE,
  INDEX `fk_sale_status_id_idx` (`status_id` ASC) VISIBLE,
  CONSTRAINT `fk_sale_product_id`
    FOREIGN KEY (`product_id`)
    REFERENCES `c-store`.`product` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_sale_user_customer_id`
    FOREIGN KEY (`user_customer_id`)
    REFERENCES `c-store`.`user_customer` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_sale_user_customer_address_id`
    FOREIGN KEY (`user_customer_address_id`)
    REFERENCES `c-store`.`user_customer_address` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_sale_status_id`
    FOREIGN KEY (`status_id`)
    REFERENCES `c-store`.`sale_status` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;

-- -----------------------------------------------------
-- Table `c-store`.`product_rating`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `c-store`.`product_rating` ;

CREATE TABLE IF NOT EXISTS `c-store`.`product_rating` (
  `id` INT NOT NULL,
  `sale_id` CHAR(36) NULL,
  `rating` TINYINT(1) NOT NULL,
  `comment` VARCHAR(45) NULL,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  PRIMARY KEY (`id`),
  INDEX `fk_product_rating_sale_id_idx` (`sale_id` ASC) VISIBLE,
  CONSTRAINT `fk_product_rating_sale_id`
    FOREIGN KEY (`sale_id`)
    REFERENCES `c-store`.`sale` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;
