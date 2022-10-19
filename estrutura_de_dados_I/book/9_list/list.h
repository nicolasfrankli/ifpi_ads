#include <stdio.h>
#include <stdlib.h>

#define format "%d" //Formato de exibição dos itens
typedef int Item;   //Tipo dos itens na lista
typedef struct no { //Estrutura dos nós da lista
    Item item;
    struct no *prox;

} *List;            //Tipo de ponteiro para lista  

List no(Item x, List p) { //Função para criação de um nó de lista encadeada
    List n = malloc(sizeof(struct no));
    n->item = x;
    n->prox = p;
    return n;
}

Item show_list(List L){
    while( L != NULL ) {
        printf("%d\n", L->item);
        //return L->item;
        L = L->prox;
    }
}


int list_length(List L) {
    if( L == NULL ) return 0;
    return 1 + list_length(L->prox); 
}

//9.2
int list_ocurrence(Item x, List L){
    int count = 0;
    while ( L != NULL) {
        if ( x == L->item){
            count++;
        }
        L = L->prox;
    }
    return count;
}

void show_inv_list(List L){
    if ( L == NULL ) return;
    show_inv_list(L->prox);
    printf(format, L->item);
}

/*Item last_item_list(List L){
    if ( L == NULL ) return;
    show_inv_list(L->prox);
    return L->item;
}*/

int sum_list(List L){
    int sum = 0;
    while( L != NULL ) {
        sum += L->item;
        L = L->prox;
    }
    printf("%d\n", sum);
}

void replace_list(Item replace, Item add, List L){
    while ( L != NULL) {
        if ( replace == L->item){
            L->item = add;
        }
        L = L->prox;
    }
}

int compare_list(List L, List X){
    int count = 0;
    int auxiliate = list_length(L);
    while ( L != NULL && X != NULL ) {
        if ( X->item == L->item){
            count++;
        }
        L = L->prox;
        X = X->prox;
    }
    if(count == auxiliate) return 1;
    else return 0;
}

Item item_list(int position, List L){
    for (int i = 0; i < list_length(L); i++)
    {
        if (i == position - 1) break;
        L = L -> prox;
    }
    return L->item;
}