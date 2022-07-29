
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix == [] || matrix == undefined){
    return [];
  } else {
  let result = [];
  matrix.forEach((val, index) => {
    if (index % 2 == 0){
        val.forEach((el) => result.push(el));
    } else {
        val.reverse().forEach((el) => result.push(el));
    };
  });
  return result;
}
}
