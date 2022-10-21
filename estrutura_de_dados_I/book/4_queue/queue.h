#include <stdio.h>
#include <ctype.h> 
#include "stack_for_queue.h"
#define format "%d"

typedef char Item;

typedef struct queue {
    int max;
    int total;
    int start;
    int end;
    Item *item;
} *Queue;

Queue queue(int m) {
    Queue Q = malloc(sizeof(struct queue));
    Q->max = m;
    Q->total = 0;
    Q->start = 0;
    Q->end = 0;
    Q->item = malloc(m*sizeof(Item));
    return Q;
}

int empty_queue(Queue Q) {
    return ( Q->total == 0 );
}

int full_queue(Queue Q) {
    return ( Q->total == Q->max );
}

#define advance(i) (i = (i+1) % Q->max);

void push_queue(Item x, Queue Q) {
    if ( full_queue(Q) ) { puts("Full Queue!"); abort(); }
    Q->item[Q->end] = x;
    advance(Q->end);
    Q->total++;
}

Item dequeue(Queue Q) {
    if ( empty_queue(Q) ) { puts("Empty Queue!"); abort(); }
    Item x = Q->item[Q->start];
    advance(Q->start);
    Q->total--;
    return x;
}

void destroyq(Queue *Q) {
    free((*Q)->item);
    free(*Q);
    *Q = NULL;
}


int is_palindrome(char phrase[100]) { 
    Queue Q = queue(256); 
    Stack S = create_stack(256); 
    for (int i=0; phrase[i]; i++) {
        if( isalpha (phrase[i])) { 
            push_queue(phrase[i], Q); 
            push(phrase[i], S); 
        }
    }
    while( !empty_queue (Q) && dequeue (Q)==pop (S) ); {
        if( empty_queue (Q)) puts ("The phrase is palindrome"); 
        else puts ("the phrase isn't palindrome"); 
        destroyq(&Q); 
        destroy (&S); 
        return 0; 
    }
}