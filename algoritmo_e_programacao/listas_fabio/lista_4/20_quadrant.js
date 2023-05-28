import prompt from 'prompt-sync';
const input = prompt({sigint: true});

function main(){
    const angle = Number(input('Type the angle:'))
    console.log(quadrant(angle))
}

function quadrant(a){
    if(a >= 0 && a <= 90){
        return `1º quadrant.`
    } else if(a >= 90 && a <= 180){
        return `2º quadrant.`
    } else if(a >= 180 && a <= 270){
        return `3º quadrant.`
    } else if(a >= 270 && a <= 360){
        return `4º quadrant.`
    } else {
        return `Invalid angle.`
    }
}

main() 