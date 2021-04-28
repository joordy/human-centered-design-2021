// // let weekOne = document.querySelector('#weekOne');
// // let weekTwo = document.querySelector('#weekTwo');
// // let weekThree = document.querySelector('#weekThree');
// // let weekFour = document.querySelector('#weekFour');
// // let weekFive = document.querySelector('#weekFive');

// // weekOne.addEventListener('click', (e) => {
// //   const conversation = [
// //     'Hi Roger! Dit is je trainingschema voor week 1.',
// //     'Training 1. 70 minuten duurloop',
// //     'Training 2. 75 minuten snelle duurloop',
// //     'Training 3. 21 kilometer rustige duurloop',
// //   ];
// //   playSchedule(conversation);
// // });

// // weekTwo.addEventListener('click', (e) => {
// //   const conversation = [
// //     'Hi Roger! Dit is je trainingschema voor week 2.',
// //     'Training 1. 95 minuten duurloop',
// //     'Training 2. 90 minuten snelle duurloop',
// //     'Training 3. 30 kilometer rustige duurloop, of maximaal 3 uur.',
// //   ];
// //   playSchedule(conversation);
// // });

// // weekFive.addEventListener('click', (e) => {
// //   const conversation = ['Hi Roger! Deze week mag je lekker rustig aan doen, geniet van je rust!.'];
// //   playSchedule(conversation);
// // });

// // function playSchedule(conversation) {
// //   conversation.forEach((convo) => {
// //     const utterance = new SpeechSynthesisUtterance(convo);
// //     utterance.rate = 0.8;
// //     utterance.lang = 'nl-NL';
// //     speechSynthesis.speak(utterance);
// //   });
// // }
// const getDaysInMonth = (month, year) => {
//   return new Date(year, month, 0).getDate();
// };

// const date = new Date();
// const month = date.getMonth() + 1;
// const currentMonth = getDaysInMonth(month, date.getYear());
// const upcomingMonth = getDaysInMonth(month + 1, date.getYear());
// console.log('days in this month:', currentMonth);
// console.log('days in upcoming month:', upcomingMonth);

// // const thisMonth = document.getElementById('thisMonth');
// // const nextMonth = document.getElementById('nextMonth');

// // const monthArray = Array.from(currentMonth);
// // console.log(monthArray);
// // // monthArray.forEach((day) => {
// // //   const dayButton = document.createElement('button');

// // //   day.appendChild(dayButton);
// // //   console.log(day);
// // // });
// // // let dayButtons = document.querySelectorAll('#day');

// // // const date = new Date();
// // // console.log(date);
// // // console.log(new Date().toLocaleString('nl-NL', { weekday: 'long' }));

// // function playSchedule(conversation) {
// //   conversation.forEach((convo) => {
// //     const utterance = new SpeechSynthesisUtterance(convo);
// //     utterance.rate = 0.8;
// //     utterance.lang = 'nl-NL';
// //     speechSynthesis.speak(utterance);
// //   });
// // }

// let nav = 0;
// let clicked = 0;
// let trainingEvents = localStorage.getItem('trainings') ? JSON.parse.parse(localStorage.getItem('trainings')) : [];

// const calendar = document.getElementById('calendar');
// const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

// const load = () => {
//   const dt = new Date();

//   if (nav !== 0) {
//     dt.setMonth(new Date().getMonth() + nav);
//   }

//   const day = dt.getDate();
//   const month = dt.getMonth();
//   const year = dt.getFullYear();

//   const firstDayOfMonth = new Date(year, month, 1);
//   const daysInMonth = new Date(year, month + 1, 0).getDate();

//   const dateString = firstDayOfMonth.toLocaleDateString('en-us', {
//     weekday: 'long',
//     year: 'numeric',
//     month: 'numeric',
//     day: 'numeric',
//   });
//   const paddingDays = weekdays.indexOf(dateString.split(', ')[0]);

//   document.getElementById('monthDisplay').innerText = `${dt.toLocaleDateString('en-us', { month: 'long' })} ${year}`;

//   calendar.innerHTML = '';

//   for (let index = 1; index <= paddingDays + daysInMonth; index++) {
//     const dayElem = document.createElement('button');
//     dayElem.classList.add('day');

//     if (index > paddingDays) {
//       const dayText = document.createTextNode(index - paddingDays);
//       dayElem.appendChild(dayText);

//       dayElem.addEventListener('click', () => {
//         console.log(dayElem.innerHTML);
//       });
//       console.log(dayElem);
//     } else {
//       dayElem.classList.add('otherMonthDay');
//       dayElem.setAttribute('disabled', '');
//     }

//     calendar.appendChild(dayElem);
//   }
// };

// const init = async () => {
//   load();
// };
// const dayBtns = document.querySelectorAll('#day');
// init();

// console.log(dayBtns);
