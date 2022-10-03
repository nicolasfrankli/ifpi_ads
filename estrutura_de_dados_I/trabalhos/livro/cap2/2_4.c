#include <stdlib.h>
#include <stdbool.h>

typedef struct pilha {
	int value;
	struct pilha* prox;	
} Pilha;

Pilha* create_item(char valor) {  //Cria item default que serve como ponteiro
	Pilha* item = (Pilha*) malloc(sizeof(Pilha));
	item->value = valor;
	item->prox = NULL;

	return item;
}

void push(int new_value, Pilha* pilha) { //Recebe um valor e uma pilha
	Pilha* new_item = create_item(new_value); 
	if(pilha->prox == NULL) { //Se a pilha estiver vazia, o item acrescentado passa a ser topo.
		pilha->prox = new_item; //pilha->prox = topo
	} else {
		new_item->prox = pilha->prox; //O item acrescentado passa a apontar para o topo
		pilha->prox = new_item; //Topo recebe o valor do item acrescentado
	}
}

Pilha* create_stack() {
	Pilha* new_stack = (Pilha*) malloc(sizeof(Pilha));
	new_stack->value = 0;
	new_stack->prox = NULL;

	return new_stack;
}
/*
bool stack_is_empty(Pilha* pilha) {
	return pilha->prox == NULL; 
}

int pop(Pilha* pilha) {
	if(!stack_is_empty(pilha)) {
		int value = pilha->prox->value;
		pilha->prox = pilha->prox->prox;
		return value;
	}

	return '\0';
}
		
int get_top(Pilha* pilha){
	if(stack_is_empty(pilha)) {
		return '\0';
	}

	return pilha->prox->value;
}*/