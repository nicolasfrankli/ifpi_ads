import prompt from 'prompt-sync';
const input = prompt()

function main(){

    let i = 0
    let average = []
    let new_calc = 1
    
    while(permission(new_calc)){
        
        i = 0
        average = []

        while(i < 2){
            
            let grade = Number(input())
            
            if(validate_grade(grade)){
                
                average.push(grade)
                i++

            } else{

                console.log('nota invalida')

            }
        }

        console.log(`media = ${((average[0] + average[1]) / 2).toFixed(2)}\nnovo calculo (1-sim 2-nao)`)
        new_calc = Number(input())

    }
}


function validate_grade(grade){
    if(grade < 0 || grade > 10){
        return false
    } else {
        return true
    }
}

function permission(number){
    
    while(number !== 2){

        if(number == 1){
            return true
        }

        console.log('novo calculo (1-sim 2-nao)')
        number = Number(input())

    }

}


main()