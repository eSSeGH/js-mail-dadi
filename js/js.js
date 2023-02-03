 // ESERCIZIO MAIL
 // Creaun array con una lista di email (stringhe)

let emailList = ["fliffo@i3porcellini.fairy", "fleffo@i3porcellini.fairy", "flaffo@i3porcellini.fairy", ]

// Chiedi all’utente la sua email (con il prompt), controlla che sia nella lista di email,

const userEmail = prompt("Per favore inserisci la tua email")

// devo creare un ciclo che controlli, uno per uno, l'identicità della 
// mail con gli oggetti dell'array

let identities = 0

for (i = 0; i < emailList.length; i++) {

    if (emailList[i] === userEmail) {
     
        identities++
    } else { }
}

// stampa un messaggio appropriato sull’esito del controllo.

if (identities === 1) {

    alert("complimenti, è lei il vincitore di un Iphone 26")
} else {

    alert("Ci dispiace, hai perso! Riprova con un altra mail!")
}

// // ESERCIZIO DADI
// // Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// // Stabilire il vincitore, in base a chi fa il punteggio più alto.

let userDice = Math.floor(Math.random() * 6) + 1
console.log("Il giocatore ha tirato:", userDice)

let cpuDice = Math.floor(Math.random() * 6) + 1
console.log("Il computer ha tirato:", cpuDice)

if (userDice>cpuDice) {

    alert("Hai VINTO! GG")
} else if (userDice === cpuDice) {

    alert("PAREGGIO :|")
} else {

    alert("Hai PERSO! :'(")
}

// CARTA SASSO FORBICE

const signs = ["carta", "sasso", "forbice"]


let userValue = Math.floor(Math.random() * 3) + 1

let cpuValue = Math.floor(Math.random() * 3) + 1


let userSign = ""

if (userValue === 1) {

    userSign = signs[0]
} else if (userValue === 2) {

    userSign = signs[1]
} else if (userValue === 3) {

    userSign = signs[2]
}

console.log("Il giocatore ha giocato:", userSign)


let cpuSign = ""

if (cpuValue === 1) {

    cpuSign = signs[0]
} else if (cpuValue === 2) {

    cpuSign = signs[1]
} else if (cpuValue === 3) {

    cpuSign = signs[2]
}

console.log("Il computer ha giocato:", cpuSign)


if (userSign === signs[0] && cpuSign === signs[1]) {

    console.log("HAI VINTO! GG :)")
} else if (userSign === signs[1] && cpuSign === signs[2]) {

    console.log("HAI VINTO! GG :)")
} else if (userSign === signs[2] && cpuSign === signs[0]) {

    console.log("HAI VINTO! GG :)")
} else if (userSign === signs[1] && cpuSign === signs[0]) {

    console.log("HAI PERSO! :'(")
} else if (userSign === signs[2] && cpuSign === signs[1]) {

    console.log("HAI PERSO! :'(")
} else if (userSign === signs[0] && cpuSign === signs[2]) {

    console.log("HAI PERSO! :'(")
} else {

    console.log("PAREGGIO")
}








