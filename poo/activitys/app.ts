import { Bank, Account, Savings, taxAccount } from "./bank.js";
import {AplicationError, FileError} from "./utils_error.js";

let input = require('prompt-sync')();
let franklin: Bank = new Bank();

function main(){
    let option: string = '';
    do {
        console.log('\nWelcome!\n');
        console.log('1 - Sign up       2 - Consult balance       3 - Withdraw\n' +
        '4 - Deposit       5 - Delete               6 - Transfer\n' +
        '7 - Earn interest    8 - List accounts        9 - Load file\n' +
        '0 - Exit\n');
        try {
            option = input("What operation do you want to perform?");
            switch (option) {
                case '1':
                    createAccount();
                    break
                case '2':
                    consult();
                    break
                case '3':
                    withdraw();
                    break
                case '4':
                    deposit();
                    break
                case '5':
                    exclude();
                    break
                case '6':
                    transfer();
                    break
                case '7':
                    earnInterest();
                    break
                case '8':
                    listAccounts();
                    break
                case '9':
                    loadFile();
                    break
            }
        } catch (e: any) {
            if (e instanceof AplicationError) {
                console.log(e.message);
            }
            if(e instanceof Error) {
                console.log("System error. Contact administrator.");
            }
        } finally {
            console.log("Completed operation. Enter 0 to exit.");
        }
    } while (option != '0');

    console.log("Closed application.")
}

function createAccount(): void {
    console.log("\nCreate an account\n");
    let number: string = input('Enter account number:');
    let account!: Account;

    let op: string = input('Do you want to create an account, savings or tax account? a/s/t').toLowerCase();
    if (op == 'a') {
        account = new Account(number, 1);
    } else if (op == 's') {
        account = new Savings(number, 0, 0.5);
    } else if (op == 't') {
        account = new taxAccount(number, 0, 0.38);
    }
    franklin.addAccount(account);
}

function consult() {
    console.log("\nConsult account\n");
    let number: string = input('Enter account number:');
    let account: Account = franklin.Query(number);
    console.log(account.balance);
    return account.balance;
}

function withdraw(){
    console.log("\nWithdraw\n");
    let number: string = input('Enter account number:');
    let valorStr: string = input('Enter the withdrawal amount:');
    let value: number = parseFloat(valorStr);
    franklin.withdraw(value, number);
    console.log(franklin.Query(number).balance);
}

function deposit(){
    console.log("\nDeposit\n");
    let number: string = input('Enter account number:');
    let valorStr: string = input('Enter the withdrawal amount:');
    let value: number = parseFloat(valorStr);
    franklin.deposit(value, number);
    console.log(franklin.Query(number).balance);
}

function exclude(){
    console.log("\Delete account\n");
    let number: string = input('Enter account number:');
    franklin.delete(number);
}

function transfer(){
    console.log("\nTransfer\n");
    let numberDebit: string = input('Enter origin account number:');
    let numberCredit: string = input('Enter destiny account number:');
    let valueStr: string = input('Type the value deposit');
    let value: number = parseFloat(valueStr);
    franklin.transfer(numberDebit, numberCredit, value);
    console.log(franklin.Query(numberDebit).balance);
    console.log(franklin.Query(numberCredit).balance);
}

function earnInterest() {
    console.log("\nEarn Interest\n");
    let number: string = input('Enter savings number:');
    franklin.earnInterest(number);
    console.log(franklin.Query(number).balance);
}

function listAccounts() {
    console.log(franklin.listAccounts());
}

function loadFile() {
    try {
        let LineReaderSync = require("line-reader-sync");
        let lrs = new LineReaderSync("./contas.txt");
        console.log("Starting the read of file");
        while (true) {
            let linha: string = lrs.readline();
            if (linha != null) {
                let array: string[] = linha.split(";");
                let tipo: string = array[0];
                let numero: string = array[1];
                let saldo: number = parseFloat(array[2]);
                let conta!: Account;
                if (tipo == 'A') {
                    conta = new Account(numero, saldo);
                } else if (tipo == 'P') {
                    let taxaDeJuros: number = parseFloat(array[3]);
                    conta = new Savings(numero, saldo, taxaDeJuros);
                } else if (tipo == 'T') {
                    let taxaDeDesconto: number = parseFloat(array[3]);
                    conta = new taxAccount(numero, saldo, taxaDeDesconto);
                }
                franklin.addAccount(conta);
                console.log('Read account: ' + conta._number);
            } else {
                console.log("End of file.")
                break;
            }

        }
    } catch (e: any) {
        throw new FileError('Falha ao ler contas de arquivo.');
    }
}

main();