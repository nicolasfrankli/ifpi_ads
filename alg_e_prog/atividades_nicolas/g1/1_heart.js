import prompt from 'prompt-sync';
const input = prompt();


function main(){

    const [age, current_heart_rate] = input('How old are you and what is your current heart rate?').split(' ').map(Number)
    const maximum_heart_rate = 220 - age
    const zones = ['Moderate activity', 'Weight control', 'Aerobics', 'Anaerobic', 'Maximum effort']
    const intensity = [50, 60]
    let current_activity = ''
    let heart_rate_limits = '--------- Heart Rate Limits ---------'
    
    for (let i = 0; i < zones.length; i++){

        heart_rate_limits += `\n${zones[i]}: ${Math.trunc((intensity[0] * maximum_heart_rate)/100)} - ${Math.trunc((intensity[1] * maximum_heart_rate)/100)}`
        if (current_heart_rate >= Math.trunc((intensity[0] * maximum_heart_rate)/100) && current_heart_rate <= Math.trunc((intensity[1] * maximum_heart_rate)/100)){

            current_activity = `You are on ${zones[i]}`

        }
        intensity[0] += 10
        intensity[1] += 10

    }

    console.log(`${heart_rate_limits}\n${current_activity}`)

}


main()