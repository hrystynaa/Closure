'use strict';

const array = () => {
  const arr = [];
  const element = (i) => arr[i];
  element.push = (value) => arr.push(value);
  element.pop = () => arr.pop();
  return element;
};

module.exports = { array };
