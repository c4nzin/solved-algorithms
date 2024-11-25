
function deleteDuplicates(head: ListNode | null): ListNode | null {
  let currentNode: any = head;

  while (currentNode != null && currentNode.next !== null) {
    if (currentNode.val === currentNode.next.val) {
      currentNode.next = currentNode.next.next;
    } else {
      currentNode = currentNode.next;
    }
  }

  return head;
}

