import prompt from 'prompt-sync';
const input = prompt({sigint: true});

function main(){
    const list_questions = ['Telefonou para a vítima ?', 'Esteve no local do crime ?', 'Mora perto da vítima ?', 'Devia para a vítima ?', 'Já trabalhou com a vítima ?']
    let answer = []
    let get_answer = ''
    let i = 0
    while (i < 5){
        get_answer = input(`${list_questions[i]}`).toUpperCase()
            if (valid_answer(get_answer)){
                answer.push(get_answer)
            } else {
                console.log('Resposta Inválida!')
                continue
            }
        i ++
    }
    console.log(judgment(answer))
}

function valid_answer(answer){
    if (answer == 'S' || answer === 'N'){
        return true
    } else {
        return false
    }
}

function judgment(answer){
    let count = 0
    for(let i of answer){
        if(i == 'S'){
            count ++
        }
    }
    if (count == 5){
        return '\nAssassino!'
    } else if(count == 2){
        return '\nSuspeita!'
    } else if(count < 2 ){
        return '\nInocente!'
    } else {
        return '\nCúmplice!'
    }
}

main()