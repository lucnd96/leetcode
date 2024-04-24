// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  function swap(parent, left, right) {
    if (!right) {
      return;
    }
    if (!parent) {
      const tmp = right.next;
      right.next = left;
      left.next = tmp;
      head = right;
      swap(left, left.next, left.next?.next);
    } else {
      const tmp = right.next;
      parent.next = right;
      right.next = left;
      left.next = tmp;
      if (right.next) {
        swap(left, left.next, left.next?.next);
      }
    }
  }
  swap(null, head, head?.next);
  return head;
};

function arrToLinked(arr) {
  if (arr.length === 0) {
    return null;
  }
  if (arr.length === 1) {
    return new ListNode(arr[0]);
  }
  return new ListNode(arr[0], arrToLinked(arr.slice(1)));
}

function print(n) {
  if (!n.next) {
    return n.val.toString();
  }
  return n.val.toString() + ',' + print(n.next);
}
ListNode.prototype.toString = function () {
  return print(this);
};

// console.log(arrToLinked([2,1,4,3]).toString())
console.log(swapPairs(arrToLinked([])).toString());

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  const max = 0x7fffffff;
  const tmp = Math.trunc(dividend / divisor);
  if ((tmp > 0 && tmp > max) || (tmp < 0 && tmp < -max - 1)) {
    return tmp > 0 ? max : -max;
  }
  return tmp;
};
