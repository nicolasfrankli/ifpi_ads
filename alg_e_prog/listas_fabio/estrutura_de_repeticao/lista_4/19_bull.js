import prompt from 'prompt-sync';
const input = prompt()

function main(){

    let bigger_weight_for = 1
    let less_weight_for = 1
    let id_of_bigger_for = 0
    let id_of_less_for  = 0
    let number_for = 1
    for(let i = 1; number_for !== 0; i++){

        let card_for = input().split(' ').map(Number)
        number_for = card_for[0]
        let weight_for = card_for[1]

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

    console.log(`-------- Franklin´s Farm --------
Fatter: ${bigger_weight_for}Kg ${id_of_bigger_for}
Thinner: ${less_weight_for}Kg ${id_of_less_for}`)

}


main()