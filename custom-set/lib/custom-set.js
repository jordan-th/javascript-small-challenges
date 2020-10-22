class CustomSet {
  constructor(array = []) {
    this.set = array;
  }

  empty() {
    return this.set.length === 0;
  }

  contains(num) {
    return this.set.includes(num);
  }

  subset(customSet) {
    if (this.empty()) return true;
    return this.set.every(num => customSet.contains(num));
  }

  disjoint(customSet) {
    return this.set.every(num => !customSet.contains(num))
  }

  eql(customSet) {
    return (
      this.set.every(num => customSet.contains(num)) &&
      customSet.set.every(num => this.contains(num))
    )
  }

  add(num) {
    if (!this.contains(num)) {
      this.set.push(num);
    }
    return this;
  }

  intersection(customSet) {
    let shared = this.set.reduce((arr, num) => {
      if (customSet.contains(num)) {
        arr.push(num);
      }
      return arr;
    }, []);

    return new CustomSet(shared);
  }

  difference(customSet) {
    let unique = this.set.reduce((arr, num) => {
      if (!customSet.contains(num)) {
        arr.push(num);
      }
      return arr;
    }, [])

    return new CustomSet(unique);
  }

  union(customSet) {
    let uniqueThis = this.difference(customSet);
    let uniqueArg = customSet.difference(this);
    let shared = this.intersection(customSet);

    return new CustomSet([...uniqueThis.set, ...uniqueArg.set, ...shared.set]);
  }
}


module.exports = CustomSet;