let translations = {
  'AUG': "Methionine",
  'UUU' : "Phenylalanine",
  'UUC' : "Phenylalanine",
  'UUA' : "Leucine",
  'UUG' : "Leucine",
  'UCU' : "Serine",
  'UCC' : "Serine",
  'UCA' : "Serine",
  'UCG' : "Serine",
  'UAU' : "Tyrosine",
  'UAC' : "Tyrosine",
  'UGU' : "Cysteine",
  'UGC' : "Cysteine",
  'UGG' : "Tryptophan",
  'UAA' : "STOP",
  'UAG' : "STOP",
  'UGA' : "STOP",
};

function translate(str = '') {
  let codons = [];
  let aminoAcids = [];

  for (let char = 0; char < str.length; char += 3) {
    codons.push(str.slice(char, char + 3));
  }

  for (let idx = 0; idx < codons.length; idx += 1) {
    if (translations[codons[idx]] === "STOP") {
      break;
    } else {
      if (translations[codons[idx]] === undefined) {
        throw new Error("Invalid codon");
      }
      aminoAcids.push(translations[codons[idx]]);
    }
  }

  return aminoAcids;
}

module.exports = translate;