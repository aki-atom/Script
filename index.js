async function fetchData() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

async function fetchData2() {
  try {
    const response2 = fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    const data2 = response2.json();
    console.log(data2);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchData();
//非同期処理をしない場合
fatchData2();