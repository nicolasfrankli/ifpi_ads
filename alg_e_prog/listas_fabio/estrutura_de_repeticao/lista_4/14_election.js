import prompt from 'prompt-sync';
import { ordem } from '../../../function.js'
const input = prompt();


function main(){

    let serra = 0
    let dilma = 0
    let ciro = 0
    let null_white_vote = 0
    let other_candidate = 0
    let undecided = 0
    let vote
    let winner
    for(;vote !== -1;){

        vote = Number(input())

        if (vote === 45){

            serra++

        } else if (vote === 13){

            dilma++

        } else if (vote === 23){

            ciro++

        } else if(vote === 0){

            null_white_vote++

        } else if (vote === 98){

            other_candidate++

        } else if (vote === 99){

            undecided++

        }

        if (ordem(serra, dilma, ciro)[2] === ciro){
            winner = 'Ciro Gomes was elected!'
        } else if (ordem(serra, dilma, ciro)[2] === dilma){
            winner = 'Dilma was elected!'
        } else if (ordem(serra, dilma, ciro)[2] === serra){
            winner = 'Serra was elected!'
        } else if (serra === dilma || serra === ciro || ciro === dilma || serra === dilma === ciro){
            winner = 'There must be a second round'
        }

    }

    console.log(`--------- election results---------
Serra: ${serra} Dilma: ${dilma} Ciro: ${ciro}
Null and White: ${null_white_vote} Undecided: ${undecided} Others: ${other_candidate}
${winner}`)

}


main()