const path = require('path');
console.log(path.sep);

const pathWay = path.join('/content','/subfolder','/test.text');
const base = path.basename(pathWay);
const absoulute = path.resolve(__dirname,'content','subfolder','test.txt')
console.log(pathWay);
console.log(base);
console.log(absoulute);