"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bank_js_1 = require("./bank.js");
var utils_error_js_1 = require("./utils_error.js");
var input = require('prompt-sync')();
var franklin = new bank_js_1.Bank();
function main() {
    var option = '';
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
                    break;
                case '2':
                    consult();
                    break;
                case '3':
                    withdraw();
                    break;
                case '4':
                    deposit();
                    break;
                case '5':
                    exclude();
                    break;
                case '6':
                    transfer();
                    break;
                case '7':
                    earnInterest();
                    break;
                case '8':
                    listAccounts();
                    break;
                case '9':
                    loadFile();
                    break;
            }
        }
        catch (e) {
            if (e instanceof utils_error_js_1.AplicationError) {
                console.log(e.message);
            }
            if (e instanceof Error) {
                console.log("System error. Contact administrator.");
            }
        }
        finally {
            console.log("Completed operation. Enter 0 to exit.");
        }
    } while (option != '0');
    console.log("Closed application.");
}
function createAccount() {
    console.log("\nCreate an account\n");
    var number = input('Enter account number:');
    var account;
    var op = input('Do you want to create an account, savings or tax account? a/s/t').toLowerCase();
    if (op == 'a') {
        account = new bank_js_1.Account(number, 1);
    }
    else if (op == 's') {
        account = new bank_js_1.Savings(number, 0, 0.5);
    }
    else if (op == 't') {
        account = new bank_js_1.taxAccount(number, 0, 0.38);
    }
    franklin.addAccount(account);
}
function consult() {
    console.log("\nConsult account\n");
    var number = input('Enter account number:');
    var account = franklin.Query(number);
    console.log(account.balance);
    return account.balance;
}
function withdraw() {
    console.log("\nWithdraw\n");
    var number = input('Enter account number:');
    var valorStr = input('Enter the withdrawal amount:');
    var value = parseFloat(valorStr);
    franklin.withdraw(value, number);
    console.log(franklin.Query(number).balance);
}
function deposit() {
    console.log("\nDeposit\n");
    var number = input('Enter account number:');
    var valorStr = input('Enter the withdrawal amount:');
    var value = parseFloat(valorStr);
    franklin.deposit(value, number);
    console.log(franklin.Query(number).balance);
}
function exclude() {
    console.log("\Delete account\n");
    var number = input('Enter account number:');
    franklin.delete(number);
}
function transfer() {
    console.log("\nTransfer\n");
    var numberDebit = input('Enter origin account number:');
    var numberCredit = input('Enter destiny account number:');
    var valueStr = input('Type the value deposit');
    var value = parseFloat(valueStr);
    franklin.transfer(numberDebit, numberCredit, value);
    console.log(franklin.Query(numberDebit).balance);
    console.log(franklin.Query(numberCredit).balance);
}
function earnInterest() {
    console.log("\nEarn Interest\n");
    var number = input('Enter savings number:');
    franklin.earnInterest(number);
    console.log(franklin.Query(number).balance);
}
function listAccounts() {
    console.log(franklin.listAccounts());
}
function loadFile() {
    try {
        var LineReaderSync = require("line-reader-sync");
        var lrs = new LineReaderSync("./contas.txt");
        console.log("Starting the read of file");
        while (true) {
            var linha = lrs.readline();
            if (linha != null) {
                var array = linha.split(";");
                var tipo = array[0];
                var numero = array[1];
                var saldo = parseFloat(array[2]);
                var conta = void 0;
                if (tipo == 'A') {
                    conta = new bank_js_1.Account(numero, saldo);
                }
                else if (tipo == 'P') {
                    var taxaDeJuros = parseFloat(array[3]);
                    conta = new bank_js_1.Savings(numero, saldo, taxaDeJuros);
                }
                else if (tipo == 'T') {
                    var taxaDeDesconto = parseFloat(array[3]);
                    conta = new bank_js_1.taxAccount(numero, saldo, taxaDeDesconto);
                }
                franklin.addAccount(conta);
                console.log('Read account: ' + conta._number);
            }
            else {
                console.log("End of file.");
                break;
            }
        }
    }
    catch (e) {
        throw new utils_error_js_1.FileError('Falha ao ler contas de arquivo.');
    }
}
main();
