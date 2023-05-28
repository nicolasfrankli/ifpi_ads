#include <iostream>

template<class T>
struct TreeNode {
    T data;
    TreeNode<T>* left;
    TreeNode<T>* right;

    TreeNode(T value) : data(value), left(nullptr), right(nullptr) {}
};

template<class T>
void morrisInorderTraversal(TreeNode<T>* root) {
    TreeNode<T>* current = root;

    while (current) {
        if (!current->left) {
            // Se o nó atual não tiver filho esquerdo, visite o nó e mova para o filho direito.
            std::cout << current->data << " ";
            current = current->right;
        } else {
            // Encontre o predecessor do nó atual.
            TreeNode<T>* predecessor = current->left;
            while (predecessor->right && predecessor->right != current)
                predecessor = predecessor->right;

            if (!predecessor->right) {
                // Se o predecessor não tiver um filho direito, estabeleça o thread e mova para o filho esquerdo.
                predecessor->right = current;
                current = current->left;
            } else {
                // Se o predecessor já tiver um filho direito apontando para o nó atual, remova o thread e mova para o filho direito.
                predecessor->right = nullptr;
                std::cout << current->data << " ";
                current = current->right;
            }
        }
    }
}


template<class T>
void morrisPreorderTraversal(TreeNode<T>* root) {
    TreeNode<T>* current = root;

    while (current) {
        if (!current->left) {
            // Se o nó atual não tiver filho esquerdo, visite o nó e mova para o filho direito.
            std::cout << current->data << " ";
            current = current->right;
        } else {
            // Encontre o predecessor do nó atual.
            TreeNode<T>* predecessor = current->left;
            while (predecessor->right && predecessor->right != current)
                predecessor = predecessor->right;

            if (!predecessor->right) {
                // Se o predecessor não tiver um filho direito, estabeleça o thread, visite o nó e mova para o filho esquerdo.
                predecessor->right = current;
                std::cout << current->data << " ";
                current = current->left;
            } else {
                // Se o predecessor já tiver um filho direito apontando para o nó atual, remova o thread e mova para o filho direito.
                predecessor->right = nullptr;
                current = current->right;
            }
        }
    }
}

int main() {
    // Exemplo de uso
    TreeNode<int>* root = new TreeNode<int>(10);
    root->left = new TreeNode<int>(5);
    root->right = new TreeNode<int>(20);
    root->left->left = new TreeNode<int>(3);
    root->left->right = new TreeNode<int>(7);
    root->right->left = new TreeNode<int>(15);
    root->right->right = new TreeNode<int>(24);

    std::cout << "In-order traversal: ";
    morrisInorderTraversal(root);
    std::cout << std::endl;

    std::cout << "Pre-order traversal: ";
    morrisPreorderTraversal(root);
    std::cout << std::endl;

    return 0;
}
