#include <stdio.h>
#include <stdlib.h>

// Estrutura de um nó da árvore
typedef struct no {
    int value;
    struct no *left, *right;
} Node;

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


// Função para percorrer a árvore em ordem
void traverseInOrder(Node* root) {
    if (root != NULL) {
        traverseInOrder(root->left);        
        traverseInOrder(root->right);
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

// Função para devolver a altura da árvore
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