import { readFileSync } from 'fs'


function main(){

    let line = readFileSync(`students.txt`, {encoding: 'utf-8'}).split('\n') //It is a list in which each element represents the data of a student
    const functions_list = [aproved, disapproved, final_test]
    const count_list = [0, 0, 0, 0]
    let name, average, student_data, frequency, number_of_absences, total_of_classes
    let class_average = 0

    console.log(`============ Franklin´s School ============
\n------- Average of each Student -------`)
    for (let index = 0; index < line.length; index++) {
        
        student_data = line[index].split(';')
        name = student_data[0]
        average = (Number(student_data[1]) + Number(student_data[2]) + Number(student_data[3]))/3
        class_average += average
        
        frequency = student_data[4].split('/')
        number_of_absences = Number(frequency[0])
        total_of_classes = Number(frequency[1])

        console.log(`${name} : ${average.toFixed(1)}`)

        for (let i = 0; i < functions_list.length ; i++){

            if (functions_list[i](average) && !disapproved_due_absences(total_of_classes, number_of_absences)){

                count_list[i]++

            }

        }

        if (disapproved_due_absences(total_of_classes, number_of_absences)){

            count_list[1]++
            count_list[3]++

        }

    }
    console.log(`\nClass Average: ${(class_average/line.length).toFixed(1)}
\nNumber of Approved: ${count_list[0]}
Number of Disapproved: ${count_list[1]}
Number of Students in Final Exam: ${count_list[2]}
Number of Students Failed for Absence: ${count_list[3]}`)

}


function aproved(average){

    if(average >= 7){
        return true
    }

}


function disapproved(average){
    if(average < 4){
        return true
    }
}


function final_test(average){
    if(average >= 4 && average < 7){
        return true
    }
}


function disapproved_due_absences(total_of_classes, number_of_absences, reason = 0.25){

    if(number_of_absences / total_of_classes >= 0.25){
        return true
    }

}


main()