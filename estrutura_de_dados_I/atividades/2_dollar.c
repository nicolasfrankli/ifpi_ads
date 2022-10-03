#include <stdio.h>
int main(void){
float dollar_value;
float amount;

printf("Enter the dollar value: ");
scanf("%f", &dollar_value);
printf("How many dollars: ");
scanf("%f", &amount);
printf("$%.2f dollars is worth R$%.2f reais\n", amount, amount * dollar_value);

}