import './style.css';

const inputText = document.querySelector('.text-input')
const outputText = document.querySelector('.mirror')

function mirror(){
  const reversText = inputText.value.split('').reverse().join('')
  outputText.textContent = reversText
}

inputText.addEventListener('keyup',mirror)