import prompt from 'prompt-sync';
const input = prompt()

function main(){

    let draw = 0
    let new_grenal = 1
    let vitory_inter = 0
    let vitory_gremio = 0
    let vitory_team 
    
    while(permission(new_grenal)){
        
        let [inter, gremio] = input().split(' ').map(Number)

        if(inter > gremio){
            
            vitory_inter += 1

        } else if(inter < gremio){

            vitory_gremio += 1

        } else {

            draw += 1

        }

        console.log(`Novo grenal (1-sim 2-nao)`)
        new_grenal = Number(input())

    }
    
    if(vitory_inter > vitory_gremio){
            
        vitory_team = 'Inter venceu mais'

    } else if(vitory_inter < vitory_gremio){

        vitory_team = 'Gremio venceu mais'

    } else {

        vitory_team = 'Nao houve vencedor'

    }

    console.log(`${vitory_inter + vitory_gremio + draw} grenais\nInter:${vitory_inter}\nGremio:${vitory_gremio}\nEmpates:${draw}\n${vitory_team}`)
    
}


function permission(number){
    
    while(number !== 2){

        if(number == 1){
            return true
        }

        console.log('novo grenal (1-sim 2-nao)')
        number = Number(input())

    }

}


main()