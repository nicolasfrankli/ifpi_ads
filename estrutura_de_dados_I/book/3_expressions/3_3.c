#include "expression.h"
#include "ctype.h"


char* postfix(char* e) {
    static char s[256];
    int j=0;
    Stack S = create_stack();
    for(int i = 0; e[i]; i++) {
        if(e[i] == '(') push('(', S);
        else if(isalpha(e[i])) s[j++] = e[i];
        else if(strchr("+-/*", e[i])) {
            while(!is_empty(S) && prio(S -> item[S -> top]) >= prio(e[i]))
                s[j++] = pop(S);
            push(e[i], S);
        } else if(e[i] == ')') {
            while(get_top(S) != '(')
                s[j++] = pop(S);
            pop(S);
        }
    }

    while(!is_empty(S)) s[j++] = pop(S);
    s[j] = '\0';
    destroy(S);
    return s;
}

int main(){
    char expression[256];

    printf("Type a number expression: ");
    scanf("%s", &expression);

    char* postfix_expression = postfix(expression);

    printf("\nPostfix Expression: %s\n", postfix_expression);

    int result = value(postfix_expression);

    printf("\nThe result is: %d\n", value);

    return 0;
}