#include <stdio.h>
#include "lstord.h"

int main(void) {
    List L = NULL;
    int value = 0;
    while(value != -1){
        scanf("%d", &value);
        ordlpushsingle(value, &L);
    }
    printf("Sequence in decrescent order: \n");
    show_list(L);
    puts("");
    return 0;
}