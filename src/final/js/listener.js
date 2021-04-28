// const intro =
const explenationButton = document.getElementById('explenationButton')
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
    'Hi rosjee! Deze website is je trainingsschema, samengesteld door Jordy.',
    'De eerste knop die hierna volgt, legt de navigatie uit door de site.',
    'Het is de eerste knop van de website, die je altijd opnieuw kan beluisteren.',
    'Je hoeft je geen zorgen te maken over verouderde trainingen.',
    'We beginnen automatisch bij de eerst-volgende training die op het programma staat.',
    'Heel veel succes in de maand mei tijdens je trainingen.',
  ]

  setTimeout(() => {
    playSchedule(conversation)
  }, 1500)
})

explenationButton.addEventListener('click', () => {
  const conversation = [
    'Hier volgt de navigatie van deze website.',
    'Je kan met behulp van de TAB toets, navigeren door de trainingen.',
    'Als je op ENTER drukt, speelt de tekst van de training af.',
    'Als je op de Q toets drukt, pauzeer je de tekst.',
    'Je kan vervolgens op de P toets drukken om verder te luisteren',
    'Je kan op 1 van de cijfers drukken, om de knoppen van kleur te veranderen.',
  ]
  playSchedule(conversation)
})

wk_1_trOne.addEventListener('click', () => {
  console.log('training 1')
  const conversation = [
    'Datum: Zaterdag 1 mei',
    'Het is je eerste training van de maand, dus gaan we rustig van start.',
    'Loop 60 minuten hard op een rustig tempo.',
  ]
  playSchedule(conversation)
})

wk_2_trOne.addEventListener('click', () => {
  const conversation = [
    'Datum: Dinsdag 4 mei:',
    'Ook vandaag doen we het rustig aan. De training luidt als volgt:',
    'Rustige duurloop van 1 uur.',
  ]
  playSchedule(conversation)
})

wk_2_trTwo.addEventListener('click', () => {
  const conversation = [
    'Datum: Donderdag 6 mei',
    'In de training van vandaag schroeven we het tempo iets op.',
    'Loop 50 minuten hard op een flink tempo.',
  ]
  playSchedule(conversation)
})

wk_2_trThree.addEventListener('click', () => {
  const conversation = [
    'Datum: Zaterdag 8 mei',
    'Om de week goed af te sluiten, doen we vandaag het rustig aan.',
    'Loop 70 minuten hard op een rustig tempo.',
  ]
  playSchedule(conversation)
})

wk_3_trOne.addEventListener('click', () => {
  const conversation = [
    'Datum: Dinsdag 11 mei',
    'De training van vandaag is weer een rustige. De training luidt als volgt:',
    'Rustige duurloop van 40 minuten.',
  ]
  playSchedule(conversation)
})

wk_3_trTwo.addEventListener('click', () => {
  const conversation = [
    'Datum: Donderdag 13 mei',
    'Vandaag is de training iets intensiever dan de vorige training.',
    'Loop 50 minuten hard op een hoog tempo.',
  ]
  playSchedule(conversation)
})

wk_3_trThree.addEventListener('click', () => {
  const conversation = [
    'Datum: Zaterdag 15 mei',
    'Om de week goed af te sluiten, doen we vandaag het rustig aan.',
    'Loop 70 minuten hard op een rustig tempo.',
  ]
  playSchedule(conversation)
})

wk_4_trOne.addEventListener('click', () => {
  const conversation = [
    'Datum: Dinsdag 18 mei',
    'De training van vandaag is weer een rustige. De training luidt als volgt:',
    'Rustige duurloop van 70 minuten.',
  ]
  playSchedule(conversation)
})

wk_4_trTwo.addEventListener('click', () => {
  const conversation = [
    'Datum: Donderdag 20 mei',
    'Vandaag is de training iets intensiever dan de vorige training.',
    'Loop 50 minuten hard op een hoog tempo.',
  ]
  playSchedule(conversation)
})

