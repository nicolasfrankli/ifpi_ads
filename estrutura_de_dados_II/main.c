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

    Node* root1 = NULL;
    root1 = insertNode(root1, 50);
    insertNode(root1, 210);
    insertNode(root1, 20);
    insertNode(root1, 40);
    insertNode(root1, 10);
    insertNode(root1, 1);
    insertNode(root1, 11);
    insertNode(root1, 12);
    insertNode(root1, 13);
    insertNode(root1, 14);
    insertNode(root1, 15);

    printf("============= TREE =============\n");
    print(root);
    printf("\n");
    print(root1);
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
    printf("The number %d %s in the tree.\n", x, hasItem(root, x) ? "exist" : "doens't exist");
    printf("============= QUESTÃO 3.6 =============\n");
    printf("The tree is %s\n", isBinary(root) ? "binary" : "not binary");
    printf("============= QUESTÃO 3.7 =============\n");
    printf("The trees are %s\n", compareTrees(root, root1) ? "equals" : "differents");

    return 0;
}