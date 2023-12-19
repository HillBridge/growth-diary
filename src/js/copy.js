// js 拷贝
// 浅拷贝数组 slice (指的是copy数组的第一层, copy后的数据更改第一层原数据结构不改变, 深层的数据将改变)
const arr = [1, 2, 3];
function copy1(arr) {
  return arr.slice();
}

// console.log("浅拷贝数组", copy1(arr));

// 浅拷贝对象
const obj = {
  name: "foo",
  age: 12,
  nums: [{ count: 1 }],
};
function copy2(obj) {
  return Object.assign({}, obj);
}
const res2 = copy2(obj);
// console.log("浅拷贝对象", copy2(obj));
res2.nums[0].count = 2;
res2.age = 14;

// console.log("改变了值", obj);

// 深拷贝对象
const obj2 = {
  name: "foo",
  age: 12,
  nums: [{ count: 1 }],
};
function copy3(obj) {
  return JSON.parse(JSON.stringify(obj2));
}

const res3 = copy3(obj);
res3.nums[0].count = 3333;
//console.log("改变了值22", obj2);
