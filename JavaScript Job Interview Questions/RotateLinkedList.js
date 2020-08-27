// AirBnB
// O(n)
// 1->2->3->4->5
// 3->4->5->1->2

class ListElem {
  constructor(x, next) {
    this.x = x;
    this.next = next;
  }
}

function RotateIteration(list, rotator) {
  let result;
  let helper;

  for (let i = 0; i < rotator; i++) {
    if (list) {
      if (!result) {
        result = new ListElem(list.x);
        helper = result;
      } else {
        helper.next = new ListElem(list.x);
        helper = helper.next;
      }

      list = list.next;
    }
  }

  let firstRotateInsert = true;
  while (list) {
    if (firstRotateInsert) {
      helper = new ListElem(list.x, result);
      result = helper;
      firstRotateInsert = false;
    } else {
      helper.next = new ListElem(list.x, helper.next);
      helper = helper.next;
    }

    list = list.next;
  }

  return result;
}

function RotatePointers(list, rotator) {
  let limit = list;
  let last = list;

  while (last.next) {
    if (--rotator > 0) {
      limit = limit.next;
    }
    last = last.next;
  }

  last.next = list;
  return limit.next;
}

let list;
let currElem;

for (let i = 1; i <= 5; i++) {
  if (!list) {
    list = new ListElem(i);
    currElem = list;
  } else {
    currElem.next = new ListElem(i);
    currElem = currElem.next;
  }
}

let rotatedList1 = RotateIteration(list, 2);
let rotatedList2 = RotatePointers(list, 2);
let i = 9;
