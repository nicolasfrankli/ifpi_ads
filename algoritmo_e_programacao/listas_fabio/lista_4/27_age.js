import prompt from 'prompt-sync';
const input = prompt({sigint: true});

function main(){
    const [db, mb, yb] = input('Birth date (dd/mm/yyyy) :').split('/').map(Number)
    const [d, m, y] = input('Current date (dd/mm/yyyy) :').split('/').map(Number)
    if(valid_date(d, m, y) && valid_date(db, mb, yb) && compare_date(yb, y)){
        console.log(age(db, mb, yb, d, m, y))
    } else{
        console.log('Invalid date!')   
    }
}

function valid_date(d, m, y){
    if(0 <= d && d <= 31 && 0 <= m && m <= 12 && 0 <= y && y <= 2022){
        return true
    }
}

function compare_date(y, y1){
    if(y1 >= y){
        return true
    } 
}

function age(d1, m1, y1, d2, m2, y2){
    if(y2 > y1){
        if(m1 > m2){
            if(d1 > d2){
                return `You have ${(y2 - y1 - 1)} years, ${12 - m1 + m2 - 1} months and ${30 - d1 + d2} days.`
            } else {
                return `You have ${(y2 - y1 - 1)} years, ${12 - m1 + m2} months and ${d2 - d1} days.`
            }
        } else {
            if(d1 > d2){
                return `You have ${(y2 - y1)} years, ${m2 - m1 - 1} months and ${30 - d1 + d2} days.`
            } else {
                return `You have ${(y2 - y1)} years, ${m2 - m1} months and ${d2 - d1} days.`
            }
        }
    } else {
        if(m1 > m2){
            if(d1 > d2){
                return `You have ${12 - m1 + m2 - 1} months and ${30 - d1 + d2} days.`
            } else {
                return `You have ${12 - m1 + m2} months and ${d2 - d1} days.`
            }
        } else {
            if(d1 > d2){
                return `You have ${m2 - m1 - 1} months and ${30 - d1 + d2} days.`
            } else {
                return `You have ${m2 - m1} months and ${d2 - d1} days.`
            }
        }
    }
}

main()