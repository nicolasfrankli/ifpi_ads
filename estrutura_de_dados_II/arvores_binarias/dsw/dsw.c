#include "dsw.h"
#include "arvore/tree.h"
#include <stdio.h>
#include <stdlib.h>


int main() {
    TreeNode* root = NULL;
    root = insert(root, 7);
    root = insert(root, 6);
    root = insert(root, 22);
    root = insert(root, 14);
    root = insert(root, 40);
    root = insert(root, 63);

    printf("Árvore inicial: ");
    traverseInOrder(root);
    printf("\n");

    DSW(&root);

    printf("Árvore balanceada: ");
    traverseInOrder(root);
    printf("\n");

    return 0;
}