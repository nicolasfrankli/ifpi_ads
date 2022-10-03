function main(){

    let amount = 3000
    let days = 0
    for(let i = 0; amount >= 0; i++){

        amount *= 1.0085
        amount -= 200
        days = i

    }

    console.log(days)

}


main()