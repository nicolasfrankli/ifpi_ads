import prompt from 'prompt-sync';
const input = prompt({sigint: true});

function main(){
    const [side_a, side_b, side_c] = input('Type the sides of triangle:').split(' ').map(Number)
    if(validate_triangle_side(side_a, side_b, side_c)){
        console.log(`${order_sides(side_a, side_b, side_c)[2]} is the hypotenuse and ${order_sides(side_a, side_b, side_c)[0]} ${order_sides(side_a, side_b, side_c)[1]} are the legs.`)
    } else{
        console.log('This triangle doesn´t exist.')   
    }
}

function validate_triangle_side(a, b, c){
    if (c < (a+b) && c!== 0 && b!==0 && a!==0){
        return true
    }
}

function order_sides(a, b, c){
    if(a <= b && b <= c){
        return [a, b, c]
    } else if(a <= c && c <= b){
        return [a, c, b]
    } else if(b <= a && a <= c){
        return [b, a, c]
    } else if(b <= c && c <= a){
        return [b, c, a]
    } else if(c <= a && a <= b){
        return [c, a, b]
    } else if(c <= b && b <= a){
        return [c, b, a]
    }
}

main()