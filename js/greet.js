let greeting = document.getElementById('greeting-text');
let greetingContainer = document.getElementsByClassName('greeting')[0];

let greetingList = ['Hello', 'Kumusta', '你好', 'こんにちは', 'Henlo'];

let greetNo = 0;

function greetChange() {
    greetingContainer.classList.add('hide');
    let greetLetters = '';
    setTimeout(function () {
        for (let i = 0; i < greetingList[greetNo].length; i++) {
            greetLetters += '<span>' + greetingList[greetNo][i] + '</span>';
        }
        greetingContainer.classList.remove('hide');
        greeting.innerHTML = greetLetters;
        if (greetNo < greetingList.length - 1) {
            greetNo += 1;
        } else {
            greetNo = 0;
        }
    }, 500);
}

greetChange();
setInterval(greetChange, 5000);
