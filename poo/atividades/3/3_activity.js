//1
function parity(number) {
    if (number % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}
//2
function prime_number(number) {
    for (var index = 0; index < number; index++) {
        if (index !== 1 && index !== number && number % index == 0) {
            return false;
        }
    }
    if (index == number) {
        return true;
    }
}
//3
function salutation(name, pronoun) {
    if (pronoun === void 0) { pronoun = "Sr."; }
    return "".concat(pronoun, " ").concat(name, ".");
}
//4
function array_to_string(number_array) {
    var parameter;
    var output_array = [];
    number_array.forEach(function (value) {
        parameter = "".concat(value, "-");
        output_array += parameter;
    });
    return output_array;
}
//5
function soma(x, y) {
    return x + y;
}
console.log(soma(1, 2)); //3
console.log(soma(1, "2")); //12
console.log(soma(1)); //NaN
//6
function show() {
    var letras = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        letras[_i] = arguments[_i];
    }
    console.log(letras);
}
//7
var Hello = function () { return console.log("Hello!"); };
//8
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
var filter_pair_numbers = function (array) { return console.log(array.filter(parity)); };
filter_pair_numbers(array);
