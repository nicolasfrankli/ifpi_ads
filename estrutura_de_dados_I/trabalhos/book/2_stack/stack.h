#include <stdlib.h>
#include <stdbool.h>
#include <stdio.h>

typedef int Item; //Define o tipo dos itens da pilha

typedef struct stack
{
    int max;        //Capacidade da pilha
    int top;        //Topo
    Item *item;     //Itens da pilha
} *Stack;           //Cria  um ponteiro Stack no formato stack

Stack create_stack(){ //Função para criar uma pilha
    Stack S = malloc(sizeof(struct stack));
    S -> top = -1; //(*S).top = -1
    //S -> max = n; (*S).max = n
    S -> item = malloc(sizeof(Item));
    return S;
}

bool is_empty(Stack S){
    if(S -> top == -1){
        return true;
    } else {
        return false;
    }
}

/*bool is_full(Stack S){
    if(S -> top == S -> max - 1){
        return true;
    } else {
        return false;
    }
}*/

/*void push(Item x, Stack S){
    if(is_full(S)){
        puts("Stack is full!");
        abort();
    } else {
        S->top++;
        S->item[S->top] = x;
    }
}*/

void push(Item x, Stack S){
    S->top++;
    S->item[S->top] = x;
}

int pop(Stack S){
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