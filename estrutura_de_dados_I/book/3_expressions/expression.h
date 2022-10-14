#include "./stack.h"

int prio(char o){
    switch(o) {
        case '(': return 0;
        case '+':
        case '-': return 1;
        case '*':
        case '/': return 2;
    }
    return -1;//Invalid operator
}

char* postfix(char* e) {
    static char s[256];
    int j=0;
    Stack S = create_stack();
    for(int i = 0; e[i]; i++) {
        if(e[i] == '(') push('(', S);
        else if(isdigit(e[i])) s[j++] = e[i];
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

int value(char* e) {
    Stack S = create_stack();
    for(int i = 0; e[i]; i++) {
        if(isdigit(e[i])) push(e[i]-'0', S);
        else {
            int y = pop(S);
            int x = pop(S);
            switch(e[i]) {
                case '+': push(x+y, S); break;
                case '-': push(x-y, S); break;
                case '*': push(x*y, S); break;
                case '/': push(x/y, S); break;
            }
        }
    }

    int z = pop(S);
    destroy(S);
    return z;
}