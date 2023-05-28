--Mostre o nome dos vendedores que venderam mais de X reais no mês de março de 2022.
select nome,sum(valor_vendido) as total from venda 
where data_venda between '2023-05-01' and '2023-05-31'
group by nome having sum(valor_vendido) > 1000
order by total desc

--Mostre o nome de um dos vendedores que mais vendeu no mês de março de 2022
select nome from venda 
where data_venda between '2023-05-01' and '2023-05-31'
group by nome 
order by sum(valor_vendido) desc
limit 1

--3) Qual o nome do(s) vendedor(es) que mais vendeu no mês de março de 2022?