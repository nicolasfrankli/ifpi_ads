//1
function parity(number){
    if (number % 2 == 0){
        return true;
    } else {
        return false;
    }
}
//2
function prime_number(number){
    for (var index = 0; index < number; index++) {
        if (index !== 1 && index !== number && number % index == 0){
            return false;
        }
    }
    if (index == number){
        return true;
    }
}
//3
function salutation(name, pronoun = "Sr."){
    return `${pronoun} ${name}.`
}
//4
function array_to_string(number_array){
    let parameter;
    let output_array = [];
    number_array.forEach(function (value) {
        parameter = `${value}-`;
        output_array += parameter;
    });
    return output_array;
}
//5
function soma(x: number, y?: any): number {
    return x + y
}
console.log(soma(1, 2)); //3
console.log(soma(1, "2")); //12
console.log(soma(1)); //NaN

//6
function show(...letras : string[]){
    console.log(letras)
}

//7
let Hello = () => console.log("Hello!")

//8
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let filter_pair_numbers = (array) => console.log(array.filter(parity));
filter_pair_numbers(array);