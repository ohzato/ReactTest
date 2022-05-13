/*
 
*/
// var val1 = "var変数";

// console.log(val1);

// // 再宣言
// val1 = "上かき";
// console.log(val1);

// // let宣言
// let let2 = "let変数";

// console.log(let2);

// //let再宣言

/*
 * アロー関数
 */

///従来
// 従来function 1
console.log("--------------");
function func1(num1, num2) {
  return num1 + num2;
}
console.log(func1(0, 1));
// 従来function2
const func2 = function (num1, num2) {
  return num1 + num2;
};
console.log(func2(1, 2));
// アロー関数
const func3 = (num1, num2) => {
  return num1 + num2;
};
console.log(func3(3, 4));
// アロー関数 短縮系
const func4 = (num1, num2) => num1 + num2;
console.log(func4(5, 6));
//

/*
分割代数
*/
const myProf = {
  name: "太郎",
  age: "19"
};

const message1 = `私の名前は、${myProf.name}です。年齢は、${myProf.age}です。`;
console.log(message1);

const { name, age } = myProf;
const message2 = `私の名前は、${name}です。年齢は、${age}です。`;
console.log(message2);

const myProfile2 = ["太郎", "２０"];
const message3 = `私の名前は、${myProfile2[0]}です。年齢は、${myProfile2[1]}です。`;
console.log(message3);

const [name4, age4] = myProfile2;
const message4 = `私の名前は、${name4}です。年齢は、${age4}です。`;
console.log(message4);

/*
 * デフォルト値,引数
 */
const sayHello = (name5 = "ゲスト") => console.log(`こんにちは${name5}さん`);
sayHello("花子");
sayHello();

/*
スプレット構文
*/
const arr1 = [1, 2];
console.log(arr1);
console.log(...arr1);

const sumfunc = (num1, num2) => console.log(num1 + num2);
sumfunc(arr1[0], arr1[1]);
sumfunc(...arr1);

const arr2 = [1, 2, 3, 4, 5];
const [num1, num2, ...arr3] = arr2;
console.log(num1);
console.log(arr3);
//合成
const arr4 = [num1, num2, ...arr3];
console.log(arr4);

//参照渡し
arr1[0] = 100;
console.log(arr1);
console.log(arr4);

// map filter
const nameArr = ["太郎", "二郎", "三郎"];
//従来
for (let index = 0; index < nameArr.length; index++) {
  console.log(nameArr[index]);
}
// map
const nameArr2 = nameArr.map((name) => {
  return name;
});
console.log(nameArr2);

/// map2
nameArr.map((name) => console.log(name));

//filter　条件に合った数値だけ取り出す。
const numArr = [1, 2, 3, 4, 5];
const newNumArr = numArr.filter((num) => {
  //　条件
  return num % 2 === 1;
});
// filter
console.log(newNumArr);

// map filter
const nameArr1 = ["太郎", "二郎", "三郎"];
//index
for (let index = 0; index < nameArr1.length; index++) {
  console.log(`${index}番目は、${nameArr1[index]}です`);
}

// index(map)
nameArr1.map((name, index) => console.log(`${index + 1}番目は、${name}です`));

//
const newNameArr = nameArr1.map((name) => {
  if (name === "太郎") {
    return name;
  } else {
    return `${name}さん`;
  }
});
console.log(newNameArr);

/*
三項演算子
*/
//
const val1 = 1 > 0 ? "true" : "false";
console.log(val1);

const num = "1300";

console.log(num.toLocaleString(num));

const formattedNum =
  typeof num === "number" ? num.toLocaleString(num) : "数値を入力してください";
console.log(formattedNum);

const checkSum = (num10, num11) => {
  return num1 + num2 > 100 ? "100を超えています。" : "許容範囲です";
};

console.log(checkSum(90, 11));

// 便利な論理演算子(アンパサンド)

const num11 = null;
const fee = num11 || "falseだったら返す";
console.log(fee);

const num12 = true;
const fee12 = num12 && "trueだったら返す";
console.log(fee12);
