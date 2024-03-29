CREATE TABLE CATEGORIA
(COD_CAT INT NOT NULL,
NOME VARCHAR(50) NOT NULL,
VALOR_DIA FLOAT NOT NULL,
CONSTRAINT PRI_CAT PRIMARY KEY(COD_CAT));

INSERT INTO CATEGORIA VALUES (1, 'Luxo', 1000)(2, 'STANDARD', 200), (3, 'PRESIDENCIAL', 2000);

CREATE TABLE APARTAMENTO
(NUM INT NOT NULL PRIMARY KEY,
STATUS CHAR(1) NOT NULL,
COD_CAT INT NOT NULL REFERENCES CATEGORIA(COD_CAT));

INSERT INTO APARTAMENTO VALUES (1, 'D', 2), (2, 'D', 1), (3, 'D', 3);
INSERT INTO APARTAMENTO VALUES (4, 'Quarto 4', 3);


CREATE TABLE HOSPEDE
(COD_HOSP INT NOT NULL PRIMARY KEY,
NOME VARCHAR(50) NOT NULL, 
DT_NASC DATE);

INSERT INTO HOSPEDE VALUES (1, 'ITALO', '2003-07-12'), (2, 'NICOLAS', '2004-06-18'), (3, 'EMANUEL', '2004-04-10');

CREATE TABLE SERVICO
(COD_SERV INT NOT NULL PRIMARY KEY,
NOME VARCHAR(50) NOT NULL, 
VALOR FLOAT NOT NULL);

INSERT INTO SERVICO VALUES (1, 'ULTRA', 450), (2, 'HARDPLUS', 900), (3, 'OMEGA', 1200);

CREATE TABLE HOSPEDAGEM
(COD_HOSPEDA INT NOT NULL PRIMARY KEY,
COD_HOSP INT NOT NULL REFERENCES HOSPEDE(COD_HOSP),
NUM INT NOT NULL REFERENCES APARTAMENTO(NUM),
DT_ENTRADA DATE,
DT_SAIDA DATE);

INSERT INTO HOSPEDAGEM VALUES (1, 1, 1, '2023-01-10', '2023-01-11'), (2, 2, 2, '2023-07-11', '2023-07-15'), (3, 3, 3, '2023-07-10', '2023-08-19');
INSERT INTO HOSPEDAGEM VALUES (5, 2, 4, '2011-01-10', '2011-01-11');


CREATE TABLE SOLICITACAO
(COD_SOL INT NOT NULL PRIMARY KEY,
COD_HOSPEDA INT NOT NULL REFERENCES HOSPEDAGEM(COD_HOSPEDA),
COD_SERV INT NOT NULL REFERENCES SERVICO(COD_SERV),
QUANT INT NOT NULL,
DT_SOL DATE);

INSERT INTO SOLICITACAO VALUES (1, 1, 1, 2, '2023-01-10'), (2, 2, 2, 2, '2023-07-15'), (3, 3, 3, 5, '2023-08-19');

create TABLE reserva (
	cod_res INT NOT NULL PRIMARY KEY,
	cod_hosp INT NOT NULL REFERENCES hospede(cod_hosp),
	num INT NOT NULL REFERENCES apartamento(num),
	dt_res DATE NOT NULL,
	dt_prev_ent DATE,
	dt_prev_sai DATE
);

INSERT INTO reserva VALUES (1, 1, 1, '2023-04-03', NULL, NULL);
INSERT INTO reserva VALUES (2, 2, 2, '2023-04-05', NULL, NULL);