import prompt from 'prompt-sync';
const input = prompt({sigint: true});

function main(){ 
    const [grade1, grade2] = input('Type two grades:').split(' ').map(Number)
    console.log(`${report(grade1, grade2)[0]}\n${report(grade1, grade2)[1]}`)
}

function report(g1, g2){
    const average = (g1 + g2)/2
    let concept = ''
    if (average >= 9){
        concept = 'A'
    } else if (average >= 7.5){
        concept = 'B'
    } else if (average >= 6){
        concept = 'C'
    } else if (average >= 4){
        concept = 'D'
    } else if (average >= 0){
        concept = 'E'
    }
    if (average >= 7){
        return ['Aprovado', concept]
    } else {
        return ['Reprovado', concept]
    }
}
main()