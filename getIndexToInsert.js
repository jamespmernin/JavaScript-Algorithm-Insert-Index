//INSERT INDEX

const getIndexToInsert = (arr, num) => {
  arr.push(num);
  arr.sort((a, b) => {
    return a - b;
  });

  return arr.indexOf(num);
};

console.log(getIndexToInsert([40, 60, 5, 322, 48, 83], 80));

module.exports = {
  getIndexToInsert
};
