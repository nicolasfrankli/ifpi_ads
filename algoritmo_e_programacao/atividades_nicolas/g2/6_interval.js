import prompt from 'prompt-sync'
const input = prompt()


function main(){

    let data1 = input("First date: ").split(' ').map(Number)
    let data2 = input("Second date: ").split(' ').map(Number)
    const data = [data1, data2]
    let duration

    for(let i = 0; i < data.length; i++){

        data[i] = date2seconds(data[i][0], data[i][1], data[i][2], data[i][3], data[i][4], data[i][5])

    }

    console.log(seconds2date(data[0] - data[1]))

}


function date2seconds(day, month, year, hours, minutes, seconds){

    return  31104000 * year + 2592000 * month + 86400 * day + 3600 * hours + 60 * minutes + seconds

}

function seconds2date(seconds){

    let date = new Array(6)
    const dividers = [31104000, 2592000, 86400, 3600, 60, 1]
    for (let index = 0; index < dividers.length; index++) {
        
        date[index] = (seconds - (seconds % dividers[index])) / dividers[index]
        seconds -= (dividers[index] * date[index])
        
    }

    return `${date[2]}/${date[1]}/${date[0]} ${date[3]}:${date[4]}:${date[5]}`

}


main();