#include <stdio.h>
int main (void){
    char s[3] = "um";
    char t[3] = "um";
    if ( &s == &t ) puts("iguais");
    else puts("diferentes");
    return 0;
}