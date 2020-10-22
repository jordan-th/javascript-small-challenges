class Matrix {
  constructor(matrixStr) {
    this.rows = this.getRows(matrixStr);
    this.columns = this.getColumns();
    this.saddlePoints = this.getSaddlePoints();
  }

  getRows(matrixStr) {
    return matrixStr
      .split(/\n/)
      .map(rowStr => {
        return rowStr
          .split(" ")
          .filter(char => char.match(/\d/))
          .map(num => Number(num));
    });
  }

  getColumns() {
    let columnsQuant = this.rows[0].length;
    let allColumns = []
    
    for (let columnNum = 0; columnNum < columnsQuant; columnNum += 1) {
      let columnElements = []
      
      this.rows.forEach(row => {
        let element = row[columnNum];
        columnElements.push(element);
      })

      allColumns.push(columnElements);
    }

    return allColumns;
  }

  getLargestVal(array) {
    return array.reduce((running, curr) => {
      if (curr > running) {
        return curr;
      }
      return running;
    }, 0);
  }

  getSmallestVal(array) {
    return array.reduce((run, curr) => {
      if (curr < run) {
        return curr;
      }
      return run;
    })
  }

  getLocs(value, array) {
    return array.reduce((running, current, idx) => {
      if (current === value) {
        return running.concat(idx);
      } else {
        return running;
      }
    }, [])
  }

  getSaddlePoints() {
    let saddlePoints = [];

    this.rows.forEach((rowValues, index) => {
      let rowNum = index;
      let largestVal = this.getLargestVal(rowValues);
      let largestValLocs = this.getLocs(largestVal, rowValues);
  
      largestValLocs.forEach(columnNum => {
        let smallestVal = this.getSmallestVal(this.columns[columnNum]);
        let smallestValLocs = this.getLocs(smallestVal, this.columns[columnNum]);

        if (smallestValLocs.includes(rowNum)) {
          saddlePoints.push([rowNum, columnNum]);
        }
        })
    })

    return saddlePoints;
  }
}

module.exports = Matrix;
