import prompt from 'prompt-sync';
const input = prompt({sigint: true});

function main(){
    const [x1, y1] = input('Type the first coordinate (x,y):').split(',').map(Number)
    const [x2, y2] = input('Type the second coordinate (x,y):').split(',').map(Number)
    console.log(`${area_retangle(x1, y1, x2, y2)} is the area of retangle.`)
}

function area_retangle(x1, y1, x2, y2){
    return Math.abs((x2-x1) * (y2-y1))
}

main()