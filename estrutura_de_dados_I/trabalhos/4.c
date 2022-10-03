#include <stdio.h>
typedef struct { char valor[10]; } Italo;
int main(void){
    Italo x = { "um" };
    Italo y = { "dois" };
    puts (x.valor);
    x = y;
    puts(x.valor);
    return 0;
}