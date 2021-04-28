// const intro =
const wk_1_trOne = document.getElementById('wk_1_trOne')
const wk_2_trOne = document.getElementById('wk_2_trOne')
const wk_2_trTwo = document.getElementById('wk_2_trTwo')
const wk_2_trThree = document.getElementById('wk_2_trThree')
const wk_3_trOne = document.getElementById('wk_3_trOne')
const wk_3_trTwo = document.getElementById('wk_3_trTwo')
const wk_3_trThree = document.getElementById('wk_3_trThree')
const wk_4_trOne = document.getElementById('wk_4_trOne')
const wk_4_trTwo = document.getElementById('wk_4_trTwo')
const wk_4_trThree = document.getElementById('wk_4_trThree')
const wk_5_trOne = document.getElementById('wk_5_trOne')
const wk_5_trTwo = document.getElementById('wk_5_trTwo')
const wk_5_trThree = document.getElementById('wk_5_trThree')
const lastDay = document.getElementById('lastDay')

// Introduction to Roger.
window.addEventListener('load', function () {
  const conversation = [
    'Hi Roger! Deze website is je trainingsschema, samengesteld door Jordy.',
    'Je kan met behulp van de TAB toets, navigeren door de trainingen.',
    'Als je op ENTER drukt, speelt de tekst van de training af.',
    'Als je op de Q toets drukt, pauzeer je de tekst.',
    'Je kan vervolgens op de P toets drukken om verder te luisteren',
    'Je hoeft je geen zorgen te maken over verouderde trainingen.',
    'We beginnen automatisch bij de eerst-volgende training die op het programma staat.',
    'Heel veel succes in de maand mei tijdens je trainingen.',
  ]

  setTimeout(() => {
    playSchedule(conversation)
  }, 1500)
})

wk_1_trOne.addEventListener('click', () => {
  console.log('training 1')
  const conversation = [
    'Training van Zaterdag 1 mei:',
    'Het is je eerste training van de maand, dus gaan we rustig van start.',
    'Loop 60 minuten hard op een rustig tempo.',
  ]
  playSchedule(conversation)
})

wk_2_trOne.addEventListener('click', () => {
  const conversation = [
    'Training van Dinsdag 4 mei:',
    'Ook vandaag doen we het rustig aan. De training luidt als volgt:',
    'Rustige duurloop van 1 uur.',
  ]
  playSchedule(conversation)
})

wk_2_trTwo.addEventListener('click', () => {
  const conversation = [
    'Training van Donderdag 6 mei:',
    'In de training van vandaag schroeven we het tempo iets op.',
    'Loop 50 minuten hard op een flink tempo.',
  ]
  playSchedule(conversation)
})

wk_2_trThree.addEventListener('click', () => {
  const conversation = [
    'Training van Zaterdag 8 mei:',
    'Om de week goed af te sluiten, doen we vandaag het rustig aan.',
    'Loop 70 minuten hard op een rustig tempo.',
  ]
  playSchedule(conversation)
})

wk_3_trOne.addEventListener('click', () => {
  const conversation = [
    'Training van Dinsdag 11 mei:',
    'De training van vandaag is weer een rustige. De training luidt als volgt:',
    'Rustige duurloop van 1 uur.',
  ]
  playSchedule(conversation)
})

wk_3_trTwo.addEventListener('click', () => {
  const conversation = [
    'Vandaag is de training iets intensiever dan de vorige training.',
    'Loop 50 minuten hard op een hoog tempo.',
  ]
  playSchedule(conversation)
})

wk_3_trThree.addEventListener('click', () => {
  const conversation = [
    'Om de week goed af te sluiten, doen we vandaag het rustig aan.',
    'Loop 70 minuten hard op een rustig tempo.',
  ]
  playSchedule(conversation)
})

wk_4_trOne.addEventListener('click', () => {
  const conversation = [
    'Training van Dinsdag 18 mei:',
    'De training van vandaag is weer een rustige. De training luidt als volgt:',
    'Rustige duurloop van 1 uur.',
  ]
  playSchedule(conversation)
})

wk_4_trTwo.addEventListener('click', () => {
  const conversation = [
    'Vandaag is de training iets intensiever dan de vorige training.',
    'Loop 50 minuten hard op een hoog tempo.',
  ]
  playSchedule(conversation)
})

wk_4_trThree.addEventListener('click', () => {
  const conversation = [
    'Om de week goed af te sluiten, doen we vandaag het rustig aan.',
    'Loop 70 minuten hard op een rustig tempo.',
  ]
  playSchedule(conversation)
})

wk_5_trOne.addEventListener('click', () => {
  const conversation = [
    'Training van Dinsdag 25 mei:',
    'De training van vandaag is weer een rustige. De training luidt als volgt:',
    'Rustige duurloop van 1 uur.',
  ]
  playSchedule(conversation)
})

wk_5_trTwo.addEventListener('click', () => {
  const conversation = [
    'Vandaag is de training iets intensiever dan de vorige training.',
    'Loop 50 minuten hard op een hoog tempo.',
  ]
  playSchedule(conversation)
})

wk_5_trThree.addEventListener('click', () => {
  const conversation = [
    'Om de week goed af te sluiten, doen we vandaag het rustig aan.',
    'Loop 70 minuten hard op een rustig tempo.',
  ]
  playSchedule(conversation)
})

// Friendly reminder
lastDay.addEventListener('click', () => {
  const conversation = [
    'Dit was de maand mei, geniet lekker van een biertje en op naar juni!',
  ]
  playSchedule(conversation)
})

function playSchedule(conversation) {
  conversation.forEach((convo) => {
    console.log('arrived', convo)
    const utterance = new SpeechSynthesisUtterance(convo)
    utterance.rate = 0.8
    utterance.lang = 'nl-NL'
    speechSynthesis.speak(utterance)
  })
}

document.addEventListener('keydown', (event) => {
  var unicode = event.which || event.keyCode
  console.log(unicode)
  // do something
  if (event.key == 'q') {
    //   // do something
    // console.log('you pressed a');
    if (speechSynthesis.speaking && !speechSynthesis.paused) {
      speechSynthesis.pause()
    }
  } else if (event.key == 'p') {
    if (speechSynthesis.paused) {
      speechSynthesis.resume()
    }
  }
})

const dt = new Date()

const day = dt.getDate()
const month = dt.getMonth()
const year = dt.getFullYear()

const firstDayOfMonth = new Date(year, month, 1)
const daysInMonth = new Date(year, month + 1, 0).getDate()

const dateString = firstDayOfMonth.toLocaleDateString('en-us', {
  weekday: 'long',
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
})

console.log(dateString)
