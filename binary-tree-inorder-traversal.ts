

//NOTE :Given the root of a binary tree, return the inorder traversal of its nodes' values.


function inorderTraversal(root: TreeNode | null): number[] {
    const n: number[] = [];

    function t(node: TreeNode | null) {
        if (!node) return;

        t(node.left);

        n.push(node.val);

        t(node.right);
    }

    t(root);
    return n;
}


const node9 = new TreeNode(9);
const node7 = new TreeNode(7, null, node9);
const node6 = new TreeNode(6);
const node8 = new TreeNode(8);
const node5 = new TreeNode(5, node6, node7);
const node4 = new TreeNode(4);
const node3 = new TreeNode(3, null, node8);
const node2 = new TreeNode(2, node4, node5);
const root = new TreeNode(1, node2, node3);

inorderTraversal(root)
