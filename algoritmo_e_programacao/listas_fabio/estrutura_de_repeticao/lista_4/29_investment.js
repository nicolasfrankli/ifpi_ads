/*Escreva um algoritmo que calcula o retorno de um investimento financeiro. O usuário deve informar
quanto será investido por mês e qual será a taxa de juros mensal. O algoritmo deve informar o saldo do
investimento após um ano (soma das aplicações mensais + juros compostos), e perguntar ao usuário se
deseja calcular o ano seguinte, sucessivamente. Por exemplo, caso o usuário deseje investir R$ 100,00
por mês, e tenha uma taxa de juros de 1% ao mês, o algoritmo forneceria a seguinte saída:
Saldo do investimento após 1 ano: 1268.25
Deseja processar mais um ano (S/N) ?*/
import prompt from 'prompt-sync';
const input = prompt()


function main(){

    let monthly_application, monthly_rate, invested_capital
    let amount = 0
    let financial_information
    let more_years
    while (more_years !== 'N'){

        financial_information = input('How much will be invested per month and what will be the monthly interest rate ?').split(' ').map(Number)
        monthly_application = financial_information[0]
        monthly_rate = financial_information[1]
        
        for (let i = 0 ; i <= 11 ; i++){

            amount += monthly_application * ((1 + monthly_rate / 100) ** i)

        }

        console.log(`Investment balance after 1 year: ${amount.toFixed(2)}`)
        more_years = input('Want to process another year (Y/N) ?')

    }

}


main()