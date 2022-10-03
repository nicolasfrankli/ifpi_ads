/*Escreva um algoritmo que leia um conjunto de dados de um grupo de 100 pessoas, sexo (1=Masculino,
2=Feminino), idade e estado civil (1=Casado, 2=Solteiro, 3=Divorciado, 4=Viúvo) e escreva:
· Média de idade das mulheres;
· Média de idade dos homens;
· O percentual de homens solteiros;
· O percentual de mulheres solteiras;
· A quantidade de mulheres divorciadas acima de 30 anos.*/
import prompt from 'prompt-sync';
const input = prompt()


function main(){

    let data
    let sex
    let age
    let marital_status
    let age_man = 0
    let age_woman = 0
    let number_of_man = 0
    let number_of_woman = 0
    let number_of_single_woman = 0
    let number_of_single_man = 0
    let number_of_married_woman_over_30_years_old = 0
    let total_people = 0
    for (let i = 1;i <= 3;i++){

        data = input('Gender, age and Marital Status:').split(' ').map(Number)
        sex = data[0]
        age = data[1]
        marital_status = data[2]
        if (sex === 1){

            age_man += age
            number_of_man++
            if (marital_status === 2){

                number_of_single_man++

            }

        } else if(sex === 2){

            age_woman += age
            number_of_woman++
            if (marital_status === 2){

                number_of_single_woman++

            } else if(marital_status === 3 && age > 30){

                number_of_married_woman_over_30_years_old++

            }

        } 

    }
    console.log(`--------- movie Research ---------
Average age of Woman: ${Math.trunc(age_woman / number_of_woman)} years
Average age of Man: ${Math.trunc(age_man/ number_of_man)} years
Percentage of single man: ${Math.trunc(number_of_single_man / number_of_man) * 100} %
Percentage of single woman: ${Math.trunc(number_of_single_woman / number_of_woman) * 100} %
Number of married woman over than 30 years old: ${number_of_married_woman_over_30_years_old}`)


}


main()