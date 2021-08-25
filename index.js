/* const math = require('./math.js');

console.log(math.divide(1,2));

console.log(math.add(1,2));

console.log(math);

console.log('Make it bold and red'.red.bold); */


const proxy_check = require('proxy-check');

const proxy = {
  host: '16.1.1.113',
  port: 3128,
  proxyAuth: 'y0adXjeO:pAzAHCr4'
};
// or
// const proxy = 'y0adXjeO:pAzAHCr4@54.82.74.24:5557';

proxy_check(proxy).then(r => {
  console.log(r); // true
}).catch(e => {
  console.error(e); // ECONNRESET
});