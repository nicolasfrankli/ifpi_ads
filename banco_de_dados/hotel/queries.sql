/*1. Categorias que possuam preços entre R$ 100,00 e R$ 200,00.*/
select * from categoria where valor_dia >= 100 and valor_dia<=200;
select * from categoria where valor_dia between 100 and 200;

/*2. Categorias cujos nomes possuam a palavra ‘Luxo’.*/
select * from categoria where nome ilike '%Luxo%';
select * from categoria where nome like '%Luxo%';
SELECT * FROM categoria WHERE nome ~* 'luxo';
SELECT * FROM categoria WHERE POSITION('Luxo' IN nome) > 0;

/*3. Nomes de categorias de apartamentos que foram ocupados há mais de 5 anos.*/
SELECT nome FROM categoria WHERE cod_cat IN (SELECT cod_cat FROM apartamento WHERE num IN (SELECT num FROM hospedagem WHERE dt_saida <= NOW() - INTERVAL '5 years' ));
SELECT nome FROM categoria WHERE cod_cat IN (SELECT cod_cat FROM apartamento WHERE num IN (SELECT num FROM hospedagem WHERE dt_saida < CURRENT_DATE - INTERVAL '5 years' ));
SELECT c.nome FROM categoria c JOIN apartamento a ON a.cod_cat = c.cod_cat JOIN hospedagem h ON h.num = a.num WHERE h.dt_saida < CURRENT_DATE - INTERVAL '5 years';

/*Query para obter os quartos que passaram 5 anos sem hospedagem:*/
SELECT a.num FROM apartamento a WHERE NOT EXISTS (  SELECT 1  FROM hospedagem h  WHERE h.num = a.num AND h.dt_saida >= (current_date - interval '5 years'));


/*4. Apartamentos que estão ocupados, ou seja, a data de saída está vazia.*/
SELECT num FROM apartamento WHERE num IN (SELECT num from HOSPEDAGEM where dt_saida IS NULL);
SELECT a.num FROM apartamento a JOIN hospedagem h ON a.num = h.num WHERE h.dt_saida is NULL;

/*5. Apartamentos cuja categoria tenha código 1, 2, 3, 11, 34, 54, 24, 12.*/
SELECT * FROM apartamento WHERE cod_cat IN (1, 2, 3, 11, 34, 54, 24, 12);

/*6. Apartamentos cujas categorias iniciam com a palavra ‘Luxo’.*/
SELECT * FROM apartamento WHERE cod_cat IN (SELECT cod_cat FROM categoria WHERE nome ilike 'Luxo%')
SELECT a.* FROM apartamento a JOIN categoria c ON a.cod_cat = c.cod_cat WHERE c.nome ilike 'Luxo%'


/*7. Quantidade de apartamentos cadastrados no sistema.*/
SELECT COUNT(*) FROM apartamento 

/*8. Somatório dos preços das categorias.*/
SELECT COUNT(*) FROM apartamento 

/*9. Média de preços das categorias.*/
SELECT ROUND(AVG(valor_dia)::numeric, 2) FROM categoria;

/*10. Maior preço de categoria.*/
SELECT ROUND(AVG(valor_dia)::numeric, 2) FROM categoria;
SELECT * FROM categoria ORDER BY valor_dia DESC LIMIT 1;

/*11. Menor preço de categoria.*/
SELECT MIN(VALOR_DIA) FROM CATEGORIA;
SELECT * FROM categoria ORDER BY valor_dia ASC LIMIT 1;

/*12. O preço média das diárias dos apartamentos ocupados por cada hóspede.*/
SELECT ROUND((SUM(valor_dia)/COUNT(cod_hosp))::NUMERIC, 2)
FROM categoria c JOIN apartamento a ON c.cod_cat = a.cod_cat 
JOIN hospedagem h ON h.num = a.num

SELECT AVG(c.valor_dia)
FROM categoria c 
JOIN apartamento a ON c.cod_cat = a.cod_cat 
JOIN hospedagem h ON h.num = a.num
GROUP BY h.cod_hosp

/*13. Quantidade de apartamentos para cada categoria.*/
SELECT c.nome, COUNT(a.num) 
from apartamento a JOIN categoria C ON c.cod_cat = a.cod_cat
group by c.cod_cat

/*14. Categorias que possuem pelo menos 2 apartamentos.*/
SELECT c.nome, COUNT(a.num)
FROM apartamento a LEFT JOIN categoria C ON c.cod_cat = a.cod_cat 
group by c.cod_cat HAVING COUNT(a.num) > 1

/*15. Nome dos hóspedes que nasceram após 1° de janeiro de 1970.*/
SELECT nome from hospede WHERE dt_nasc > '1970-01-01'

/*16. Quantidade de hóspedes.*/
SELECT COUNT(*) FROM hospede

/*17. Apartamentos que foram ocupados pelo menos 2 vezes.*/
SELECT a.num, COUNT(a.num) 
FROM hospedagem h LEFT JOIN apartamento a ON h.num = a.num
GROUP BY a.num HAVING COUNT(a.num) > 1

/*18. Altere a tabela Hóspede, acrescentando o campo "Nacionalidade".*/
ALTER TABLE hospede ADD nacionalidade varchar(50)

/*19.Quantidade de hóspedes para cada nacionalidade.*/
SELECT nacionalidade, COUNT(*) FROM hospede group by nacionalidade

/*20. A data de nascimento do hóspede mais velho.*/
SELECT MIN(dt_nasc) FROM hospede 

/*21. A data de nascimento do hóspede mais novo.*/
SELECT MAX(dt_nasc) FROM hospede 

/*22. Reajuste em 10% o valor das diárias das categorias.*/
UPDATE categoria SET valor_dia = 1.1*valor_dia

/*23. O nome das categorias que não possuem apartamentos.*/
SELECT c.nome, COUNT(a.num)
FROM categoria c LEFT JOIN apartamento a ON c.cod_cat = a.cod_cat
GROUP BY c.nome HAVING COUNT(a.num) = 0

/*24. O número dos apartamentos que nunca foram ocupados.*/
SELECT a.num, COUNT(h.cod_hospeda)
FROM apartamento a LEFT JOIN hospedagem h ON a.num = h.num
GROUP BY a.num HAVING COUNT(a.num) = 0

25. O número do apartamento mais caro ocupado pelo João.


26. O nome dos hóspedes que nunca se hospedaram no apartamento 201.
27. O nome dos hóspedes que nunca se hospedaram em apartamentos da categoria LUXO.
28. O nome dos hóspedes que se hospedaram ou reservaram apartamento do tipo LUXO.
29. O nome dos hóspedes que se hospedaram mas nunca reservaram apartamentos do tipo 
LUXO.
30. O nome dos hóspedes que se hospedaram e reservaram apartamento do tipo LUXO.
