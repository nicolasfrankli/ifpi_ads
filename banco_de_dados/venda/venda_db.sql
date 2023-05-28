create table venda (
    cod_venda int not null primary key,
    nome_vendedor varchar(45) not null,
    data_venda date not null,
    valor_vendido float not null
)



insert into venda values (1, 'Nicolas', '2023-05-01', 100.43), 
(2, 'Italo', '2023-05-19', 1000.43),
(3, 'Nicolas', '2023-04-01', 10.43),
(4, 'Nicolas', '2023-03-01', 300.00),
(5, 'Emanuel', '2023-02-15', 997.00),
(6, 'Emanuel', '2023-05-10', 2000.00),
(7, 'Nicolas', '2023-05-15', 150.00),
(8, 'Lucas', '2023-05-15', 150.00),
(9, 'Lucas', '2023-05-15', 150.00),
(10, 'Lucas', '2023-05-15', 150.00)