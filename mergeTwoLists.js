// import {numberToNode} from "./addTwoNumber"
//Definition for singly-linked list.
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
  if (!list1) {
    return list2
  }
  if (!list2) {
    return list1
  }
  const result = list1.val <= list2.val ? list1 : list2
  let current1 = list1
  let current2 = list2
  if (list1.val <= list2.val) {
    current1 = list1.next
  } else {
    current2 = list2.next
  }
  let current = result
  while (current1 || current2) {
    console.log({current1, current2})
    if (!current1) {
      current.next = current2
      break
    }
    if (!current2) {
      current.next = current1
      break
    }
    if (current1.val <= current2.val) {
      current.next = current1
      current1 = current1.next
    } else {
      current.next = current2
      current2 = current2.next
    }
    current = current.next
  }
  return result
};
function numberToNode(val) {
  const arr = BigInt(val).toString().split("").reverse();
  const createNode = (arr) => {
    if (arr.length <= 1) {
      return new ListNode(Number(arr[0]))
    }
    return new ListNode(Number(arr[0]), createNode(arr.slice(1)))
  }
  return createNode(arr);
}
const l1 = numberToNode("2")
const l2 = numberToNode("1")
console.log({l1, l2})



function print(l) {
  if (!l.next) {
    return l.val.toString()
  }
  return l.val.toString() + print(l.next)
}
console.log(print(mergeTwoLists(l1, l2)))