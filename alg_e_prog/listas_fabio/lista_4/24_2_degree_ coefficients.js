import prompt from 'prompt-sync';
const input = prompt({sigint: true});

function main(){
    const [a, b, c] = input('Type the coefficients (A, B, C):').split(' ').map(Number)
    if(calculate_roots(a, b, c)){
        console.log(`The roots are ${calculate_roots(a, b, c)[0]} and ${calculate_roots(a, b, c)[1]}`)
    } else{
        console.log('Coefficient A must be different of 0.')   
    }
}

function calculate_roots(a, b, c){
    if(a !== 0 ){
        return [(-b+Math.sqrt((b*b)-4*a*c))/(2*a), (-b-Math.sqrt((b*b)-4*a*c))/(2*a)]
    } 
}

main()