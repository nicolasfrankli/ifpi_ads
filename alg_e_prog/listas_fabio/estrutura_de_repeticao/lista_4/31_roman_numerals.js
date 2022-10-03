/*Escreva um algoritmo que leia um número decimal (até 3 dígitos) e escreva o seu equivalente em
numeração romana. Utilize funções para obter cada dígito do número decimal e para a transformação
de numeração decimal para romana (Dica: 1 = I, 5 = V, 10 = X, 50 = L, 100 = C, 500 = D, 1.000 = M).*/
import prompt from 'prompt-sync';
const input = prompt()


function main(){

    const number = input()     //0    1    2    3    4    5    6
    const roman_numeral_list = ['I', 'V', 'X', 'L', 'C', 'D', 'M']
    let roman_number = ''
    let count = number.length - 1
    for (let i = 0; i < number.length ; i++){

        if (Number(number[i]) === 9){

            roman_number += roman_numeral_list[2 * count] // C , X , I
            roman_number += roman_numeral_list[2 * count + 2] // M , C , X

        } else if (Number(number[i]) === 4) {

            roman_number += roman_numeral_list[2 * count] // C , X , I
            roman_number += roman_numeral_list[2 * count + 1] // D , L , V

        } else {

            if (Number(number[i]) >= 5){
                
                roman_number += roman_numeral_list[2 * count + 1] // D , L , V

            }
            for (let index = 0 ; index < Number(number[i]) % 5; index++){

                roman_number += roman_numeral_list[2 * count] // C , X , I

            }

        }

        count--

    }

    console.log(roman_number)

}


main()