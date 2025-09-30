/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

let n1 = 10
let n2 = 30
if (n1 > n2) {
  console.log("n1 è il più grande")
} else console.log("n2 è il più grande")

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

let x = 6
if (x !== 5) {
  console.log("not equal")
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

let n3 = 10
if (n3 % 5 === 0) {
  console.log("divisibile per 5")
} else console.log("non divisibile per 5")

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

let n4 = 8
let n5 = 4

if (n4 === 8 || n5 === 8 || n4 + n5 === 8 || n4 - n5 === 8 || n5 - n4 === 8) {
  console.log("ok")
} else console.log("no")

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let totalShoppingCart = 80
if (totalShoppingCart > 50) {
  console.log("spedizione gratuita")
} else console.log("spedizione di 10")

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

let prezzoScontato = totalShoppingCart * 0.8
let spedizione = 0

if (prezzoScontato > 50) {
  spedizione = 0
} else spedizione = 10

let totale = prezzoScontato + spedizione
console.log("prezzo spedizione" + " " + spedizione)
console.log(totale)

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

let a = 10
let b = 5
let c = 15

let max, mid, min

if (a >= b && a >= c) {
  max = a
  if (b >= c) {
    mid = b
    min = c
  } else {
    mid = c
    min = b
  }
} else if (b >= a && b >= c) {
  max = b
  if (a >= c) {
    mid = a
    min = c
  } else {
    mid = c
    min = a
  }
} else {
  max = c
  if (a >= b) {
    mid = a
    min = b
  } else {
    mid = b
    min = a
  }
}

console.log("Ordine decrescente:", max, mid, min)

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

let valore = "ciao"

if (typeof valore === "number") {
  console.log("Il valore è un numero")
} else console.log("Il valore non è un numero")

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

let numero = 3

if (numero % 2 === 0) {
  console.log("il numero è pari")
} else console.log("il numero è dispari")

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/
let val = 11
if (val < 5) {
  console.log("Meno di 5")
} else if (val < 10) {
  console.log("Meno di 10")
} else {
  console.log("Uguale a 10 o maggiore")
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
}

me.city = "Toronto"

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

me.skills.pop()

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

let array = []
array.unshift(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

array[array.length - 1] = 100
