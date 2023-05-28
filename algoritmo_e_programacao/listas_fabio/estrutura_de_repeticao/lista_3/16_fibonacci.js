import prompt from 'prompt-sync';
const input = prompt()

function main(){

    let number_of_terms = Number(input())
    let number_for = new Array(number_of_terms)
    number_for[0] = 0
    number_for[1] = 1
    for(let i = 0; i <= number_of_terms; i++){

        if (i > 1){
            
            number_for[i] = Number(number_for[i - 1]) + Number(number_for[i - 2])  

        }
        console.log(number_for[i])

    }

    let count = 0
    let number_while = new Array(number_of_terms)
    number_while[0] = 0
    number_while[1] = 1
    while(count <= number_of_terms){
        
        if(count > 1){
            
            number_while[count] = Number(number_while[count - 1]) + Number(number_while[count - 2])  

        }
            
        console.log(number_while[count])
        count++

    }

}


main()