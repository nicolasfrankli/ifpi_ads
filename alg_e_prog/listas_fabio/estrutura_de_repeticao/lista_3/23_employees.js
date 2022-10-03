import prompt from 'prompt-sync';
const input = prompt()

function main(){

    let number_of_employess = Number(input('How many employess ?'))

    let salary_for = 0
    for(let i = 1; i <= number_of_employess; i++){

        let card_for = input().split(' ')
        let number_id_for = card_for[0]
        let number_of_hours = Number(card_for[1])
        let number_of_dependents = Number(card_for[2])
        salary_for = number_of_hours * 12 + 40 * number_of_dependents

        console.log(`--------- SALARY ${number_id_for}---------
INSS: R$ ${8.5*salary_for/100}
IR: R$ ${5*salary_for/100}
Net Salary: R$${salary_for * 86.5 / 100}`)

    }

    let salary_while = 0
    let count = 1
    while(count <= number_of_employess){

        let card_while = input().split(' ')
        let number_id_while = card_while[0]
        let number_of_hours_while= Number(card_while[1])
        let number_of_dependents_while = Number(card_while[2])
        salary_while = number_of_hours_while * 12 + 40 * number_of_dependents_while

        console.log(`--------- SALARY ${number_id_while}---------
INSS: R$ ${8.5*salary_while/100}
IR: R$ ${5*salary_while/100}
Net Salary: R$${salary_while * 86.5 / 100}`)

        count++
        
    }

}


main()