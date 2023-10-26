// Dessa forma, refatore a implementação da seguinte forma:
// a) Crie uma interface Operacao que possui um método executar() onde dois
// parâmetros são recebidos;
// b) Implemente a interface para cada uma das operações possíveis;
// c) Refatore o método calcular para coerente com o OCP recebendo uma lista de
// operações e adicionando à lista de resultados o resultado de cada método
// executar da Operacao em questão.
// // A classe Calculadora abaixo possui o método calcular com possibilidade de
// crescer “infinitamente”, ferido ao princípio Open Closed (OCP):
