const PLANTS = {
  "V": "violets",
  "C": "clover",
  "R": "radishes",
  "G": "grass",
}

class Garden {
  constructor(diagramStr, studentsArr) {
    if (studentsArr === undefined) {
      studentsArr = ['alice', 'bob', 'charlie', 'david', 'eve', 'fred', 'ginny', 'harriet', 'ileana', 'joseph', 'kincaid', 'larry'];
    }
    studentsArr = studentsArr.map(name => name.toLowerCase()).sort();

    let rows = diagramStr.split(/\n/);
    rows[0] = rows[0].split("");
    rows[1] = rows[1].split("");

    studentsArr.forEach((name, nameIdx)=> {
      let plants = [];
      let leftPlantIdx = nameIdx * 2;
      let rightPlantIdx = (nameIdx * 2) + 1;

      rows.forEach(rowArr => {
        plants.push(PLANTS[rowArr[leftPlantIdx]]);
        plants.push(PLANTS[rowArr[rightPlantIdx]]);
      })
  
      this[name] = plants;
    });
  }
}

console.log(new Garden("RC\nGG").alice);

module.exports = Garden;