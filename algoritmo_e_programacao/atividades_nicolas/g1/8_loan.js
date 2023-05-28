import prompt from 'prompt-sync';
const input = prompt();

function main(){
    
    const [monthly_income, loan_amount, loan_term] = input('Type your monthly income, loan amount and the loan term:').split(' ').map(Number)
    
    if (loan_term < 2 || loan_term > 24){
        console.log('The loan term must be bigger than 2 and lowest than 24')
    } else {
        const iof = loan_amount * (0.0038 + (0.000082 * 30 * loan_term))
        let AmountofInterestPayable = loan_amount / loan_term
        const selic = 0.1275
        
        if(loan_term <= 6){
            AmountofInterestPayable *= 0.5 * selic
        } else if(loan_term <= 12){
            AmountofInterestPayable *= 0.75 * selic
        } else if (loan_term <= 18){
            AmountofInterestPayable *= selic
        } else {
            AmountofInterestPayable *= 1.38 * selic
        }
        console.log(`IOF Value: R$${iof.toFixed(2)}
Amount of Interest Payable: R$${(AmountofInterestPayable).toFixed(2)}
Total Amount Payable: R$${(loan_amount + iof + AmountofInterestPayable).toFixed(2)}
Amount of the Monthly Installment: ${loan_term}x of R$${(loan_amount / loan_term).toFixed(2)}`)
    }

    if (loan_amount / loan_term > 0.4 * monthly_income){
        console.log('Loan denied!')
    } else {
        console.log('Aproved Loan!')
    }
}


main()