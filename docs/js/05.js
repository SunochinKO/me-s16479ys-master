function digits (n){
    n = Math.abs(n) + "";
    return n.length;
}

function digitsList(list) {
  let index = 0;
  let result = [];
  while (index < list.length) {
    let number = list[index];
    result[index] = digits(number);
    index = index + 1;
  }
  return result;
} 