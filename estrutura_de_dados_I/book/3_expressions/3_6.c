#include "expression.h"

int prio(char o) {

    switch(o) {
        case '(': return 0;
        case '|': return 1;
        case '&': return 2;
        case '~': return 3;
    }

    return -1;

}

char* postfix(char* e) {
    static char s[256];
    int j=0;
    Stack S = create_stack();
    for(int i = 0; e[i]; i++) {
        if(e[i] == '(') push('(', S);
        else if(strchr("VF", e[i])) s[j++] = e[i];
        else if(strchr("~&|", e[i])) {
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

char not(char c) {
    if(c == 'V') return 'F';
    return 'V';
}

char and(char c, char d) {
    if(c == 'F') return 'F';
    if(d == 'F') return 'F';
    return 'V';
}

char or(char c, char d) {
    if(c == 'V') return 'V';
    if(d == 'V') return 'V';
    return 'F';
}

char value(char* e) {
    Stack S = create_stack();
    for(int i = 0; e[i]; i++) {
        if(strchr("VF", e[i])) push(e[i], S);
        else {
            int y = pop(S);
            int x;
            switch(e[i]) {
                case '~':
                    push(not(y), S);
                    break;
                case '&':
                    x = pop(S);
                    push(and(x, y), S);
                    break;
                case '|':
                    x = pop(S);
                    push(or(x, y), S);
                    break;
            }
        }
    }

    char z = pop(S);
    destroy(S);
    return z;
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