import prompt from 'prompt-sync';
const input = prompt()

function main(){

    let number_of_people = Number(input('How many people ?'))

    let number_of_less_salary_for = 0
    let total_salary_for = 0
    let total_sons_for = 0
    for(let i = 1; i <= number_of_people; i++){

        let [salary_for, number_of_sons_for] = input().split(' ').map(Number)
        total_salary_for += salary_for
        total_sons_for += number_of_sons_for

        if (salary_for <= 1000){

            number_of_less_salary_for++

        }

    }

    console.log(`--------- Search ---------
Average Salary of the Population: R$ ${(total_salary_for/number_of_people).toFixed(2)}
Average Number of children in the Population: ${Math.trunc(total_sons_for/number_of_people)}
Percentage of people earning less than R$1000: ${(number_of_less_salary_for * 100 / number_of_people).toFixed(2)}%`)

    let count = 1
    let number_of_less_salary_while = 0
    let total_salary_while = 0
    let total_sons_while = 0
    while(count <= number_of_people){

        let [salary_while, number_of_sons_while] = input().split(' ').map(Number)
        total_salary_while+= salary_while
        total_sons_while+= number_of_sons_while

        if (salary_while <= 1000){

            number_of_less_salary_while++

        }

        count ++

    }

    console.log(`--------- Search ---------
Average Salary of the Population: R$ ${(total_salary_while/number_of_people).toFixed(2)}
Average Number of children in the Population: ${Math.trunc(total_sons_while/number_of_people)}
Percentage of people earning less than R$1000: ${(number_of_less_salary_while * 100 / number_of_people).toFixed(2)}%`)
}


main()