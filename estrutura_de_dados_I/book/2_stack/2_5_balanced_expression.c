#include <stdio.h>
#include <stdbool.h>
#include "stack.h"
#include <string.h>

bool verify(Stack S){
  int left_parentesis_ocurrence = 0;
  int right_parentesis_ocurrence = 0;
  while(!is_empty(S)){
    char character = S -> item[S -> top]; //Value in the top of Stack
    printf("%c", character);
    if(character == '('){
      left_parentesis_ocurrence++;
    } else if (character == ')')
    {
      right_parentesis_ocurrence++;
    }
    if(right_parentesis_ocurrence > left_parentesis_ocurrence){
      return false;
    } 
    pop(S);
  }
  if(left_parentesis_ocurrence == right_parentesis_ocurrence) {
    return true;
  }
  printf("%d\n", left_parentesis_ocurrence);
  printf("%d\n", right_parentesis_ocurrence);
}

int main() {
  char* expression[10];
  Stack stack = create_stack();


  printf("Enter some expression: \n");
  scanf("%s", expression);

  for (int i = 0; i < strlen(expression); i++)
  {
    push(expression[i], stack);
  }

  verify(stack);
  //printf("\n%s", verify(expression) ? "It's balanced.\n" : "There isn't balanced.\n");
  
  return 0;
}