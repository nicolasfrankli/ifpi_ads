#include<stdio.h>
#include<iostream>
using namespace std;
void intercala(int vetor[], int inicio, int meio, int fim);
void merge_sort(int v[],int inicio, int fim){
   if ( p == u ) return;
   int m = (p+u)/2;
   merge_sort(v,p,m);
   merge_sort(v, m+1, u);
   intercala(v,p,m,u);
}

int main(){
   int vetor[6] = {7, 9, 4, 3,6,1};
   int i;   
   merge_sort(vetor);
   printf("\n2.Vetor ordenado:\n");
   for(i = 0; i <= 5; i++){
      printf("%d ", vetor[i]);
   }
   printf("\n");   
}
