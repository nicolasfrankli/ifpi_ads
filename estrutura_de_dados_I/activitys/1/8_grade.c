#include <stdio.h>

int main(void){
    float value;

    printf("Enter a value:");
    scanf("%f", &value);
    printf("7 per cent of %.2f is %.2f\n", value, value * 0.7);
}