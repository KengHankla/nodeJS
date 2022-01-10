const _ = require('lodash')

const items = [1,[2,[3,[4]]]]

const newItem2 = _.flattenDeep(items)

console.log(items);
console.log(newItem2);