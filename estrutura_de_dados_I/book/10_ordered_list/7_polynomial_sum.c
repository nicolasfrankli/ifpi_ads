#include "polynomial.h"

int main(void){
    //Poly Q = NULL;
    Poly Q = term(2, 5, term(4, 7, NULL));
    Poly F = term(4, 5, term(4, 8, NULL));
    showp(sump(Q, F));
    printf("\n");
}