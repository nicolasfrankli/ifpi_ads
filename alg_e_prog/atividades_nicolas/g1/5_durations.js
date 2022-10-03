import prompt from 'prompt-sync'
const input = prompt()


function main(){

    const [first_hour, first_minutes] = input('hh/mm: ').split('/').map(Number)
    const [second_hour, second_minutes] = input('hh/mm: ').split('/').map(Number)
    
    console.log(`${duration(first_hour, first_minutes, second_hour, second_minutes)[0]}/${duration(first_hour, first_minutes, second_hour, second_minutes)[1]}`)    
    
}


function duration(first_hour, first_minutes, second_hour, second_minutes) {
    let hours = 0
    let minutes = 0

    if (second_minutes < first_minutes) {
        
        hours = second_hour - first_hour - 1
        minutes = second_minutes + 60 - first_minutes

    } else{
       
        hours = second_hour - first_hour
        minutes = second_minutes - first_minutes

    }
    if(hours < 0){

        hours *= -1

    }

    return [hours, minutes]

}


main()