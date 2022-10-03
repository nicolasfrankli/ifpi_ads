import prompt from 'prompt-sync';
const input = prompt({sigint: true});

function main(){
    const [d1, m1, y1] = input('First date (dd/mm/yyyy) :').split('/').map(Number)
    const [d2, m2, y2] = input('Second date (dd/mm/yyyy) :').split('/').map(Number)
    if(valid_date(d1, m1, y1) && valid_date(d2, m2, y2)){
        console.log(`${recent_date(d1, m1, y1, d2, m2, y2)} is the most recent date.`)
    } else{
        console.log('Invalid date!')   
    }
}

function valid_date(d, m, y){
    if(d <= 31 && m <= 12 && y <= 2022 ){
        return true
    }
}

function recent_date(d1, m1, y1, d2, m2, y2){
    if(y2 > y1){
        return `${d2}/${m2}/${y2}`
    } else if(y2 == y1){
        if(m2 == m1){
            if(d1 <= d2){
                return `${d2}/${m2}/${y2}`
            } else {
                return `${d1}/${m1}/${y1}`
            }
        } else if(m2 > m1){
            return `${d2}/${m2}/${y2}`
        } else {
            return `${d1}/${m1}/${y1}`
        }
    } else {
        return `${d1}/${m1}/${y1}`
    }
}

main()