function repeatStringNumTimes(str, num) {
  if (num < 1) return '';
  let result = [];
  while (num > 0) {
    result.push(str);
    num--;
  }
  return result.join('');
}

module.exports = repeatStringNumTimes;
