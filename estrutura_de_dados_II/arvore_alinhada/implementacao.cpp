#include <iostream>

template<class T>
class ThreadedNode {
public:
    ThreadedNode() {
        left = right = nullptr;
        successor = false;
    }
    ThreadedNode(const T& el, ThreadedNode* l = nullptr, ThreadedNode* r = nullptr) {
        this->el = el;
        left = l;
        right = r;
        successor = false;
    }
    T el;
    ThreadedNode* left;
    ThreadedNode* right;
    bool successor;
};

template<class T>
class ThreadedTree {
public:
    ThreadedTree() {
        root = nullptr;
    }
    void insert(const T& value) {
        ThreadedNode<T>* newNode = new ThreadedNode<T>(value);
        if (root == nullptr) {
            root = newNode;
        } else {
            ThreadedNode<T>* curr = root;
            ThreadedNode<T>* parent;
            while (true) {
                parent = curr;
                if (value < curr->el) {
                    curr = curr->left;
                    if (curr == nullptr) {
                        parent->left = newNode;
                        return;
                    }
                } else {
                    curr = curr->right;
                    if (curr == nullptr) {
                        parent->right = newNode;
                        return;
                    }
                }
            }
        }
    }
    void inorderTraversal();
    void preorderTraversal();

protected:
    ThreadedNode<T>* root;
};

template<class T>
void inorderHelper(ThreadedNode<T>* node) {
    if (node != nullptr) {
        inorderHelper(node->left);
        std::cout << node->el << " ";
        inorderHelper(node->right);
    }
}

template<class T>
void ThreadedTree<T>::inorderTraversal() {
    inorderHelper(root);
}

template<class T>
void preorderHelper(ThreadedNode<T>* node) {
    if (node != nullptr) {
        std::cout << node->el << " ";
        preorderHelper(node->left);
        preorderHelper(node->right);
    }
}

template<class T>
void ThreadedTree<T>::preorderTraversal() {
    preorderHelper(root);
}

int main() {
    ThreadedTree<int> tree;
    tree.insert(4);
    tree.insert(2);
    tree.insert(6);
    tree.insert(1);

    std::cout << "In-order traversal: ";
    tree.inorderTraversal();
    std::cout << std::endl;

    std::cout << "Pre-order traversal: ";
    tree.preorderTraversal();
    std::cout << std::endl;

    return 0;
}
