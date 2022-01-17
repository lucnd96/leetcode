//Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

function nodeToNumber(n) {
    if (n.next === null) {
        return n.val.toString()
    }
    return nodeToNumber(n.next) + n.val.toString()
}

export function numberToNode(val) {
    const arr = BigInt(val).toString().split("").reverse();
    const createNode = (arr) => {
        if (arr.length <= 1) {
            return new ListNode(Number(arr[0]))
        }
        return new ListNode(Number(arr[0]), createNode(arr.slice(1)))
    }
    return createNode(arr);
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function (l1, l2) {
    let extra = 0;
    let result = new ListNode()
    let current = result;
    while (l1 || l2) {
        const val = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + extra
        if (val >= 10) {
            extra = 1
        } else {
            extra = 0
        }
        current.val = val % 10
        l1 = l1 ? l1.next : null
        l2 = l2 ? l2.next : null
        if (l1 || l2) {
            current.next = new ListNode()
            current = current.next
        } else if (extra) {
            current.next = new ListNode(1)
        }

    }
    return result
};
