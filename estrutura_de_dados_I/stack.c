#include <stdlib.h>
#include <stdbool.h>
#include <stdio.h>

typedef char Item; //Define o tipo dos itens da pilha

typedef struct stack
{
    int max;        //Capacidade da pilha
    int top;        //Topo
    Item *item;     //Itens da pilha
} *Stack;           //Cria  um ponteiro Stack no formato stack


Stack stack(int n){ //Função para criar uma pilha
    Stack S = malloc(sizeof(struct stack));
    S -> top = -1; //(*S).top = -1
    S -> max = n; //(*S).max = n
    S -> item = malloc(n*sizeof(Item));
    return S;
}

bool is_empty(Stack S){
    if(S -> top == -1){
        return true;
    } else {
        return false;
    }
}

bool is_full(Stack S){
    if(S -> top == S -> max - 1){
        return true;
    } else {
        return false;
    }
}

void insert(Item x, Stack S){
    if(is_full(S)){
        puts("Stack is full!");
        abort();
    } else {
        S->top++;
        S->item[S->top] = x;
    }
}

void pop(Stack S){
    if(is_empty(S)){
        puts("Stack is empty");
        abort();
    } else {
        Item x = S->item[S->top];
        S->top--;
        return x;
    }
}

void destroy(Stack *A){
    free((*A)->item);
    free(*A);
    *A = NULL;

}
int main(void){
    Stack a = stack(5);
    is_full(a);
    printf("%d\n", is_full(a));

}
