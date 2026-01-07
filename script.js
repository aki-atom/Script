/* クラス 新しいデータ型(設計図)
  その型からインスタンス(オブジェクト)を作成する
 コンストラクター→インスタンスを初期化(プロパティの準備)

   class　クラス名 {
      constructor(引数１, 引数２, 引数３){
        this.プロパティ１ = 引数１,
        this.プロパティ２ = 引数２,
        this.プロパティ３ = 引数３
      }
   }
   「new クラス名」でインスタンスを作成
*/

class Character {
    constructor(name, age, devil_fruit) {
        this.name = name,
            this.age = age,
            this.devil_fruit = devil_fruit
    }
    saying(word) { //メソッド
        return `${this.name}の名言「${word}」`
    }
    //static 静的メソッド（クラスメソッド）
    //インスタンスを生成しなくても呼び出せる
    //(インスタンスから呼び出せない)
    static introduce() {
        return "ワンピースキャラクターを作るクラスです"
    }
}
console.log("--Luffy(インスタンス)--");
let Luffy = new Character("ルフィ", 19, "ゴムゴムの実");
console.log(Luffy.name);
console.log(Luffy.age);
console.log(Luffy.devil_fruit);
console.log(Luffy.saying("仲間がいる゛よ！！！"));
console.log("--Ace(インスタンス)--");
let Ace = new Character("エース", 20, "メラメラの実");
console.log(Ace.name);
console.log(Ace.age);
console.log(Ace.devil_fruit);
console.log(Ace.saying("愛してくれてありがとう"));
console.log("--static 静的メソッド--")
console.log(Character.introduce());
//console.log(Luffy.introduce()); は、静的メソッドがないので表示できない。

//新しいメソッドを追加したい  prototype
/// クラス名.prototype.メソッド名 = function(引数){..}
Character.prototype.description = function () {
    return `${this.name}は、${this.devil_fruit}の能力者です`
}
console.log("--protptype メソッドを追加--");
console.log(Luffy.description());
console.log(Ace.description());
//　インスタンスにメソッドを追加できる
Luffy.pirate_king = function () {
    return "海賊王に俺はなる！"
}
console.log("--インスタンスにメソッドを追加--");
console.log(Luffy.pirate_king());
//　そのインスタンス限定なので、他のインスタンスには使用不可
console.log(Ace.pirate_king());