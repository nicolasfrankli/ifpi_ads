import prompt from 'prompt-sync';
const input = prompt()


function main(){

    let number_of_terms = Number(input())
    let list = []
    for(let i = 0; i < number_of_terms; i++){
        
        list.push(i)

    }
    for(let i = 1; i < list.length; i++){

        console.log(list[i] + list[i - 1])

    }

}


main()