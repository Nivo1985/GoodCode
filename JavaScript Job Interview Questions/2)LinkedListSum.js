// Microsoft

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

// Input: (4 -> 5 -> 6) + (5 -> 1 -> 7)
// Output: 9 -> 6 -> 3 -> 1
// Explanation: 654 + 715 = 1369.

// 0(n) -cost (recurent)

class ListItem {
  constructor(val, next = null) {
    this.val = parseInt(val);
    this.nextItem = next;
  }
}

class LinkedList {
  constructor(digit) {
    this.firstItem = null;
    for (let i of digit.toString()) {
      if (!this.firstItem) {
        this.firstItem = new ListItem(i);
      } else {
        this.firstItem = new ListItem(i, this.firstItem);
      }
    }
  }
}

function MergeItemsRecurent(
  item1 = new ListItem(0),
  item2 = new ListItem(0),
  extraValue = 0,
  originalItem = null,
  currentItem = null
) {
  let itemValue = item1.val + item2.val + extraValue;

  if (!originalItem) {
    originalItem = new ListItem(itemValue % 10);
    currentItem = originalItem;
  } else {
    currentItem.nextItem = new ListItem(itemValue % 10);
    currentItem = currentItem.nextItem;
  }

  extraValue = (itemValue - currentItem.val) / 10;

  if ((!!item1.nextItem && !!item2.nextItem) || extraValue) {
    return MergeItemsRecurent(
      item1.nextItem || new ListItem(0),
      item2.nextItem || new ListItem(0),
      extraValue,
      originalItem,
      currentItem
    );
  }

  return originalItem;
}

// let list1 = new LinkedList(342);
// let list2 = new LinkedList(465);
// let mergedItems = MergeItemsRecurent(list1.firstItem, list2.firstItem);
// console.log(mergedItems);

let list1 = new LinkedList(654);
let list2 = new LinkedList(715);
let mergedItems = MergeItemsRecurent(list1.firstItem, list2.firstItem);
console.log(mergedItems);
