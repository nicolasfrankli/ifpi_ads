class FuncionarioA {
    nome: string;
    cargo: string;
    salarioBase: number;

    constructor(nome: string, cargo: string, salarioBase: number) {
        this.nome = nome;
        this.cargo = cargo;
        this.salarioBase = salarioBase;
    }

    calcularSalario(): number {
        // Lógica para calcular o salário, por exemplo, baseado no cargo e benefícios
        // Aqui, estou considerando um cálculo simples, apenas com o salário base
        return this.salarioBase;
    }

    exibir(): void {
        // Lógica para exibir informações
        console.log(`Exibindo funcionário: ${this.nome}, Cargo: ${this.cargo}`);
    }

    salvarNoBanco(): void {
        // Lógica para salvar no banco de dados
        console.log(`Salvando funcionário: ${this.nome}`);
    }
}

// Exemplo de uso
const novoFuncionarioA = new FuncionarioA("João", "Desenvolvedor", 5000);

console.log(`Salário do ${novoFuncionarioA.nome}: R$${novoFuncionarioA.calcularSalario()}`);
novoFuncionarioA.salvarNoBanco();
novoFuncionarioA.exibir();
