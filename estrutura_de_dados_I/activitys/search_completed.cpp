#include<stdio.h>
#include<iostream>
#include <string.h>

using namespace std;
int binary_search(int x, int v[], int n) {
    int p = 0;
    int u = n-1;
    while( p <= u ) {
        int m = (p+u)/2;
        if( x == v[m] ) return 1;
        if( x < v[m] ) u = m-1;
        else p = m+1;
    }
    return 0;
}

int linear_search(int x, int v[], int n) {
    for(int i=0; i<n; i++)
        if( x == v[i] )
            return 1;
    return 0;
}

int main(){
   // A. Leia os valores atrav�s do teclado
   int value = 0;
   array values[20];
   while (value != -1) {
        value = inputf();
        values.push(value);
   }
   int value_to_search = inputf();
   linear_search(value_to_search, values[], values.length);
   binary_search(value_to_search, values[], values.length);


   // B. Armazene os valores no vetor de dados
   // C. leia o valor que deseja procurar
   // D. Aplique a pesquisa linear
   // E. Apresente o resultado
   // F. Aplique a pesquisa bin�ria
   // G. Apresente o resultado
   


      
}


