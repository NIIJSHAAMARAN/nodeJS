const url=require('url');
const adr = 'http://localhost:8080/default.html?car=benz&fruit=mango';
const q=url.parse(adr,true);
console.log(q.protocol);
console.log(q.host);
console.log(q.pathname);
console.log(q.query.fruit);
console.log(q.query.car);
console.log(q.search);