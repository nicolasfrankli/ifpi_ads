CREATE TABLE ativos (
id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(255) NOT NULL,
símbolo VARCHAR(20) NOT NULL,
tipo ENUM('ação', 'obrigação', 'criptomoeda') NOT NULL,
quantidade DECIMAL(20, 8) NOT NULL,
preço_de_compra DECIMAL(20, 8) NOT NULL,
data_de_compra DATE NOT NULL
);

Criar tabela 'transações':

CREATE TABLE transações (
id INT PRIMARY KEY AUTO_INCREMENT,
id_do_ativo INT NOT NULL,
tipo ENUM('compra', 'venda') NOT NULL,
quantidade DECIMAL(20, 8) NOT NULL,
preço DECIMAL(20, 8) NOT NULL,
taxa DECIMAL(20, 8),
data DATETIME NOT NULL,
FOREIGN KEY (id_do_ativo) REFERENCES ativos(id)
);

Criar tabela 'usuários':

CREATE TABLE usuários (
id INT PRIMARY KEY AUTO_INCREMENT,
email VARCHAR(255) NOT NULL UNIQUE,
senha VARCHAR(255) NOT NULL
);

Criar tabela 'portfólios':

CREATE TABLE portfólios (
id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(255) NOT NULL,
id_do_usuário INT NOT NULL,
FOREIGN KEY (id_do_usuário) REFERENCES usuários(id)
);

Criar tabela 'ativos_do_portfólio':

CREATE TABLE ativos_do_portfólio (
id INT PRIMARY KEY AUTO_INCREMENT,
id_do_portfólio INT NOT NULL,
id_do_ativo INT NOT NULL,
FOREIGN KEY (id_do_portfólio) REFERENCES portfólios(id),
FOREIGN KEY (id_do_ativo) REFERENCES ativos(id)
);