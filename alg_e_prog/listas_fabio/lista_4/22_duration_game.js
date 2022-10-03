import prompt from 'prompt-sync';
const input = prompt({sigint: true});

function main(){
    const [h1, m1] = input('Start time:').split(' ').map(Number)
    const [h2, m2] = input('Finish time:').split(' ').map(Number)
    console.log(`The game lasted ${duration(h1, m1, h2, m2)[0]} hours and ${duration(h1, m1, h2, m2)[1]} minutes.`)
}

function duration(h1, m1, h2, m2){
    let hours = 0
    let minutes = 0 
    if (h2 < h1){
        hours = 24 - h1 + h2
    } else if(h2 == h1 && m2 < m1){
        hours = 23
    } else {
        hours = h2 - h1
    }
    if (m2 < m1){
        minutes = 60 - m1 + m2
    } else if(m2 == m1){
        minutes = 0
    } else {
        minutes = m2 - m1
    }
    return [hours, minutes]
}

main() 