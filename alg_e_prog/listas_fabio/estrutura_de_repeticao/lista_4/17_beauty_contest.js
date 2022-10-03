import prompt from 'prompt-sync';
const input = prompt();

function main(){
    
    let card
    let name
    let height
    let weight
    let bigger_height
    let less_height
    let bigger_weight
    let less_weight
    let name_of_bigger_weight
    let name_of_less_weight
    let name_of_bigger_height
    let name_of_less_height
    for(let i = 0;name !== 'FIM';i++){

        card = input('Name, height and weight:').split(' ')
        name = card[0]
        height = card[1]
        weight = card[2]
        if(i === 0){

            bigger_weight = weight
            less_weight = weight 
            name_of_bigger_weight = name
            name_of_less_weight = name

            bigger_height = height
            less_height = height
            name_of_bigger_height = name
            name_of_less_height = name

        } 

        if(weight > bigger_weight){

            bigger_weight = weight
            name_of_bigger_weight = name

        } else if(weight < less_weight){

            less_weight = weight
            name_of_less_weight = name

        }

        if(height > bigger_height){

            bigger_height = height
            name_of_bigger_height = name

        } else if(height < less_height){

            less_height = height
            name_of_less_height = name

        }

    }

    console.log(`------ Beauty Contest ------
Taller: ${name_of_bigger_height} ${bigger_height}
Lowest: ${name_of_less_height} ${less_height}
Greater mass: ${name_of_bigger_weight} ${bigger_weight}
Less mass: ${name_of_less_weight} ${less_weight}`)

    
}


main()