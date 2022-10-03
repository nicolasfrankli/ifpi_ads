import prompt from 'prompt-sync';
const input = prompt();


function main(){

    const [numerator, denominator] = input().split(' ').map(Number)
        
    let numerator_for = numerator   
    let denominator_for = denominator   
    for (denominator_for; denominator_for >= 2; denominator_for--){
        
        numerator_for /= denominator_for
        console.log(numerator_for.toFixed(6))

    }

    let numerator_while = numerator
    let denominator_while = denominator
    while (denominator_while >= 2){

        numerator_while /= denominator_while
        console.log(numerator_while.toFixed(6))
        denominator_while--

    }

}


main()