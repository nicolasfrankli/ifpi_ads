#include <stdio.h>
typedef struct { char valor[10]; } Str;
int main(void){
    int a = 3, b = 5;
    int *p = &a, *q = &b;
    *p = *p + *q;
    printf("%d,%d\n", a, b);
    return 0;
}