/* クラスの継承/オーバーライド
   class クラス名 extends クラス名(元) {
   }
*/
class Character {
  constructor(name, age) {
    this.name = name,
      this.age = age
  }
  saying(word) { //メソッド
    return `${this.name}の名言「${word}」`
  }
  static introduce() {
    return "ワンピースキャラクターを作るクラスです"
  }
}
             //クラスの継承
class Gifted extends Character {
  constructor(name, age, devil_fruit) {
    super(name, age);
    this.devil_fruit = devil_fruit
  }
  static introduce() { //オーバーライド(上書き)
    return "能力者を作るクラスです"
  }
}

console.log("--extends 使用")
let Luffy = new Gifted("ルフィ", 19, "ゴムゴムの実");
console.log(Luffy.name);
console.log(Luffy.age);
console.log(Gifted.introduce());
console.log(Luffy.devil_fruit);
console.log("--継承元の静的メソッド--")
console.log(Character.introduce());