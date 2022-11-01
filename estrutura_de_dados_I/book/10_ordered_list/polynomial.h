#include <stdio.h>
#include <stdlib.h>

typedef struct poly {
    float coef;
    int expo;
    struct poly *prox;
} *Poly;

Poly term(float c, int e, Poly p) {
    Poly n = malloc(sizeof(struct poly));
    n->coef = c;
    n->expo = e;
    n->prox = p;
    return n;
} 

void showp(Poly P) {
    if( P == NULL ) return;
    printf("%+1.f", P->coef);
    if( P->expo!=0 ) printf("*xˆ%d", P->expo);
    showp(P->prox);
}


void add(float c, int e, Poly *P) {
    if ( *P == NULL || (*P)->expo<e )
        *P = term(c, e, *P);
    else if( (*P)->expo==e ) {
        (*P)->coef += c;
        if( (*P)->coef==0 ) {
            Poly n = *P;
            *P = n->prox;
            free(n);
        }
    }
    else add(c,e,&(*P)->prox);
}

Poly sump(Poly P, Poly Q) {
    while (P != NULL) {
        add(P->coef, P->expo, &Q);
        P = P->prox;
    }

    return Q;
}
// Poly sum(Poly P, Poly Q) {
//     if( P == NULL ) return;
//     if( P->expo!=0 ) printf("*xˆ%d", P->expo);
//     showp(P->prox);
// }