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
        printf("%d ", root->value);
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


int main(void) {
    Node* root = NULL;
    root = insertNode(root, 50);
    insertNode(root, 30);
    insertNode(root, 20);
    insertNode(root, 40);
    insertNode(root, 70);
    insertNode(root, 60);
    insertNode(root, 80);

    print(root);
    printf("\n");

    return 0;
}