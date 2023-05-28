import prompt from 'prompt-sync';
const input = prompt();


function main(){

    let number_for
    let dividers_for = new Array()
    for (let i_for = 0; number_for !== 0; i_for++){

        number_for = Number(input())
        dividers_for = new Array()
        for (let count_for = 1; count_for <= number_for; count_for++){

            if (number_for%count_for === 0){

                dividers_for.push(count_for)

            }

        }

        if (number_for !== 0){

            console.log(dividers_for)

        }

    }

    let number_while
    let dividers_while = new Array()
    let count_while = 1
    while (number_while !== 0 ){

        number_while = Number(input())
        dividers_while = new Array()
        count_while = 1
        while (count_while <= number_while){

            if (number_while % count_while === 0){

                dividers_while.push(count_while)

            }

            count_while++

        }

        if (number_while !== 0){

            console.log(dividers_while)

        }

    }

}


main()