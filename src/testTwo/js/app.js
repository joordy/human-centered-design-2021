let weekOne = document.querySelector('#weekOne');
let weekTwo = document.querySelector('#weekTwo');

weekOne.addEventListener('click', (e) => {
  const conversation = [
    'Hi Roger! This is your schedule for week 1.',
    'Training 1. 70 minutes endurance run',
    'Training 2. 75 minutes fast endurance run',
    'Training 3. 21 KM slow endurance run',
  ];
  playSchedule(conversation);
});

weekTwo.addEventListener('click', (e) => {
  const conversation = [
    'Hi Roger! This is your schedule for week 2.',
    'Training 1. 95 minutes endurance run',
    'Training 2. 90 minutes fast endurance run',
    'Training 3. 30KM slow endurance run, or maximal 3 hours.',
  ];
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
