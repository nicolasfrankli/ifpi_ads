#include <stdio.h>
#include "lstord.h"

int main(void) {
    List L = NULL;
    ordlpush(2, &L);
    ordlpush(5, &L);
    ordlpush(1, &L);
    ordlpush(4, &L);
    ordlpush(3, &L);
    printf("Sequence in ascending order: \n");
    show_list(L);
    puts("");
    return 0;
}