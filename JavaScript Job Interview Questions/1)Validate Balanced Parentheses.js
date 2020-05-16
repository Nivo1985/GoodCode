// Uber

//Input: "((()))"
//Output: True

//Input: "[()]{}"
//Output: True

//Input: "({[)]"
//Output: False

// cost O(n)

class ValidateParenthases {
  constructor(expression) {
    this.expression = expression.split("");
  }

  Valid() {
    let tempArray = [];

    for (let p of this.expression) {
      if (this.IsOpeningParenthase(p)) {
        tempArray.push(p);
      } else {
        p = this.GetReverseParenthase(p);
        if (tempArray[tempArray.length - 1] === p) {
          tempArray.pop();
        } else {
          return false;
        }
      }
    }

    return tempArray.length === 0;
  }

  IsOpeningParenthase(parenthase) {
    return ["(", "[", "{"].indexOf(parenthase) > -1;
  }

  GetReverseParenthase(parenthase) {
    switch (parenthase) {
      case ")": {
        return "(";
      }
      case "]": {
        return "[";
      }
      case "}": {
        return "{";
      }
    }
  }
}

let testExpression = new ValidateParenthases("((()))"); // True
console.log(testExpression.Valid());

testExpression = new ValidateParenthases("[()]{}"); // True
console.log(testExpression.Valid());

testExpression = new ValidateParenthases("({[)]"); // False
console.log(testExpression.Valid());
