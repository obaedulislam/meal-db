const bondCode=` I am Fake James bond . My new code is: 00${7+1+2}`
console.log(bondCode);

const data={ result: [ {userName: {title:'Mr.',name:"sakib khan"} } ] }
const name = data.result[0].userName.name;
console.log(name);

const p=[1,2,3];
const q=p.map( n=> Math.pow(n, 3));
console.log(q);