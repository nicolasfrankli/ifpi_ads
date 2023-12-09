interface IPersistencia {
    salvar(funcionario: Funcionario): void;
}

interface ICalculoSalario {
    calcularSalario(): number;
}

class PersistenciaFuncionario implements IPersistencia {
    salvar(funcionario: Funcionario): void {
        console.log(`Salvando funcionário: ${funcionario.nome}`);
    }
}

class ExibicaoFuncionario {
    exibir(funcionario: Funcionario): void {
        console.log(`Exibindo funcionário: ${funcionario.nome}, Cargo: ${funcionario.cargo}`);
    }
}

class Funcionario implements ICalculoSalario {
    nome: string;
    cargo: string;
    salarioBase: number;
    persistencia: IPersistencia;

    constructor(nome: string, cargo: string, salarioBase: number, persistencia: IPersistencia) {
        this.nome = nome;
        this.cargo = cargo;
        this.salarioBase = salarioBase;
        this.persistencia = persistencia;
    }

    calcularSalario(): number {
        return this.salarioBase;
    }

    salvarNoBanco(): void {
        this.persistencia.salvar(this);
    }
}

const persistenciaFuncionario = new PersistenciaFuncionario();
const exibicaoFuncionario = new ExibicaoFuncionario();

const novoFuncionario = new Funcionario("João", "Desenvolvedor", 5000, persistenciaFuncionario);

console.log(`Salário do ${novoFuncionario.nome}: R$${novoFuncionario.calcularSalario()}`);
novoFuncionario.salvarNoBanco();
exibicaoFuncionario.exibir(novoFuncionario);
