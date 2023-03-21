// Compare two arrays and return their similarity as a percentage.




function compareArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return 0.0;
  }

  let matchingElements = 0;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) {
      matchingElements++;
    }
  }

  return (matchingElements / arr1.length) * 100;
}
