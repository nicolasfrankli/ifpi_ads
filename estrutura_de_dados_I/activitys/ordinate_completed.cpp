#include <stdio.h>
#include <iostream>
#include <stdlib.h>
#include <string.h>


using namespace std;

typedef struct aluno {
	int matricula;
	char nome[20];
}Aluno;

#define exchange(a, b) { int x=a; a=b; b=x; }

void bubble_sort(Aluno v[], int n) {
    for(int i=1; i<=n-1; i++) 
        for(int j=0; j<n-i; j++)
            if( v[j]>v[j+1] )
                exchange(v[j], v[j+1]);
}

void ord_insercao(Aluno v[],int tam);
void selection_sort(Aluno v[],int n)
int select(Aluno v[], int n) {
    int i = 0;
    for(int j=1; j<n; j++)
        if( v[i]<v[j] ) i = j;
    return i;
}

void selectionSort(Aluno v[], int n) {
    while ( n>1 ) {
        exchange( v[selection(v, n)], v[n-1] );
        n--;
    }
 };
void bubble_sort(Aluno v[],int n);


Aluno myarray[20] = {1, 'Aluno1', 2, 'Aluno2', 3, 'Aluno3'};
	
main(){
   int i;   
   insertion_sort(myarray);
   printf("\nAlunos ordenados por matrícula:\n");
   for(i = 0; i <= 5; i++){
      printf("%d ", vetor[i]);
   }
   printf("\n");  

   int b;   
   selection_sort(myarray);
   printf("\nAlunos ordenados por nome:\n");
   for(b = 0; b <= 5; b++){
      printf("%d ", myarray[i]);
   }
   printf("\n");  

   int c;   
   bubble_sort(myarray);
   printf("\nAlunos ordenados por matrícula:\n");
   for(b = 0; b <= 5; b++){
      printf("%d ", myarray[i]);
   }
   printf("\n");  
	 //1:  A. leia os valores e adicione no vetor de dados
	 // ordene pelo campo matricula
	 	//   B. Ordene por:
		//   c. Insercao
	// mostre o resultado ordenado
	
	// 2: A. leia os valores e adicione no vetor de dados
	// ordene pelo campo nome 
		//  B. Ordene por:
	//  c. selection_sort
	// mostre o resultado ordenado
	
	// 3: A. leia os valores e adicione no vetor de dados
	// ordene pelo campo matricula
	//  B. Ordene por:
	//  c. bubble_sort
	// mostre o resultado ordenado
	
	
}

void insert(int x, int v[], int n) {
    while( n>0 && x<v[n-1] ) {
        v[n] = v[n-1];
        n--;
    }
    v[n] = x;
}

void insertion_sort(Aluno v[], int n) {
    for(int i=0; i<n; i++)
     insert(v[i],v,i);
}