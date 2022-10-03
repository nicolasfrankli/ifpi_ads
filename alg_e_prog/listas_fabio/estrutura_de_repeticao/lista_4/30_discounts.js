/*Escreva um algoritmo que leia o nome de um produto, o preço e a quantidade comprada. Escreva o
nome do produto comprado e o valor total a ser pago, considerando que são oferecidos descontos pelo
número de unidades compradas, segundo a tabela abaixo: (FLAG: nome do produto = “FIM”).
a. Até 10 unidades: valor total
b. de 11 a 20 unidades: 10% de desconto
c. de 21 a 50 unidades: 20% de desconto
d. acima de 50 unidades: 25% de desconto*/
import prompt from 'prompt-sync';
const input = prompt()


function main(){

    let name, price, quantity, purchase_information
    while (name !== 'FIM'){

        purchase_information = input('Name, price and quantity: ').split(' ')
        name = purchase_information[0]
        price = purchase_information[1]
        quantity = purchase_information[2]
        
        if(quantity <= 10){

            console.log(`${name} - R$${price * quantity}`)

        } else if(quantity <= 20){

            console.log(`${name} - R$${(price * quantity * 0.9).toFixed(2)}`)

        } else if(quantity <= 50){

            console.log(`${name} - R$${(price * quantity * 0.8).toFixed(2)}`)
        } else {

            console.log(`${name} - R$${(price * quantity * 0.75).toFixed(2)}`)

        }

    }

}


main()