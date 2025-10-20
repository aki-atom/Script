let nameList = ["太郎", "二郎", "三郎"];

for(const name of nameList) {
  console.log(name);
}

const ages = [10, 20,30,40,50];

const adults = ages.filter(function (age) {
  return age > 18;
});

console.log(adults);