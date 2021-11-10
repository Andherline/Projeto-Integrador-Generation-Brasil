CREATE TABLE `Categoria` (
	`id` bigint NOT NULL AUTO_INCREMENT,
	`tipo_produto` varchar(255) NOT NULL,
	`descricao` varchar(1000),
	`palavra_chave` varchar(255),
	PRIMARY KEY (`id`)
);

CREATE TABLE `Produto` (
	`id` bigint NOT NULL AUTO_INCREMENT,
	`nome` varchar(255) NOT NULL,
	`preco` DECIMAL(8,2) NOT NULL,
	`descricao` varchar(1000) NOT NULL,
	`imagem` varchar(255) NOT NULL,
	`categoria_id` bigint NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `Usuario` (
	`id` bigint NOT NULL AUTO_INCREMENT,
	`nome_completo` varchar(255) NOT NULL,
	`usuario` varchar(255) NOT NULL,
	`senha` varchar(255) NOT NULL,
	PRIMARY KEY (`id`)
);

ALTER TABLE `Produto` ADD CONSTRAINT `Produto_fk0` FOREIGN KEY (`categoria_id`) REFERENCES `Categoria`(`id`);




