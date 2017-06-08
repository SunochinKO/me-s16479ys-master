function sum(list) {
  let result = 0;
  let index = 0;
  while (index < list.length) {
    result = result + list[index];
    index = index + 1;
  }
  return result;
}

function max(list) {
  let winner = list[0];
  let index = 1;
  while (index < list.length) {
    let candidate = list[index];
    if (winner < candidate) {
      winner = candidate;
    }
    index = index + 1;
  }
  return winner;
}

function indexOf(list, number) {
  let result = -1;
  let index = 0;
  while (index < list.length) {
    if (number == list[index]) {
      result = index;
      break;
    }
    index = index + 1;
  }
  return result;
}

function richman(record) {
  let sums = [];
  let index = 0;
  while (index < record.length) {
    sums[index] = sum(record[index]);
    index = index + 1;
  }
  let target = max(sums);
  return indexOf(sums, target);
} 
