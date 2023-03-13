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

    printf("============= TREE =============\n");
    print(root);
    printf("\n");
    printf("============= QUESTÃO 3.2 =============\n");
    printf("Total de nós: %d", nodesAmount(root));
    printf("\n");
    printf("============= QUESTÃO 3.3 =============\n");
    printf("Total de folhas: %d", leavesAmount(root));
    printf("\n");
    printf("============= QUESTÃO 3.4 =============\n");
    printf("Altura da árvore: %d", treeHeight(root));
    printf("\n");
    printf("============= QUESTÃO 3.5 =============\n");
    printf("Type any number: ");
    int x;
    scanf("%d", &x);
    if (hasItem(root, x) == 0){
        printf("%d doesn't exist in tree.\n", x);
    } else {
        printf("%d exist in the tree.\n", x);
    }
    printf("============= QUESTÃO 3.6 =============\n");
    printf("The tree is %s\n", isBinary(root) ? "binary" : "not binary");

    return 0;
}