import prompt from 'prompt-sync';
const input = prompt()

function main(){

    let n1 = Number(input())
    let n2 = Number(input())
    let[initial_value, final_value] = order(n1, n2)
    const [first_term_pa_13_multiples, final_term_pa_13_multiples] = arithmetic_progression_interval(initial_value, final_value, 13)
    const sum_of_multiples_of_13 = sum_of_terms_of_arithmetic_progression(first_term_pa_13_multiples, final_term_pa_13_multiples, 13)
    const total_sum = sum_of_terms_of_arithmetic_progression(initial_value, final_value, 1)
    console.log(total_sum - sum_of_multiples_of_13)

}

function order(number1, number2){

    if(number1 < number2){
        
        return [number1, number2]
    
    } else {
        
        return [number2, number1]
    
    }
}

function is_multiple(number, divider){
    if(number%divider === 0){
        return true
    }
}

function arithmetic_progression_interval(initial_value, final_value, reason){
    
    let first_term_pa = initial_value
    let final_term_pa = final_value
    
    while (!is_multiple(first_term_pa, reason)){
        
        first_term_pa++
    
    }

    while (!is_multiple(final_term_pa, reason)){
        
        final_term_pa--
    
    }

    if(first_term_pa === final_term_pa){
        
        final_term_pa = 0
    
    }
    
    return [first_term_pa, final_term_pa]

}

function sum_of_terms_of_arithmetic_progression(first_term, final_term, reason){

    if(final_term !== 0){

        let number_of_terms = (final_term - first_term)/reason + 1
        return ((first_term + final_term)*number_of_terms)/2

    } else{

        return first_term

    }
}


main()