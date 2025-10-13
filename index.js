const balls = ["ボール", "ボール", "ボール", "ボール"];
const isRainy = false;

for (let i = 1; i <= balls.length; i++) {
    if (isRainy) {
        console.log("雨なので素振りをしません!");
        break;
    }
    if (i == 3) {
        console.log("休憩します。");
        continue;
    }
    console.log("素振りをしました!");
}