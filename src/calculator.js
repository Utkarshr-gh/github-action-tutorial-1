function add(a, b) {
    return parseFloat(a) + parseFloat(b);
  }
function subtract(a, b) {
    return parseFloat(a) - parseFloat(b);
  }


function modulo(a, b) {
  return a % b;
}

module.exports = { add,subtract,modulo };
