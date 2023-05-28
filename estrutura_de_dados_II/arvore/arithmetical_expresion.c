#include <stdio.h>
#include <stdlib.h>

typedef struct Node {
    char value;
    struct Node* left;
    struct Node* right;
} Node;

int evaluateExpression(Node* root) {
    if (root == NULL) {
        return 0;
    }
    if (root->left == NULL && root->right == NULL) {
        return root->value - '0';
    }
    int leftValue = evaluateExpression(root->left);
    int rightValue = evaluateExpression(root->right);
    switch (root->value) {
        case '+': return leftValue + rightValue;
        case '-': return leftValue - rightValue;
        case '*': return leftValue * rightValue;
        case '/': return leftValue / rightValue;
        default: return 0;
    }
}

int main() {
    Node* root = (Node*) malloc(sizeof(Node));
    root->value = '+';
    root->left = (Node*) malloc(sizeof(Node));
    root->left->value = '5';
    root->left->left = NULL;
    root->left->right = NULL;
    root->right = (Node*) malloc(sizeof(Node));
    root->right->value = '*';
    root->right->left = (Node*) malloc(sizeof(Node));
    root->right->left->value = '2';
    root->right->left->left = NULL;
    root->right->left->right = NULL;
    root->right->right = (Node*) malloc(sizeof(Node));
    root->right->right->value = '3';
    root->right->right->left = NULL;
    root->right->right->right = NULL;
    int result = evaluateExpression(root);
    printf("Result: %d\n", result);
    return 0;
}
