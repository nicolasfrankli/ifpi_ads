/*Supondo-se que a população de uma cidade A seja de 200.000 habitantes, com uma taxa anual de
crescimento na ordem de 3.5%, e que a população de uma cidade B seja de 800.000 habitantes,
crescendo a uma taxa anual de 1.35%, Escreva um algoritmo que determine quantos anos serão
necessários, para que a população da cidade A ultrapasse a população da cidade B.*/

function main(){

    let city_a = 200000
    let city_b = 800000
    let years = 0
    for(let i = 0;city_a <= city_b;i++){

        city_a *= 1.035
        city_b *= 1.0135
        years = i

    }

    console.log(`${years} years.`)

}


main()