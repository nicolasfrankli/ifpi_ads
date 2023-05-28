import prompt from 'prompt-sync';
const input = prompt();


function main(){

    let total_approved_for = 0
    let total_disapproved_for = 0
    let enrollment_for = 1
    for(;enrollment_for !== 0;){

        let student_information_for = input().split(' ').map(Number)
        enrollment_for = student_information_for[0]
        let grade1_for = student_information_for[0]
        let grade2_for = student_information_for[0]
        let grade3_for = student_information_for[0]
        let final_media_for = (2 * grade1_for + 3 * grade2_for + 5 * grade3_for) / 10
        if (enrollment_for !== 0){

            if (final_media_for >= 7){

                total_approved_for++

            } else {

                total_disapproved_for++

            }

        }

    }
    console.log(`------- Franklin´s School -------
Total Approved: ${total_approved_for}
Total Disapproced: ${total_disapproved_for}
Total Number of Students: ${total_approved_for + total_disapproved_for}`)

    let total_approved_while = 0
    let total_disapproved_while = 0
    let enrollment_while = 1

    while (enrollment_while !== 0){

        let student_information_while = input().split(' ').map(Number)
        enrollment_while = student_information_while[0]
        let grade1_while = student_information_while[0]
        let grade2_while = student_information_while[0]
        let grade3_while = student_information_while[0]
        let final_media_while = (2 * grade1_while + 3 * grade2_while + 5 * grade3_while) / 10
        if (enrollment_while !== 0){

            if (final_media_while >= 7){

                total_approved_while++

            } else {

                total_disapproved_while++

            }

        }

    }
    console.log(`------- Franklin´s School -------
Total Approved: ${total_approved_while}
Total Disapproced: ${total_disapproved_while}
Total Number of Students: ${total_approved_while + total_disapproved_while}`)

}


main()