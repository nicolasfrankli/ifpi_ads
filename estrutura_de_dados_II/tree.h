#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

// Estrutura de um nó da árvore
typedef struct no {
    int value;
    struct no *left, *right;
} Node;

// Estrutura de um nó da árvore de expressão aritmética
typedef struct Anode {
    char value;
    struct Anode* left;
    struct Anode* right;
} Anode;

// Função para criar um novo nó
Node* newNode(int value) {
    Node* node = (Node*) malloc(sizeof(Node));
    node->value = value;
    node->left = NULL;
    node->right = NULL;
    return node;
}

// Função para inserir um novo nó na árvore
Node* insertNode(Node* root, int value) {
    if (root == NULL) {
        return newNode(value);
    } else {
        if (value < root->value) {
            root->left = insertNode(root->left, value);
        } else {
            root->right = insertNode(root->right, value);
        }
        return root;
    }
}

void print(Node *n) {
    if (n != NULL) {
        printf("<%d", n->value);
        print(n->left);
        print(n->right);
        printf(">");
    } else {
        printf("<>");
    }
}

// Função para devolver o total de nós da árvore
int nodesAmount(Node *n) {
    if (n != NULL) {   
        return 1 + nodesAmount(n->left) + nodesAmount(n->right);
    } else {
        return 0; 
    }
}

// Função para devolver o total de folhas da árvore
int leavesAmount(Node *n) {
    if (n == NULL) {
        return 0;
    }
    else if (n->left == NULL && n->right == NULL) {   
        return 1;
    } else {
        return leavesAmount(n->left) + leavesAmount(n->right);
    }
}

//Função para devolver a altura da árvore
int treeHeight(Node *n) {
    if (n == NULL) {
        return 0;
    }
    else {
        int leftHeight = treeHeight(n->left);
        int rightHeight = treeHeight(n->right);
        if (leftHeight > rightHeight) {   return 1 + leftHeight;
        } else { return 1 + rightHeight;
        }
    }
}

// Função para verificar se a árvore binária possui o item x
bool hasItem(Node *n, int item) {
    if (n == NULL) {
        return false;
    } else if (n->value == item) {
        return true;
    } else if (n->value < item) {
        return hasItem(n->right, item);
    } else {
        return hasItem(n->left, item);
    }
}

// Função para verificar se a árvore é binária
// Se cada nó é uma folha ou tem dois filhos
bool isBinary(Node* n) {
    if (n == NULL) {
        return true;
    }
    if (n->left == NULL && n->right == NULL) {
        return true;
    }
    if (n->left == NULL || n->right == NULL) {
        return false;
    }
    return isBinary(n->left) && isBinary(n->right);
}

//Mesma forma e mesmos itens
bool compareTrees(Node *n1, Node *n2) {
    if (n1 == NULL && n2 == NULL) {
        return true;
    } else if (n1 == NULL || n2 == NULL){
        return false;
    } else if (n1->value != n2->value){
        return false;
    } else {
        return compareTrees(n1->left, n2->left) && compareTrees(n1->right, n2->right);
    }
}

// Avalia uma expressão aritmética representada por uma árvore binária, cujos nós guardam números inteiros.
// Raiz é uma operação e subárvores são operandos
int value(Anode* root) {
    if (root == NULL) {
        return 0;
    } 
    if (root->left == NULL && root ->right == NULL) {
        return root->value - '0';
    }
    int leftValue = value(root->left);
    int rightValue = value(root->right); 
    switch (root->value) {
       case '+': return leftValue + rightValue; 
       case '-': return leftValue - rightValue; 
       case '*': return leftValue * rightValue; 
       case '/': return leftValue / rightValue; 
       default: return 0;
    }
}

// Função para percorrer a árvore em ordem decrescente
void traverseInDescOrder(Node* root) {
    if (root != NULL) {
        traverseInDescOrder(root->right);
        printf("%d", root->value);
        traverseInDescOrder(root->left);        
    } else {
        return;
    }
}

// Função para percorrer a árvore em ordem crescente
void traverseInOrder(Node* root) {
    if (root != NULL) {
        traverseInDescOrder(root->left);
        printf("%d", root->value);        
        traverseInDescOrder(root->right);
    } else {
        return;
    }
}