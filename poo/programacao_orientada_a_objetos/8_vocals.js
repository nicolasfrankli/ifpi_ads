import prompt from 'prompt-sync';
const input = prompt({sigint: true});
// 0192 - 0255 (vogais acentuadas)
function main(){

    let list = [9, 5, 8, 4, 10]
    let ordinate_list = new Array(5)
    let c = 0
    while (c < 5){
        for (let count = 0; count < list.length; count++){
      
        ordinate_list[count] = ordinate(list[count], list[count + 1])[0]
        ordinate_list[count + 1] = ordinate(list[count], list[count + 1])[1]
        }
        c++
    }
    console.log(ordinate_list) 
}


function ordinate(a, b){

    if (a > b){

        return [b, a]

    } else {

        return [a, b]

    }

}

main() 