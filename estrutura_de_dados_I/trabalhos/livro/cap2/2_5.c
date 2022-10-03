#include "2_4.h"
#include "stdio.h"

void process(int value, Pilha* pilhaA, Pilha* pilhaB) {

	if(!(value <= get_top(pilhaA) || stack_is_empty(pilhaA))) {
		push(pop(pilhaA), pilhaB);
		process(value, pilhaA, pilhaB);
	} else {
		push(value, pilhaA);
		return;
	}

	push(pop(pilhaB), pilhaA);
}

int main() {

	Pilha* pA = create_stack();
	Pilha* pB = create_stack();

	int value;
	scanf("%d", &value);

	while(value != 0) {
		process(value, pA, pB);
		scanf("%d", &value);
	}

	printf("\nitens organizados:\n");

	while(!stack_is_empty(pA)) {
		printf("%d\n", pop(pA));
	}

	return 0;
}