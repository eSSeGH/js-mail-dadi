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


if (identities === 1) {

    alert("complimenti, è lei il vincitore di un Iphone 26")
} else {

    alert("Ci dispiace, hai perso! Riprova con un altra mail!")
}

// stampa un messaggio appropriato sull’esito del controllo.