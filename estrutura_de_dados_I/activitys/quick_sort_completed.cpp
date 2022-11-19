#include<stdio.h>
#include<iostream>
#include "../book/8_sort_and_search/8_8_quick_sort.h"
using namespace std;
void Quick(int vetor[10], int inicio, int fim);

int main(){
   int vetor[6] = {7, 9, 4, 3,6,1};
   int i;   
   quick_sort(vetor, 0, 5);
   printf("\n2.Vetor ordenado:\n");
   for(i = 0; i <= 5; i++){
      printf("%d ", vetor[i]);
   }
   printf("\n");   
}