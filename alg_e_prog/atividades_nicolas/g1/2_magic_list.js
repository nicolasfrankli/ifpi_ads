import prompt from 'prompt-sync'
const input = prompt()


function main(){

    let number
    const list = new Array()
    let for_validation
    const functions_list = [is_even, is_odd, is_positive, is_negative]
    const count_list = [0, 0, 0, 0]
    for (let i = 0;!for_validation;i++){

        number = Number(input())
        list[i] = number
        if (i > 0){

            for_validation = is_multiple(list[i], list[i - 1])

        }

        for (let i = 0; i < functions_list.length ; i++){

            if (functions_list[i](number)){

                count_list[i]++

            }

        }

    }

    console.log(`Even: ${count_list[0]}
Odd: ${count_list[1]}
Positives: ${count_list[2]}
Negatives: ${count_list[3]}`)

}


function is_multiple(number1, number2){

    if (number1 % number2 === 0){

        return true

    }

}


function is_even(number){

    if (number % 2 === 0){

        return true

    }

}


function is_odd(number){

    if (number % 2 !== 0){

        return true

    }

}


function is_positive(number){

    if (number > 0){

        return true

    }

}


function is_negative(number){

    if (number < 0){

        return true

    }

}




main()