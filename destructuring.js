let details = {
  firstName:'Code',
  lastName:'Burst',
  age:22
}
const {firstName,age} = details;

console.log(firstName); // Code
console.log(age);       // 22


// ----------------------------------------------------------------

const person = {
  name: 'jsPool',
  country: 'China'
};
const {name:fullname,country:place} = person;

console.log(fullname); // jsPool
console.log(place); // China

// 默认值

const person2 = {
  name: 'jsPool',
  country: 'China',
  sexual:undefined
};
let {age2 = 20,sexual:sex = 'male'} = person2;
console.log(age2); // 20
console.log(sex); // male

const student = {
  name:'jsPool',
  age:20,
  scores:{
    math:95,
    chinese:98,
    english:93
  }
}
function showScore(student){
  const { name,scores:{ math = 0,chinese = 0, english = 0}} = student;
  console.log('学生名:' + name);
  console.log('数学成绩:' + math);
  console.log('语文成绩:' + chinese);
  console.log('英语成绩:' + english);
}
showScore(student)

// 数组

let colors = ['red','green','blue'];
let [firstColor,...otherColors] = colors;
console.log(firstColor);  // red
console.log(otherColors); // ['green','blue']

