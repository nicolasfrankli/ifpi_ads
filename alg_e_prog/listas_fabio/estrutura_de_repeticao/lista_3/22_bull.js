import prompt from 'prompt-sync';
const input = prompt()

function main(){

    let number_of_cards = Number(input())
    let bigger_weight_for = 1
    let less_weight_for = 1
    let id_of_bigger_for = 0
    let id_of_less_for  = 0
    for(let i = 1; i <= number_of_cards; i++){

        let card_for = input().split(' ')
        let number_for = card_for[0]
        let weight_for = Number(card_for[2])

        if(i === 1){

            bigger_weight_for = weight_for
            less_weight_for = weight_for 
            id_of_bigger_for = number_for
            id_of_less_for = number_for

        } 

        if(weight_for > bigger_weight_for){

            bigger_weight_for = weight_for
            id_of_bigger_for = number_for

        }
        if(weight_for < less_weight_for){

            less_weight_for = weight_for
            id_of_less_for = number_for

        }

    }

    console.log(bigger_weight_for, id_of_bigger_for, less_weight_for, id_of_less_for)

    let bigger_weight_while = 1
    let less_weight_while = 1
    let id_of_bigger_while = 0
    let id_of_less_while  = 0
    let count = 1
    
    while(count <= number_of_cards){

        let card_while = input().split(' ')
        let number_while = card_while[0]
        let weight_while = Number(card_while[2])

        if(count === 1){

            bigger_weight_while = weight_while
            less_weight_while = weight_while 
            id_of_bigger_while = number_while
            id_of_less_while = number_while

        } 

        if(weight_while > bigger_weight_while){

            bigger_weight_while = weight_while
            id_of_bigger_while = number_while

        }
        if(weight_while < less_weight_while){

            less_weight_while = weight_while
            id_of_less_while = number_while

        }

        count++

    }

    console.log(bigger_weight_while, id_of_bigger_while, less_weight_while, id_of_less_while)


}


main()