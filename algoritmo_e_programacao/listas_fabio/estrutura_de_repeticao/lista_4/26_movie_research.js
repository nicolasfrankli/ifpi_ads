/*Cada espectador de um cinema respondeu a um questionário no qual constava sua idade e a sua opinião
em relação ao filme (1=ótimo, 2=bom, 3=regular, 4=péssimo). Escreva um algoritmo que leia a idade e
a opinião das pessoas, calcule e mostre ao final: (FLAG: idade = -1).
· a média das idades das pessoas que responderam ótimo;
· a quantidade de pessoas que respondeu regular;
· o percentual de pessoas que respondeu bom entre os entrevistados.*/
import prompt from 'prompt-sync';
const input = prompt()


function main(){

    let movie_research 
    let age = 1
    let opinion
    let movie_research_list = new Array(5)
    let age_excellent_opinion = 0
    let people_excellent_opinion = 0
    let people_regular_opinion = 0
    let people_good_opinion = 0
    let total_people = 0
    const opinion_list = [1, 2, 3, 4]
    while (age !== -1){

        movie_research = input('Age and Opinion:').split(' ').map(Number)
        age = movie_research[0]
        opinion = movie_research[1]
        for(let i = 0;i < opinion_list.length;i++){

            if(opinion === opinion_list[i]){

                movie_research_list[i] = 0 + 1
                total_people ++
                if(opinion === 1){

                    people_excellent_opinion++
                    age_excellent_opinion += age


                } else if(opinion === 3) {

                    people_regular_opinion++

                } else if(opinion === 2){

                    people_good_opinion++

                }

            }

        }

    }
    console.log(`--------- movie Research ---------
Average age of people who answered excellent: ${Math.trunc(age_excellent_opinion / people_excellent_opinion)} years
Number of people who answered regular: ${people_regular_opinion}
Number of people who answered good: ${people_good_opinion}`)


}


main()