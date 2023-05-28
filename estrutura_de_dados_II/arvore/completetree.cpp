#include<stdio.h>
#include<iostream>
#include<stdlib.h>
using namespace std;

typedef struct arv {
	char valor;
    struct arv *esq;
	struct arv *dir;
}Arv;


Arv *arvore(char x,Arv *e,Arv *d){
	Arv *novo=(Arv *)malloc(sizeof(Arv));
	novo->esq=e;
	novo->dir=d;
	novo->valor=x;
	return novo;
	
}

void imprime(Arv *n){		
					
			if (n!=NULL){
					
				cout<<"<"<<n->valor;
				imprime(n->esq);
				imprime(n->dir);
				cout<<">";
			   }
			   else
			     cout<<"<>";
			}

int calculaQuantNos(Arv *no){
    if (no != NULL) {   
        return 1 + calculaQuantNos(no->esq) + calculaQuantNos(no->dir);
    } else {
        return 0; 
    }
		}

int calculaQuantNosFolha(Arv *no){
	if (no == NULL) {
        return 0;
    }
    else if (no->esq == NULL && no->dir == NULL) {   
        return 1;
    } else {
        return calculaQuantNosFolha(no->esq) + calculaQuantNosFolha(no->dir);
    }
		}
		

		
int alturaArvore(Arv *no){	        
	if (no== NULL) {
        return 0;
    }
    else {
        int esqHeight = alturaArvore(no->esq);
        int dirHeight = alturaArvore(no->dir);
        if (esqHeight > dirHeight) {   
			return 1 + esqHeight;
        } else { 
			return 1 + dirHeight;
        }
    }     
}
   
// int procura(Arv *no, char valor){
			
// 		}

Arv* minValueNode(Arv* node) {
    Arv* current = node;
    while (current->esq != NULL) {
        current = current->esq;
    }
    return current;
}

// remove o no procurado. Se o no tiver filhos, remova tamb�m os filhos		
Arv* removeSubArvore(Arv *no, char valor){
    if (no == NULL) {
        return NULL;
    }
    if (valor < no->valor) {
        no->esq = removeSubArvore(no->esq, valor);
    } else if (valor > no->valor) {
        no->dir = removeSubArvore(no->dir, valor);
    } else {
        Arv *temp;
        if (no->esq == NULL) {
            temp = no->dir;
        } else if (no->dir == NULL) {
            temp = no->esq;
        } else {
            temp = minValueNode(no->dir);
            no->valor = temp->valor;
            no->dir = removeSubArvore(no->dir, temp->valor);
            return no;
        }
        free(no);
        return temp;
    }
    return no;
}