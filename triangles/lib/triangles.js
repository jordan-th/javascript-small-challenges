class Triangle {
  constructor(side1, side2, side3) {
    this.sides = [side1, side2, side3].sort((a, b) => a - b);
  }

  isValidTriangle() {
    let smallestSide = this.sides[0];
    let largestSide = this.sides[2];
    let sumSmallestSides = this.sides[0] + this.sides[1];

    if (smallestSide <= 0 || sumSmallestSides <= largestSide) {
      throw new Error('str');
    }
  }

  kind() {
    this.isValidTriangle();

    let uniqueLengths = this.sides.reduce((catalog, leng) => {
          if (!catalog.includes(leng)) {
            catalog.push(leng);
          }
          return catalog;
        }, []).length;

    if (uniqueLengths === 1) {
      return 'equilateral';
    } else if (uniqueLengths === 2) {
      return 'isosceles';
    } else if (uniqueLengths === 3) {
      return 'scalene';
    }
  }
}

module.exports = Triangle;