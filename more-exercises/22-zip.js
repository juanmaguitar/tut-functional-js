// JSON.stringify(Array.zip([1,2,3],[4,5,6], function(left, right) { return left + right })) === '[5,7,9]'

Array.zip = function(left, right, combinerFunction) {
  var i, combinedValue
      results = [],
      smallerLength = Math.min(left.length, right.length);

  for(i = 0; i < smallerLength; i++) {
    combinedValue = combinerFunction(left[i],right[i]);
    results.push(combinedValue);
  }

  return results;
};
