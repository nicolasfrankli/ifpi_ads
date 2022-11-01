#include <stdio.h>
#include "../9_list/list.h"

void ordlpushsingle(Item x, List *L) {
    while( *L != NULL && (*L)->item < x ) L = &(*L)->prox;
    if (*L == NULL || (*L)->item != x){
        *L = no(x, *L); 
    }
}

void ordlpush(Item x, List *L) {
    while( *L != NULL && (*L)->item < x ) L = (*L)->prox;
    *L = no(x, *L); 
}

void ordlrem(Item x, List *L) {
    while( *L != NULL && (*L)->item > x ) return;
    List n = *L;
    *L = n->prox;
    free(n);
}

int search(Item x, List L) {
    while ( L != NULL && L->item < x ) L = L->prox;
    return (L != NULL && L->item == x);
}