wk_4_trThree.addEventListener('click', () => {
  const conversation = [
    'Datum: Zaterdag 22 mei',
    'Om de week goed af te sluiten, doen we vandaag het rustig aan.',
    'Loop 70 minuten hard op een rustig tempo.',
  ]
  playSchedule(conversation)
})

wk_5_trOne.addEventListener('click', () => {
  const conversation = [
    'Datum: Dinsdag 25 mei',
    'De training van vandaag is weer een rustige. De training luidt als volgt:',
    'Rustige duurloop van 75 minuten.',
  ]
  playSchedule(conversation)
})

wk_5_trTwo.addEventListener('click', () => {
  const conversation = [
    'Datum: Donderdag 27 mei',
    'Vandaag is de training iets intensiever dan de vorige training.',
    'Loop 50 minuten hard op een hoog tempo.',
  ]
  playSchedule(conversation)
})

wk_5_trThree.addEventListener('click', () => {
  const conversation = [
    'Datum: Zaterdag 29 mei',
    'Om de week goed af te sluiten, doen we vandaag het rustig aan.',
    'Loop 70 minuten hard op een rustig tempo.',
  ]
  playSchedule(conversation)
})

// Friendly reminder
lastDay.addEventListener('click', () => {
  const conversation = [
    'Datum: Maandag 31 mei',
    'Dit was de maand mei, geniet lekker van een biertje en op naar juni!',
  ]
  playSchedule(conversation)
})

explenationButton.addEventListener('focus', () => {
  const conversation = [
    'Uitleg knop!',
  ]
  playSchedule(conversation)

})

function playSchedule(conversation) {
  conversation.forEach((convo) => {
    const synth = window.speechSynthesis
    console.log('arrived', convo)
    const utterance = new SpeechSynthesisUtterance(convo)
    utterance.rate = 0.8
    utterance.lang = 'nl-NL'

    console.log(synth)
    synth.speak(utterance)
    // if (synth.paused) {
    //   synth.speak(utterance)
    // } else {
    //   synth.speak(utterance)
    // }
    
  })
}

document.addEventListener('keydown', (event) => {
  const synth = window.speechSynthesis

  console.log(event.keyCode)
  if (event.keyCode == 81 || event.key == 'q' || event.keyCode == 65 || event.keyCode == 'a' || event.keyCode == 90 || event.keyCode == 'a' || event.keyCode == 9 || event.keyCode == 20 || event.keyCode == 16) {
    if (synth.speaking && !synth.paused) {
      console.log('pause')
      synth.pause()
    }
  } else if (event.keyCode == 80 || event.key == 'p' || event.keyCode == 'l' || event.keyCode == 219 || event.keyCode == 59 || event.keyCode == 76|| event.keyCode == 188 || event.keyCode == 190 ) {
    if (synth.paused && !synth.speaking || synth.pending) {
      console.log('play')
      synth.resume()
    }
  } else if (event.keyCode == 13 || event.key == 'Enter') {
    if (synth.pending) {
      synth.cancel()
    }
  }
})

