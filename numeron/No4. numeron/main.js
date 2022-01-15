const checkBtn = document.getElementById('numCheck');
let cpNum;

while (true) {
  cpNum = String(Math.floor(Math.random() * 900 + 100));

  if (cpNum[0] !== cpNum[1] && cpNum[1] !== cpNum[2] && cpNum[0] !== cpNum[2]) {
    break;
  }
}

checkBtn.addEventListener('click', function() {
  const answer = document.getElementById('answerNum').value;
  document.getElementById('answerNum').value = '';

  if (answer.length != 3) {
    alert('3桁の数を入れて下さい');
    return;
  } else if (
    answer[0] === answer[1] ||
    answer[1] === answer[2] ||
    answer[0] === answer[2]
  ) {
    alert('同じ数を2回使ってはいけません');
    return;
  }

  let eat = 0;
  let bite = 0;

  for (let i = 0; i < answer.length; i++) {
    for (let j = 0; j < cpNum.length; j++) {
      if (answer[i] === cpNum[j]) {
        if (i === j) {
          eat = eat + 1;
        } else {
          bite = bite + 1;
        }
      }
    }
  }

  alert(`${eat} EAT, ${bite} BITE`);

  if (eat === 3) {
    alert('正解です！');
    location.reload();
  }
});
