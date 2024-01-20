USE `c-store`;

INSERT INTO `client` (id, name, cnpj, created_at) VALUES ('8c78e290-39f3-4359-8ffe-bb0f343b9b8b', 'Teste', '12345678901234', NOW());
INSERT INTO `payment_method` (name) VALUES ('PIX'), ('Cartão de crédito'), ('Cartão de débito'), ('Boleto');
INSERT INTO `user` (id, name, email, password, created_at) VALUES ('21efb186-43fa-4057-9505-f33f90fc5718', 'Admin Teste', 'usuario.teste@email.com', '$2b$10$EaZfh6Ro1EiP.v91ycSP4.Wd3mf69pDRDe9pc1y//sNdh9Ma4yxOS', NOW());
INSERT INTO `user_admin` (id, client_id) VALUES ('21efb186-43fa-4057-9505-f33f90fc5718', '8c78e290-39f3-4359-8ffe-bb0f343b9b8b');
INSERT INTO `category` (name) VALUES ('Casa e Decoração'), ('Vestuário'), ('Veículos'), ('Eletrônicos'), ('Mercado');