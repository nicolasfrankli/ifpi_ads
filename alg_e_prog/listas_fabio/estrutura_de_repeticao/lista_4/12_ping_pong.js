import prompt from 'prompt-sync';
const input = prompt();


function main(){

    let point_1_for = 0
    let point_2_for = 0
    for(;!pontuation(point_1_for, point_2_for);){

        let player_for = Number(input())
        if (player_for === 1){

            point_1_for++

        } else {

            point_2_for++

        }
        if (point_1_for >= 21 || point_2_for >= 21 && point_1_for - point_2_for >= 2 || point_2_for - point_1_for >= 2){

            if(point_2_for > point_1_for){

                console.log('Player 2 wins!')

            } else {

                console.log('Player 1 wins!')

            }

        }

    }
    
}


function pontuation(points1, points2){

    if (points1 >= 21 || points2 >= 21 && points1 - points2 >= 2 || points2 - points1 >= 2){

            return true

    }

}


main()