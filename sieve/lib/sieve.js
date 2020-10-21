function primes(cap) {
  //Manipulate an array such that only elements with prime indices are `true`

  //Start with an array of all `true` elements
  let range = Array(cap + 1).fill(true);
  
  //Mark indicies we are not considering in our search for primes
  range[0] = false;
  range[1] = false;
  
  //Store the first prime number (2)
  let prime = range.indexOf(true);

  //Mark all elements who's indicies are multiples of our stored prime number
  while (prime !== -1) {
    let multiple = prime + prime;
    while (multiple <= cap) {
      range[multiple] = false;
      multiple += prime;
    }
    //find the next unmarked (prime) number
    prime = range.indexOf(true, prime + 1);
  }

  //Collect and return the indicies of the elements that are `true`
  return range.reduce((primesArr, mark, idx) => {
    if (mark) {
      primesArr.push(idx) 
    }
    return primesArr;
  }, []);
}

module.exports = primes;