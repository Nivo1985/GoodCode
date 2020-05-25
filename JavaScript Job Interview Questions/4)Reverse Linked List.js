//Google

//Input: 4 -> 3 -> 2 -> 1 -> 0 -> NULL
//Output: 0 -> 1 -> 2 -> 3 -> 4 -> NULL

// O(n) - recurent

class ListItem {
  constructor(val, next = null) {
    this.val = val;
    this.nextItem = next;
  }
}

class LinkedList {
  constructor(digit) {
    this.firstItem = null;
    this.lastItem = null;
    for (let i of digit.toString()) {
      if (!this.firstItem) {
        this.firstItem = new ListItem(i);
        this.lastItem = this.firstItem;
      } else {
        this.lastItem.nextItem = new ListItem(i);
        this.lastItem = this.lastItem.nextItem;
      }
    }
  }
}

function ReverseList(list) {
  list.firstItem = ReverseItemsRecurent(list.firstItem);
  return list;
}

function ReverseItemsRecurent(item, currentItem) {
  if (!currentItem) currentItem = new ListItem(item.val);
  else currentItem = new ListItem(item.val, currentItem);

  if (item.nextItem !== null)
    return ReverseItemsRecurent(item.nextItem, currentItem);

  return currentItem;
}

let inputList = new LinkedList(43210);
let outputList = ReverseList(inputList);
console.log(outputList);
