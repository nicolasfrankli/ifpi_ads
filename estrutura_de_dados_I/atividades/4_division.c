#include <stdio.h>

int main(void){
    int a;
    int b;
    printf("Type a number:");
    scanf("%d", &a);
    printf("Type a number:");
    scanf("%d", &b);
    printf("The quotient is %d and the rest is %d\n", a/b, a%b);
}