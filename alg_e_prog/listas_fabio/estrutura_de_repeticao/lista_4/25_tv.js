/* Foi feita uma pesquisa de audiência de canal de TV em várias casas em Teresina, num certo dia. Para
cada casa visitada, o entrevistado informou o número do canal (2, 4, 5, 7, 10) e o número de pessoas que
estavam assistindo TV. Escreva um algoritmo que leia um número indeterminado de dados (terminando
quando for lido um canal igual a zero) e calcule o percentual de audiência para cada emissora,
mostrando ao final, o número de cada canal e sua respectiva audiência.*/
import prompt from 'prompt-sync';
const input = prompt()


function main(){

    let audience_research 
    let channel = 1
    let number_of_people_watching
    let audience_list = new Array(5).map(Number)
    let total_people_watching = 0
    const channels_list = [2, 4, 5, 7, 10]
    while (channel !== 0){

        audience_research = input('Channel and number of people watching:').split(' ').map(Number)
        channel = audience_research[0]
        number_of_people_watching = audience_research[1]
        for(let i = 0;i < channels_list.length;i++){

            if(channels_list[i] === channel){

                audience_list[i] = 0 + number_of_people_watching
                total_people_watching += number_of_people_watching

            }

        }

    }
    console.log(`--------- Audience Research ---------`)
    for (let i = 0; i < audience_list.length; i++){

        console.log(`Channel ${channels_list[i]} > Audience: ${audience_list[i]} ${Math.trunc(audience_list[i] * 100 / total_people_watching)}%`)

    }

}


main()