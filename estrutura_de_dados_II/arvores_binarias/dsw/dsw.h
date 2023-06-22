#ifndef DSW_H
#define DSW_H

typedef struct TreeNode {
    int data;
    struct TreeNode* left;
    struct TreeNode* right;
} TreeNode;

void balanceTree(TreeNode** root) {
    while (*root != NULL) {
        TreeNode* temp = *root;
        *root = (*root)->right;
        temp->right = (*root)->left;
        (*root)->left = temp;
    }

    compressTree(*root);
}

TreeNode* rotateRight(TreeNode* root) {
    TreeNode* newRoot = root->left;
    root->left = newRoot->right;
    newRoot->right = root;
    return newRoot;
}

TreeNode* rotateLeft(TreeNode* root) {
    TreeNode* newRoot = root->right;
    root->right = newRoot->left;
    newRoot->left = root;
    return newRoot;
}

void compressTree(TreeNode* root) {
    TreeNode* current = root;
    int m = 0;

    while (current != NULL) {
        if (current->left != NULL) {
            current = rotateRight(current);
            current = current->right;
            m++;
        } else {
            current = current->right;
            if (++m % 2 == 0) {
                current = current->right;
            }
        }
    }
}



#endif
