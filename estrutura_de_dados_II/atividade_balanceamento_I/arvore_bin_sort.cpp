#include <iostream>
#include <vector>
#include <algorithm>

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

template<class T>
TreeNode<T>* sortedArrayToBST(std::vector<T>& nums, int start, int end) {
    if (start > end) {
        return nullptr;
    }

    int mid = (start + end) / 2;
    TreeNode<T>* root = new TreeNode<T>(nums[mid]);
    root->left = sortedArrayToBST(nums, start, mid - 1);
    root->right = sortedArrayToBST(nums, mid + 1, end);

    return root;
}

template<class T>
TreeNode<T>* balanceBST(std::vector<T>& nums) {
    std::sort(nums.begin(), nums.end());
    return sortedArrayToBST(nums, 0, nums.size() - 1);
}

int main() {
    std::vector<int> nums;
    nums.push_back(7);
    nums.push_back(6);
    nums.push_back(22);
    nums.push_back(14);
    nums.push_back(40);
    nums.push_back(63);

    // Balancear a árvore
    TreeNode<int>* balancedTree = balanceBST(nums);

    // Imprimir o percurso inorder da árvore balanceada
    std::cout << "In-order traversal of balanced tree: ";
    inorderTraversal(balancedTree);
    std::cout << std::endl;

    return 0;
}
