console.log("--Promise(thenつなげる)");
new Promise((resolve) => {
  setTimeout(() => {
    console.log("１人目ゾロ");
    resolve();
  }, 1000);
})
  .then(() => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("２人目ナミ");
        resolve();
      }, 1000);
    });
  })
  .then(() => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("３人目ウソップ");
        resolve();
      }, 1000);
    });
  })
  .then(() => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("４人目サンジ");
        resolve();
      }, 1000);
    });
  });
