#include <iostream>

template<class T>
struct TreeNode {
    T data;
    TreeNode<T>* left;
    TreeNode<T>* right;

    TreeNode(T value) : data(value), left(nullptr), right(nullptr) {}
};

template<class T>
TreeNode<T>* insert(TreeNode<T>* root, T value) {
    if (!root) {
        return new TreeNode<T>(value);
    }

    if (value < root->data) {
        root->left = insert(root->left, value);
    } else {
        root->right = insert(root->right, value);
    }

    return root;
}

template<class T>
void inorderTraversal(TreeNode<T>* root) {
    if (root) {
        inorderTraversal(root->left);
        std::cout << root->data << " ";
        inorderTraversal(root->right);
    }
}

int main() {
    // Exemplo de uso: Criando uma árvore binária a partir de uma lista de valores
    TreeNode<int>* root = nullptr;

    root = insert(root, 7);
    root = insert(root, 6);
    root = insert(root, 22);
    root = insert(root, 14);
    root = insert(root, 40);
    root = insert(root, 63);

    std::cout << "In-order traversal: ";
    inorderTraversal(root);
    std::cout << std::endl;

    return 0;
}
