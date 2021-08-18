document.getElementById('generate-pin').addEventListener('click', function () {
  function pinGenerate() {
    const pinNumber = Math.ceil(Math.random() * 10000);
    const pinString = pinNumber + '';
    if (pinString.length == 4) {
      return pinString;
    } else {
      // pinGenerate();
      return pinString + '1';
    }
  }
  const displayPin = document.getElementById('display-pin');

  displayPin.value = pinGenerate();
});

document.getElementById('key-pad').addEventListener('click', function (e) {
  const number = e.target.innerText;
  const calcDisplay = document.getElementById('display-calc');
  if (isNaN(number)) {
    if (number == 'C') {
      calcDisplay.value = '';
    } else if (number == '<') {
      calcDisplay.value = 'pore';
    }
  } else {
    calcDisplay.value += number;
  }
});

document.getElementById('submit-btn').addEventListener('click', function () {
  const matchMessage = document.getElementById('match');
  const notMatchMessage = document.getElementById('not-match');
  const left = document.getElementById('left');
  const randomPin = document.getElementById('display-pin').value;
  const inputNum = document.getElementById('display-calc').value;
  if (randomPin == inputNum) {
    matchMessage.style.display = 'block';
    notMatchMessage.style.display = 'none';
  } else {
    notMatchMessage.style.display = 'block';
    matchMessage.style.display = 'none';
    const leftNumber = parseInt(left.innerText);
    const remain = leftNumber - 1;
    left.innerText = remain;
    if (remain == 0) {
      const btn = document.getElementById('submit-btn');
      btn.style.display = 'none';
    }
  }
});
