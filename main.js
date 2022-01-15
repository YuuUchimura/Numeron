// 答え合わせボタンの取得
const check = document.getElementById("numCheck");
const remainTurn = document.getElementById("remainTurn");
//残りのターンの初期値
let remainTurnNum = 10;
remainTurn.textContent = `あと残り${remainTurnNum}回です`;
let answerNum;
// ボタンが押された時の処理
check.addEventListener("click", () => {
    answerNum = document.getElementById("answerNum").value;
    if (answerNum.length != 3) {
        alert("3桁の数字を入力して下さい");
        return;
    } else if (
        answerNum[0] == answerNum[1] ||
        answerNum[0] == answerNum[2] ||
        answerNum[1] == answerNum[2]
    ) {
        alert("同じ数を２回使ってはいけません")
        return;
    }
    let eatNum = eat();
    let biteNum = bite();
    alert(`${eatNum}EAT, ${biteNum}BITE`);
    if (eatNum === 3) {
        alert("正解")
        window.location.reload();
    }
    document.getElementById("answerNum").value = "";
    remainTurnNum--;
    remainTurn.textContent = `あと残り${remainTurnNum}回です`;
    if (remainTurnNum === 0) {
        remainTurn.textContent = `終了。正解は${answer_number.join("")} です`;
    }
});

let answer_number = [];// 空の配列を３つ生成
const three_random_number = () => {
    for (let i = 0; answer_number.length < 3; i++) {// 変数（ランダムな三桁の数字の生成）
        const random = Math.floor(Math.random() * 10)// ０〜９までの数字をランダムに生成        
        if (!answer_number.includes(random)) {// threeNumにランダムな数字が入っていなければ            
            answer_number.push(random);// 数字を入れる(push)
        }
    }
}
three_random_number();
console.log(answer_number);

// eat関数
const eat = () => {
    let eatCount = 0;
    for (let i = 0; i < answer_number.length; i++) {
        if (answer_number[i] == answerNum[i]) {
            eatCount++;
        }
    }
    return eatCount;
}
// bite関数
const bite = () => {
    let biteCount = 0;
    for (let i = 0; i < answer_number.length; i++) {
        for (let j = 0; j < answer_number.length; j++) {
            if (i == j) continue;
            if (answer_number[i] == answerNum[j]) {
                biteCount++;
            }
        }
    }
    return biteCount;
}