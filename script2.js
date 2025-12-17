
console.log("--入れ子setTimeout");
const luffy_members = () => {
  console.log("１人目ゾロ");
  setTimeout(() => {
    console.log("２人目ナミ");
    setTimeout(() => {
      console.log("３人目ウソップ");
      setTimeout(() => {
        console.log("４人目サンジ");
        setTimeout(() => {
        },1000);
      },1000);
    },1000);
  },1000); 
};

luffy_members();
//waitでは、処理の順番をコントロール出来ない
