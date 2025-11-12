//繰り返し while / do ... while/ for
/* while
  while(条件式){
    条件式がtureのとき行う処理
  }
*/

let i = 1;   //仲間の人数
console.log(`仲間が3人のとき--whlieのみ--`);
while(i < 4){
    console.log(` 仲間${i} 「ルフィは海賊王になる男だ」`);
    i++;
}

i = 0;   //仲間の人数
console.log(`仲間が0人のとき--whlieのみ--`);
while(i < 0){
    console.log(` 仲間${i} 「ルフィは海賊王になる男だ」`);
    i++;
}

/* do while 条件によらず必ず1回は実行される
  do {
    条件式がtureのとき行う処理(ただし1回は必ず実行)
  } while(条件式);
*/

i = 1;
console.log(`仲間が0人のとき--do while--`);
do {
    console.log(` 仲間${i} 「ルフィは海賊王になる男だ」`);
    i++;
} while( i < 0);
//条件によらず必ず1回は実行される

/* for まとめて管理できる
  for (初期化; 終了条件; 増減式) {
    繰り返す処理
  }
*/

console.log(`仲間が3人のとき--for--`);
for (let m = 1; m < 4; m++){
    console.log(` 仲間${m} 「ルフィは海賊王になる男だ」`);
}
//初期化(let m = 1)は最初の1回だけ実行
//終了条件は、毎回実行される
//増減式は、ループが1回実行されるたびに実行
console.log(`仲間が6人のとき--for--`);
for (let m = 2; m < 8; m+=2){
    console.log(` 仲間${m-1} 「ルフィは海賊王になる男だ」`);
    console.log(` 仲間${m} 「ルフィは海賊王になる男だ」`);
}
