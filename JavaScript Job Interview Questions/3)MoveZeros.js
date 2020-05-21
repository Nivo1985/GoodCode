//Facebook

//Example:
//Input: [0,1,0,3,12]
//Output: [1,3,12,0,0]

//No new arrays
//cost 0(n)

let getComparer = x => elem => x === elem;

function reavangeArray(array, comparer) {
  let wasValueSet,
    value,
    matches = 0;

  for (let i = 0; i < array.length; i++) {
    let elem = array[i];
    if (comparer(elem)) {
      matches++;
      if (!wasValueSet) {
        wasValueSet = true;
        value = elem;
      }
    } else {
      array[i - matches] = elem;
    }
  }

  for (let i = 0; i < matches; i++) {
    array[array.length - 1 - i] = value;
  }

  return array;
}

let input = [0, 1, 0, 3, 12];
input = reavangeArray(input, getComparer(0));
console.log(input);
