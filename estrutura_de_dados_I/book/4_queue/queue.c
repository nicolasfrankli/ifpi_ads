#include <stdio.h>
#include "queue.h"
#include <ctype.h>

int main(){
    char phrase [256]; 
    printf("\nPhrase? "); 
    gets(phrase); 
    Queue Q = queue(256); 
    Stack S = create_stack(256); 
    for (int i=0; phrase[i]; i++) {
        if( isalpha (phrase[i])) { 
            push_queue(toupper(phrase[i]), Q); 
            push(toupper(phrase[i]), S); 
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


/*4.4
O segundo algarismo define a ordem de conslusão da execução
25
46
17
39
*/
