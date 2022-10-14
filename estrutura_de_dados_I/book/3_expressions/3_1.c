#include "expression.h"

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