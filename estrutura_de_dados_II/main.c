#include "tree.h"

int main(void) {
    Node* root = NULL;
    root = insertNode(root, 50);
    insertNode(root, 30);
    insertNode(root, 20);
    insertNode(root, 40);
    insertNode(root, 10);
    insertNode(root, 1);
    insertNode(root, 11);
    insertNode(root, 12);
    insertNode(root, 13);
    insertNode(root, 14);
    insertNode(root, 15);

    printf("Tree: ");
    print(root);
    printf("\n");
    printf("Altura da árvore: %d", treeHeight(root));
    printf("\n");
    printf("Total de nós: %d", nodesAmount(root));
    printf("\n");
    printf("Total de folhas: %d", leavesAmount(root));
    printf("\n");
    printf("Type any number: ");
    int x;
    scanf("%d", &x);
    if (hasItem(root, x) == 0){
        printf("%d doesn't exist in tree.", x);
    } else {
        printf("%d exist in the tree", x);
    }
    printf("\n");


    return 0;
}