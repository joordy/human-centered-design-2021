console.log('hi');

// function init() {
//   // window.speechSynthesis.speak(new SpeechSynthesisUtterance('Hello World'));
// }

// init();

// let paragraph = document.getElementById('para');
// let output = document.getElementById('output');

// if (paragraph.matches(':scope')) {
//   console.log(paragraph.innerText);
//   output.innerText = 'Yep, the element is its own scope as expected!';
//   window.speechSynthesis.speak(new SpeechSynthesisUtterance(paragraph.innerText));
// }

const elements = document.querySelectorAll('tr');
console.log(elements);

elements.forEach((item) => {
  item.addEventListener('focus', (e) => {
    window.speechSynthesis.speak(new SpeechSynthesisUtterance(e.srcElement.innerText));
    console.log(e.srcElement.innerText);
  });
});
