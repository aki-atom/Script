// function を使った場合
let getTriangle = function(base,height){
 return base * height / 2;
};
// アロー関数:=>(矢) を使って関数を記述
let getTriangle2 = (base, height) => {
  return base * height / 2;
};
// 本体が一文である場合、ブロックを表す{...}を省略できます。
let getTriangle3 = (base, height) => base * height / 2;

console.log('getTriangle:三角形の面積は' + getTriangle(10,2));
console.log('getTriangle2:三角形の面積は' + getTriangle2(10,2));
console.log('getTriangle3:三角形の面積は' + getTriangle3(10,2));

// 引数がひとつの場合、引数をくくるカッコも省略
let getCircle = radius => radius * radius * Math.PI;

console.log(getCircle(10));

// 引数がない場合はカッコを省略せずに記述
let show = () => console.log('Hello world!');

show(); 