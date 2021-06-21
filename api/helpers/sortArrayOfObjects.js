/**
 * It gives you the function to use in a Javascript Sort function
 */
function compare(property, order = "ASC") {
  return (a, b) => {
    const valueA = order === "ASC" ? a[property] : b[property];
    const valueB = order === "ASC" ? b[property] : a[property];

    if (valueA < valueB) {
      return -1;
    }

    if (valueA > valueB) {
      return 1;
    }

    return 0;
  }
}

/**
 * It sorts the provided array through the given 'property' name
 * and 'order' (default="ASC").
 *
 * Returns null if passed array is falsy, empty or is not an array.
 */
function sortArrayOfObjects(array, property, order) {
  if (!array || !array.length || !Array.isArray(array)) {
    return null;
  }

  return array.sort(compare(property, order));
}

module.exports = { sortArrayOfObjects };
