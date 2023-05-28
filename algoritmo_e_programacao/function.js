export function sum_of_terms_of_arithmetic_progression(first_term, final_term, reason){

    if(final_term !== 0){

        let number_of_terms = (final_term - first_term)/reason + 1
        return ((first_term + final_term)*number_of_terms)/2

    } else{

        return first_term

    }
}

export function is_multiple(number, divider){
    if(number%divider === 0){
        return true
    }
}

export function arithmetic_progression_interval(initial_value, final_value, reason){
    
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

export function prime_number(a){
    let count = 1
    while (count < a) {
        if (count > 1 && a%count === 0 && count !== a) {
            return false
        } else if(count == a - 1){
            return true 
        }
        count += 1;
    }
}

export function perfect_square_number(number){
    
    for(let i = number; i >= 0; i--){

        if(number === i**2){
            return true
        }

    }

}

export function ordem(a, b, c){
    if(a <= b && b <= c){
        return [a, b, c]
    } else if(a <= c && c <= b){
        return [a, c, b]
    } else if(b <= a && a <= c){
        return [b, a, c]
    } else if(b <= c && c <= a){
        return [b, c, a]
    } else if(c <= a && a <= b){
        return [c, a, b]
    } else if(c <= b && b <= a){
        return [c, b, a]
    }
}

export function dividers(number){

    let dividers = new Array()

    for (let i = 1; i <= number; i++){

        if (number%i === 0){

            dividers.push(i)

        }

    }

    return dividers

}

export function income_tax(salary){

    let ir = 0
    if(salary>2000){
        if((salary-2000)<=(3000-2000.01)){
            ir = (salary-2000)*0.08
        } else {
            ir = (3000-2000.01)*0.08
            if((salary-2000-(3000-2000.01)) <= (4500-3000.01) && (salary-2000-(3000-2000.01)) > 0){
                ir = ir + (salary-2000-(3000-2000.01))*0.18
            } else {
               ir = ir + (4500-3000.01)*0.18
               if((salary-2000-(3000-2000.01)-(4500-3000.01))>0){
                    ir = ir + (salary-2000-(3000-2000.01)-(4500-3000.01))*0.28
              }
            }
       }
        return ir.toFixed(2)
    } else {
        return "Isento"
    }

}



