#include <stdio.h>

int main(void){
    float salary;

    printf("How much do you earn?");
    scanf("%f", &salary);
    printf("Congratulations, you've earned a 25 per cent raise, your new salary is $%.2f\n", salary * 1.25);
}