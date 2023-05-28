import prompt from 'prompt-sync';
import { ordem } from '../../../function.js'
const input = prompt()

function main(){

    let number_of_voters = Number(input('How many voters ?'))

    let candidate_a_for = 0
    let candidate_b_for = 0
    let candidate_c_for = 0
    let null_vote_for = 0
    let white_vote_for = 0
    let winner
    for(let i = 1; i <= number_of_voters; i++){

        let vote_for = Number(input())

        if (vote_for === 1){

            candidate_a_for++

        } else if (vote_for === 2){

            candidate_b_for++

        } else if (vote_for === 3){

            candidate_c_for++

        } else if(vote_for === 0){

            white_vote_for++

        } else if (vote_for === 9){

            null_vote_for++

        }

        if (ordem(candidate_a_for, candidate_b_for, candidate_c_for)[2] === candidate_c_for){
            winner = 'Candidate C'
        } else if (ordem(candidate_a_for, candidate_b_for, candidate_c_for)[2] === candidate_b_for){
            winner = 'Candidate B'
        } else {
            winner = 'Candidate A'
        }

    }

    console.log(`--------- election results---------
Candidate A: ${candidate_a_for} Candidate B: ${candidate_b_for} Candidate C: ${candidate_c_for}
Null votes: ${null_vote_for} White votes: ${white_vote_for}
Winner: ${winner}`)

    let candidate_a_while = 0
    let candidate_b_while = 0
    let candidate_c_while = 0
    let null_vote_while = 0
    let white_vote_while = 0
    let winner_while
    let count = 0
    while(count <= number_of_voters){

        let vote_while = Number(input())

        if (vote_while === 1){

            candidate_a_while++

        } else if (vote_while === 2){

            candidate_b_while++

        } else if (vote_while === 3){

            candidate_c_while++

        } else if(vote_while === 0){

            white_vote_while++

        } else if (vote_while === 9){

            null_vote_while++

        }

        if (ordem(candidate_a_while, candidate_b_while, candidate_c_while)[2] === candidate_c_while){
            winner_while = 'Candidate C'
        } else if (ordem(candidate_a_while, candidate_b_while, candidate_c_while)[2] === candidate_b_while){
            winner_while = 'Candidate B'
        } else {
            winner_while = 'Candidate A'
        }

        count++

    }

    console.log(`--------- election results---------
Candidate A: ${candidate_a_while} Candidate B: ${candidate_b_while} Candidate C: ${candidate_c_while}
Null votes: ${null_vote_while} White votes: ${white_vote_while}
Winner: ${winner_while}`)

}


main()