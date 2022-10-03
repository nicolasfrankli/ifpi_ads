import prompt from 'prompt-sync';
const input = prompt();


function main(){

    let salary_for = 1
    let salary_data 
    let increment_for = 0
    let new_salary_for = 0
    let total_salary_for = 0
    let total_new_Salary_for = 0
    for (;salary_for !== 0;){

        salary_for = Number(input(`Salary:`))
        salary_data = salary_readjustment(salary_for)
        new_salary_for = Number(salary_data[0])
        increment_for = Number(salary_data[1])
        total_salary_for += salary_for
        total_new_Salary_for += new_salary_for
        console.log(`-------- Franklin´s Company --------
New Salary: R$${new_salary_for}
Sum of current salaries: R$${total_salary_for}
Sum of readjusted salaries: R$${total_new_Salary_for}
Difference: R$${(total_new_Salary_for - total_salary_for).toFixed(2)}`)

    }

}

function salary_readjustment(salary){

    let increment = 0
    let new_salary = 0
    if(salary <= 2999){

        new_salary = salary * 1.25
        increment = salary * 0.25

    } else if(salary <= 5999){

        new_salary = salary * 1.20
        increment = salary * 0.20

    } else if(salary <= 9999){

        new_salary = salary * 1.15
        increment = salary * 0.15

    } else {

        new_salary = salary * 1.10
        increment = salary * 0.10

    }

    return [new_salary.toFixed(2), increment.toFixed(2)]

}


main()