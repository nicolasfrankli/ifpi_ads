-- Criar banco de dados
CREATE DATABASE aeroporto;

-- Usar banco de dados
\c aeroporto;

-- Criar tabelas
CREATE TABLE companhias_aereas (
codigo_companhia VARCHAR(10) PRIMARY KEY,
nome_companhia VARCHAR(100) NOT NULL,
numero_contato VARCHAR(20),
website VARCHAR(100)
);

CREATE TABLE aeroportos (
codigo_aeroporto VARCHAR(10) PRIMARY KEY,
nome_aeroporto VARCHAR(100) NOT NULL,
cidade VARCHAR(50) NOT NULL,
pais VARCHAR(50) NOT NULL,
fuso_horario VARCHAR(50) NOT NULL
);

CREATE TABLE voos (
numero_voo VARCHAR(10) PRIMARY KEY,
codigo_companhia VARCHAR(10) REFERENCES companhias_aereas(codigo_companhia),
codigo_aeroporto_origem VARCHAR(10) REFERENCES aeroportos(codigo_aeroporto),
codigo_aeroporto_destino VARCHAR(10) REFERENCES aeroportos(codigo_aeroporto),
horario_partida TIMESTAMP NOT NULL,
horario_chegada TIMESTAMP NOT NULL,
status VARCHAR(20) NOT NULL
);

CREATE TABLE passageiros (
id_passageiro SERIAL PRIMARY KEY,
primeiro_nome VARCHAR(50) NOT NULL,
sobrenome VARCHAR(50) NOT NULL,
email VARCHAR(100) NOT NULL,
numero_contato VARCHAR(20) NOT NULL
);

CREATE TABLE reservas (
id_reserva SERIAL PRIMARY KEY,
id_passageiro INT REFERENCES passageiros(id_passageiro),
numero_voo VARCHAR(10) REFERENCES voos(numero_voo),
data_reserva TIMESTAMP NOT NULL
);