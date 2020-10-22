class Luhn {
  constructor(numberString) {
    this.numbers = numberString
      .split("")
      .filter(char => {
        return char !== " ";
      })
      .map(char => parseInt(char, 10))
  }

  isShort() {
    return this.numbers.length <= 1;
  }

  isInvalidChars() {
    return this.numbers.some(char => isNaN(char));
  }

  doubleEveryOther() {
    let secondToLast = this.numbers.length - 2;
    const FACTOR = 2;
    const LAST_SINGLE_DIGIT_NUM = 9;
    
    for (let idx = secondToLast; idx >= 0; idx -= 2) {
      this.numbers[idx] *= FACTOR;
      if (this.numbers[idx] > LAST_SINGLE_DIGIT_NUM) {
        this.numbers[idx] -= 9;
      }
    }
  }

  sum() {
    return this.numbers.reduce((sum, num) => num + sum, 0);
  }

  valid() {
    if (this.isShort() || this.isInvalidChars()) return false;

    this.doubleEveryOther();

    if (this.sum() % 10 !== 0) return false;
    
    return true;
  }
}

module.exports = Luhn;