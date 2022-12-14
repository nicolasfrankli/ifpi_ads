#include "stack.h"

void ordinate(int value, Stack A, Stack B){
    if(!(value <= A -> item[A -> top] || is_empty(A))){
        push(pop(A), B);
        ordinate(value, A, B);
    } else {
        push(value, A);
        return;
    }
    push(pop(B), A);
}

int main(){
    Stack sA = create_stack();
    Stack sB = create_stack();

    int item;
    scanf("%d", &item);
    while(item != 0) {
        ordinate(item, sA, sB);
        scanf("%d", &item);
    }
    while(!is_empty(sA)) {
		printf("%d\n", pop(sA));
	}
}