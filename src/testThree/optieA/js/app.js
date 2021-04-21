let weekOne = document.querySelector('#weekOne');
let weekTwo = document.querySelector('#weekTwo');
let weekThree = document.querySelector('#weekThree');
let weekFour = document.querySelector('#weekFour');
let weekFive = document.querySelector('#weekFive');

weekOne.addEventListener('click', (e) => {
  const conversation = [
    'Hi Roger! Dit is je trainingschema voor week 1.',
    'Training 1. 70 minuten duurloop',
    'Training 2. 75 minuten snelle duurloop',
    'Training 3. 21 kilometer rustige duurloop',
  ];
  playSchedule(conversation);
});

weekTwo.addEventListener('click', (e) => {
  const conversation = [
    'Hi Roger! Dit is je trainingschema voor week 2.',
    'Training 1. 95 minuten duurloop',
    'Training 2. 90 minuten snelle duurloop',
    'Training 3. 30 kilometer rustige duurloop, of maximaal 3 uur.',
  ];
  playSchedule(conversation);
});

weekFive.addEventListener('click', (e) => {
  const conversation = ['Hi Roger! Deze week mag je lekker rustig aan doen, geniet van je rust!.'];
  playSchedule(conversation);
});

function playSchedule(conversation) {
  conversation.forEach((convo) => {
    const utterance = new SpeechSynthesisUtterance(convo);
    utterance.rate = 0.8;
    utterance.lang = 'nl-NL';
    speechSynthesis.speak(utterance);
  });
}
