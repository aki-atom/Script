// 例外処理 try..catch..finally
/*
  try {
    例外(エラー)が起きそうな処理  
  } catch(exception) {
    例外(エラー)が起きた時の処理
  } finally {
    例外(エラー)の有無に関係なく、実行
  }
*/

console.log("--例外が起きる---");
  try {
    console.log(one_peace);
  } catch(exception) {
    console.log("例外情報は⇩です");
    console.log(exception.message);
  } finally {
    console.log("ワンピースの正体が気になります!");
  }
//例外が起きない例
console.log("--例外が起きない---");
  try {
    console.log("one_peace");
  } catch(ex) {
    console.log("例外情報は⇩です");
    console.log(ex.message);
  } finally {
    console.log("ワンピースの正体が気になります!");
  }
//例外を投げる(例外を発生させる) throw1
console.log("--例外を投げる throw1---");
let one_peace = "これまでに出会った仲間";
  try {
    console.log(one_peace);
  } catch(ex) {
    console.log("例外情報は⇩です");
    console.log(ex.message);
  } finally {
    console.log("ワンピースの正体が気になります!");
  }

//例外を投げる(例外を発生させる) throw2
console.log("--例外を投げる throw2---");
one_peace = "これまでに出会った仲間";
  try {
    if (one_peace !== "") {
      throw new TypeError("ワンピースの正体はまだ不明です");
    }
    console.log(one_peace);
  } catch(ex) {
    console.log("例外情報は⇩です");
    console.log(ex.name);      //エラー名
    console.log(ex.message);   //エラーメッセージ
  } finally {
    console.log("ワンピースの正体が気になります!");
  }
