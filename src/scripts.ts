import $ from 'jquery';
import sum from './utils/sum/sum';

const btn1 = document.getElementById('btn1') as HTMLButtonElement;
const btn2 = document.getElementById('btn2') as HTMLButtonElement;
const btn3 = document.getElementById('btn3') as HTMLButtonElement;
const btn4 = document.getElementById('btn4') as HTMLButtonElement;
const btn5 = document.getElementById('btn5') as HTMLButtonElement;
const btn6 = document.getElementById('btn6') as HTMLButtonElement;
const btn7 = document.getElementById('btn7') as HTMLButtonElement;
const box1 = document.getElementById('box1') as HTMLDivElement;
const box2 = document.getElementById('box2') as HTMLDivElement;
const box3 = document.getElementById('box3') as HTMLDivElement;
const box4 = document.getElementById('box4') as HTMLDivElement;
const box5 = document.getElementById('box5') as HTMLDivElement;
const box6 = document.getElementById('box6') as HTMLDivElement;

btn1.addEventListener('click', () => {
    box1.style.backgroundColor = 'yellow';
  });
  
  btn2.addEventListener('click', () => {
    box2.textContent = 'SUCCESS';
  });
  
  btn3.addEventListener('click', () => {
    box3.style.backgroundColor = 'transparent';
  });
  
  btn4.addEventListener('click', () => {
    if (box4.style.backgroundColor === 'transparent') {
      box4.style.backgroundColor = '#1fc2ae';
    } else {
      box4.style.backgroundColor = 'transparent';
    }
  });
  
  const colors = ['pink', 'lightgreen', 'blue', 'yellow', 'grey'];
  let index = 0;
  btn5.addEventListener('click', () => {
    box5.style.backgroundColor = colors[index];
    index = (index + 1) % colors.length;
  });
  
  let count = 1;
  let intervalId: any;
  function start() {
    intervalId = setInterval(updateNumber, 500);
  }

  btn6.addEventListener('click', () => {
    start();
  });

  function updateNumber() {
    if (count > 10) {
      clearInterval(intervalId);
    } else {
        const box6 = document.getElementById("box6") as HTMLDivElement;
      box6.innerHTML = count.toString();
      count++;
    }
  }
  
  function allBoxesColor() {  
    const collection = document.getElementsByClassName("box");
    for (let i = 0; i < collection.length; i++) {
        const box = collection[i] as HTMLElement;
        box.style.backgroundColor = "#18D5E1";
    }
  }
  
  function backGroundColor() {
    document.body.style.backgroundColor = "#000000";
  }

  btn7.addEventListener('click', () => {
    allBoxesColor(), backGroundColor();
  });
  
  function displayText() {
    const input = document.getElementById("input") as HTMLInputElement;
    const copy = document.getElementById("duplicate") as HTMLDivElement;
    copy.innerHTML = input.value;
  }
  
  