document.addEventListener('keydown', (event) => {
  const buttons1 = document.querySelectorAll('button')

  if (event.keyCode == 49) {
    buttons1.forEach(btn => {
      btn.style.backgroundColor = '#00ffa3'
      btn.style.color = 'black'
      btn.addEventListener("focus", (event) => {
        event.target.style.backgroundColor = 'yellow'
        event.target.style.color = 'black'
      });
      btn.addEventListener("blur", (event) => {
        event.target.style.backgroundColor = '#00ffa3'
      });
    })
  } else if (event.keyCode == 50) {
    buttons1.forEach(btn => {
      btn.style.backgroundColor = '#0038ff'
      btn.style.color = 'white'
      btn.addEventListener("focus", (event) => {
        event.target.style.backgroundColor = 'yellow'
        event.target.style.color = 'black'
      });
      btn.addEventListener("blur", (event) => {
        event.target.style.backgroundColor = '#0038ff'
        btn.style.color = 'white'
      });
    })  
  } else if (event.keyCode == 51) {
    buttons1.forEach(btn => {
      btn.style.backgroundColor = '#00c2ff'
      btn.style.color = 'black'
      btn.addEventListener("focus", (event) => {
        event.target.style.backgroundColor = 'yellow'
        event.target.style.color = 'black'
      });
      btn.addEventListener("blur", (event) => {
        event.target.style.backgroundColor = '#00c2ff'
        event.target.style.color = 'black'
      });
    })  
  } else if (event.keyCode == 52) {
    buttons1.forEach(btn => {
      btn.style.backgroundColor = '#ff0000'
      btn.style.color = 'white'
      btn.addEventListener("focus", (event) => {
        event.target.style.backgroundColor = 'yellow'
        event.target.style.color = 'black'
      });
      btn.addEventListener("blur", (event) => {
        event.target.style.backgroundColor = '#ff0000'
        btn.style.color = 'white'
      });
    })  
  } else if (event.keyCode == 53) {
    buttons1.forEach(btn => {
      btn.style.backgroundColor = '#00ffa3'
      btn.style.color = 'black'
      btn.addEventListener("focus", (event) => {
        event.target.style.backgroundColor = 'yellow'
      });
      btn.addEventListener("blur", (event) => {
        event.target.style.backgroundColor = '#00ffa3'
        btn.style.color = 'black'
      });
    })
  } else if (event.keyCode == 54) {
    buttons1.forEach(btn => {
      btn.style.backgroundColor = '#0038ff'
      btn.style.color = 'white'
      btn.addEventListener("focus", (event) => {
        event.target.style.backgroundColor = 'yellow'
        event.target.style.color = 'black'
      });
      btn.addEventListener("blur", (event) => {
        event.target.style.backgroundColor = '#0038ff'
        btn.style.color = 'white'
      });
    })  
  } else if (event.keyCode == 55) {
    buttons1.forEach(btn => {
      btn.style.backgroundColor = '#00c2ff'
      btn.style.color = 'black'
      btn.addEventListener("focus", (event) => {
        event.target.style.backgroundColor = 'yellow'
        event.target.style.color = 'black'
      });
      btn.addEventListener("blur", (event) => {
        event.target.style.backgroundColor = '#00c2ff'
        event.target.style.color = 'black'
      });
    })  
  } else if (event.keyCode == 56) {
    buttons1.forEach(btn => {
      btn.style.backgroundColor = '#ff0000'
      btn.style.color = 'white'
      btn.addEventListener("focus", (event) => {
        event.target.style.backgroundColor = 'yellow'
        event.target.style.color = 'black'
      });
      btn.addEventListener("blur", (event) => {
        event.target.style.backgroundColor = '#ff0000'
        btn.style.color = 'white'
        });
    })  
  } else if (event.keyCode == 57) {
    buttons1.forEach(btn => {
      btn.style.backgroundColor = '#00ffa3'
      btn.style.color = 'black'
      btn.addEventListener("focus", (event) => {
        event.target.style.backgroundColor = 'yellow'
        btn.style.color = 'black'
      });
      btn.addEventListener("blur", (event) => {
        event.target.style.backgroundColor = '#00ffa3'
        btn.style.color = 'black'
      });
    })
  } else if (event.keyCode == 48) {
    buttons1.forEach(btn => {
      btn.style.backgroundColor = '#0038ff'
      btn.style.color = 'white'
      btn.addEventListener("focus", (event) => {
        event.target.style.backgroundColor = 'yellow'
        event.target.style.color = 'black'
      });
      btn.addEventListener("blur", (event) => {
        event.target.style.backgroundColor = '#0038ff'
        btn.style.color = 'white'
      });
    })  
  }
});