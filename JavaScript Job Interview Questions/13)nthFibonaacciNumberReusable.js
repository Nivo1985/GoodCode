//Nth Fibonacci Number (With cache)
//Apple

class FibWithCache {
  constructor() {
    this.cache = [0, 1];
  }

  getValueAt(x) {
    if (this.cache.length < x) this.generateElements(x);

    return this.cache[x - 1];
  }

  generateElements(x) {
    for (let i = 0; i <= x - this.cache.length; i++) {
      this.cache.push(
        this.cache[this.cache.length - 1] + this.cache[this.cache.length - 2]
      );
    }
  }
}

var superFib = new FibWithCache();

console.log(superFib.getValueAt(3));
console.log(superFib.getValueAt(5));
console.log(superFib.getValueAt(4));
