// 高阶函数
let arr = [
  { name: "aa", count: 1 },
  { name: "bb", count: 2 },
  { name: "cc", count: 3 },
  { name: "dd", count: 4 },
  { name: "ee", count: 5 },
];

function copy(data) {
  return JSON.parse(JSON.stringify(data));
}
// map 常用于对一个数组处理某一项获某几项, 最终返回的是一个新的处理过的数组
const mapRes = copy(arr).map((item) => {
  if (item.name === "aa") {
    item.name = "aaa";
  }
  return item;
});
// console.log("mapRes", mapRes);

// filter 通常对一个数组进行过滤, 返回的是过滤完的新数组
const filterRes = copy(arr).filter((item) => item.name !== "aa");
// console.log("filterRes", filterRes);

// some 遍历数组, 当数组中至少有一个元素符合给定条件时, 返回true, 如果一个都没有符合, 则返回false
const someRes = copy(arr).some((item) => item.name === "hh");
// console.log("someRes", someRes);

// every 遍历数组, 当数组中的每个元素都符合给定条件时 返回true, 否则返回false, 所以可用于判断数组中某个条件是否都符合

const everyRes = copy(arr).every((item) => item.name.length > 3);
// console.log("everyRes", everyRes);

// find 遍历数组, 找到符合条件的某一条数据

const findRes = copy(arr).find((item) => item.name === "cc");
// console.log("findRes", findRes);

// reduce(callback(accumulator, currentValue, index, array), initialValue)
// accumulator 是累积器
// currentValue 是当前值
// initialValue 给定初始值

const reduceRes = copy(arr).reduce((accumulator, currentValue, index) => {
  console.log("accumulator", accumulator, currentValue, index);
  return typeof accumulator === "object"
    ? accumulator.count
    : accumulator + currentValue.count;
});
// console.log("reduceRes", reduceRes);
