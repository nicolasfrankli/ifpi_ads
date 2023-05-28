import prompt from 'prompt-sync';
const input = prompt()

function main(){

    let i = 0
    let average = []
    
    while(i < 2){
        let grade = Number(lines[index++])
        if(validate_grade(grade)){
            average.push(grade)
            i++
        } else{
            console.log('nota invalida')
        }
    }

    console.log(`media = ${((average[0] + average[1]) / 2).toFixed(2)}`)

}


function validate_grade(grade){
    if(grade < 0 || grade > 10){
        return false
    } else {
        return true
    }
}


main()