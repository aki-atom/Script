const isError = false;

function serverCall() {
    if (isError) {
        throw new Error("エラーが発生しました");
    }
    console.log("サーバーとの通信に成功しました");
}

try {
  serverCall();
} catch (error) {
  console.error(error.message);  
} finally {
  console.log("処理が完了しました");
}