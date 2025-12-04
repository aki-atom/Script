//文字列/*
/*
  ①文字列の長さを取得する方法
  ②大文字・小文字の変換する方法
  ③不要な空白を除去する方法
  ④文字列からある一部を取り出す方法
  ⑤特定の文字を変換する方法
  ⑥特定の文字列が含まれるか判定する方法
  ⑦文字列を繰り返したものを生成する方法
  ⑧任意の文字列にそろえる方法
*/

//①文字列の長さを取得する方法 length
console.log("--lengthで長さを取得");
let luffu_full_name = "モンキー・D・ルフィ";
console.log(luffu_full_name + "は");
console.log(luffu_full_name.length + "文字");

let shanks = "赤髪のシャンクス";
console.log(shanks + "は");
console.log(shanks.length + "文字");

//②大文字・小文字の変換する方法 toUpperCase() toLowerCase()
shanks = "Shanks";
console.log("--toUpperCase()を使用");
console.log(shanks.toUpperCase());
console.log("--toLowerCase()を使用");
console.log(shanks.toLowerCase());

//③不要な空白を除去する方法 trim()
word = "\n 今の時代を作れるのは今を生きている人間だけだよ";
console.log(word);
console.log("--trim()で空白を除去");
console.log(word.trim());

//文字列からある一部を取り出す方法
/*
  substring(start, {end})   startからend-1までを取得
  slice(start, {end})       startからend-1までを取得
  substr(start, {len})      startからlen文字分を取得
  charAt(i)                   i番目を取得
*/

word = "危機感なくして成長はない";
////////０１２３４５６７８９１０１１
console.log(word);
console.log("--substring()を使用：成長を取り出す");
console.log(word.substring(7, 9));
console.log("--slice()を使用：成長を取り出す");
console.log(word.slice(7, 9));

//substring()とslice()の違い
// start/end 負の数の時
console.log("--substring()を使用");
console.log(word.substring(3, -4));
//負の数は0扱い start>endのときは逆にする
console.log("--slice()を使用");
console.log(word.slice(3, -4));
//負の数は末尾から取得
////"危 機 感 な く し て 成 長 は な い"
///  ０ １ ２ ３         -5 -4 -3 -2 -1

//substr(start, {len})    startからlen文字分を取得
word = "危機感なくして成長はない";
console.log("--substr()を使用：成長を取り出す");
//console.log(word.substring(7, 9));
console.log(word.substr(7, 2));

//charAt(i)                i番目を取得
console.log("--charAt()を使用");
console.log(word.charAt(7));

//⑤特定の文字を変換する方法

/*        文字列    検索位置
  IndexOf(scratch {,from})    先頭から検索
  lastIndexOf(search {,from}) 後方から検索
*/

let characters;
characters = "ロロノア・ゾロ, ポートガス・D・エース, サンジ"
characters += "モンキー・D・ルフィ, トニートニー・チョッパー"
characters += "ボア・ハンコック, トラファルガー・ロー, シャンクス"
characters += "ジュラキュール・ミホーク, サボ, ナミ, スモーカー"
characters += "マルコ, コラソン, ニコ・ロビン, モンキー・D・ガープ"
characters += "サー・クロコダイル, エドワード・ニューゲート"
characters += "ボン・クレー, シャーロット・プリン, シルバーズ・レイリー"
characters += "ユースタス・キッド, レベッカ, ペル"

console.log(characters);
console.log("--IndexOf()を使用");
console.log(characters.indexOf("チョッパー"));
//見つかった文字位置を返す
console.log("--lastIndexOf()を使用");
console.log(characters.lastIndexOf("チョッパー"));

console.log("--IndexOf()を使用");
console.log(characters.indexOf("モンキー・D"));
console.log("--lastIndexOf()を使用");
console.log(characters.lastIndexOf("モンキー・D"));
//存在しない場合
console.log("--IndexOf()を使用");
console.log(characters.indexOf("ガイモン"));
//存在しない場合は-1を返す

//⑥特定の文字列が含まれるか判定する方法
/*
  includes(文字列 {,開始位置})      部分一致検索
  startsWith(文字列 {,開始位置})    前方一致検索
  endsWith(文字列 {,開始位置})      後方一致検索
*/
let character = "ロロノア・ゾロ";
//               ０１２３４５６
console.log("--includes('ノア')を使用");
console.log(character.includes("ノア"));
console.log("--includes('ナミ')を使用");
console.log(character.includes("ナミ"));
console.log("--includes(,4)を使用");
console.log(character.includes("ノア", 4));
console.log("--includes(,2)を使用");
console.log(character.includes("ノア", 2));
console.log("--startswith('ロロ')を使用");
console.log(character.startsWith("ロロ"));
console.log("--startswith(,2)を使用");
console.log(character.startsWith("ノア", 2));
console.log("--endswith('ノア')を使用");
console.log(character.endsWith("ノア"));
console.log("--endswith(,4)を使用");
console.log(character.endsWith("ノア",4));

//⑦文字列を繰り返したものを生成する方法 repeat
// repeat(count) count 回数
let gum = "ゴム";
console.log("--repeat(2)を使用");
console.log(gum.repeat(2));
console.log("--repeat(5)を使用");
console.log(gum.repeat(5));

//⑧任意の文字列にそろえる方法 padStart/padEnd
// padStart(len [, pad])   lenになるように前方にpadを追加
// padEnd(len [, pad])     lenになるように後方にpadを追加

gum = "ゴムゴムの";
console.log("--padStart('ゴッ')を使用");
console.log(gum.padStart(13, "ゴッ"));
console.log("--padEnd('ー')を使用");
console.log(gum.padEnd(13, "ー"));