import prompt from 'prompt-sync';
const input = prompt()

function main(){

    let number_of_terms = Number(input())
    let reason_for = 1
    for(let i = 1; i <= number_of_terms; i++){

        if(i === 1){
            
            console.log(1)

        } else {
            
            console.log(i - 1 + reason_for)
            
        }
        
        reason_for+=i

    }

    let count = 1
    let reason_while = 1
    while(count <= number_of_terms){
        
        if(count === 1){
            
            console.log(1)

        } else {
            
            console.log(count - 1 + reason_while)
            
        }
        
        reason_while+=count
        count++

    }

}


main()