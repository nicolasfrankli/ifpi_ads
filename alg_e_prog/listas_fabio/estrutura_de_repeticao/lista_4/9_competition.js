import prompt from 'prompt-sync';
const input = prompt();


function main(){

    let test_number_for = 1
    let number_of_swimmers_for = 1
    let list_for
    let club_a_for = 0
    let club_b_for = 0
    let winner
    for (let i = 1; number_of_swimmers_for !== 0 && test_number_for !== 0;i++){

        list_for = input('Race and number of swimmers:').split(' ').map(Number)
        test_number_for = list_for[0]
        number_of_swimmers_for = list_for[1]
        for (let position_for = 0; position_for < number_of_swimmers_for; position_for++){

            let [class_for, club_for] = input('Classification and Club:').split(' ')
            if (club_for === 'b'){

                club_b_for += punctuation(class_for)

            } else {

                club_a_for += punctuation(class_for)

            }
            if(club_b_for > club_a_for){

                winner = 'Club B is the winner'

            } else if (club_a_for > club_b_for){

                winner = 'Club A is the winner'

            } else {

                winner = 'Draw'

            }

        }

    }

    console.log(`Club A:${club_a_for}\nClub B:${club_b_for}\n${winner}`)

}

    let test_number_while = 1
    let number_of_swimmers_while = 1
    let list_while
    let club_a_while = 0
    let club_b_while = 0
    let winner
    let count = 0
    while (number_of_swimmers_while !== 0 && test_number_while !== 0){

        list_while = input('Race and number of swimmers:').split(' ').map(Number)
        test_number_while = list_while[0]
        number_of_swimmers_while = list_while[1]
        while (count < number_of_swimmers_while){

            let [class_for, club_for] = input('Classification and Club:').split(' ')
            if (club_for === 'b'){

                club_b_while += punctuation(class_for)

            } else {

                club_a_while += punctuation(class_for)

            }
            if(club_b_while > club_a_while){

                winner = 'Club B is the winner'

            } else if (club_a_while > club_b_while){

                winner = 'Club A is the winner'

            } else {

                winner = 'Draw'

            }
            count++

        }

    }

    console.log(`Club A:${club_a_while}\nClub B:${club_b_while}\n${winner}`)

function punctuation(position){

    const points =[9, 6, 4, 3]
    return points[position - 1]

}


main()