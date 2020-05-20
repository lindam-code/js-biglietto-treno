// Chiedi all'utente quanti chilometri debve percorrere con il treno.
var km = parseInt(prompt('Scrivi in numero quanti km devi percorrere con il treno.'));

console.log(km);
// Tariffa a chilometro.
var tariffa = 0.21;

//Calcolo del prezzo totale senza eventuali sconti.
var prezzoTotale = tariffa * km;
console.log(prezzoTotale);

// Validazione e output
if (!isNaN(prezzoTotale)) {
  document.getElementById('prezzo_biglietto').innerHTML = 'Il prezzo del biglietto è di ' + prezzoTotale + ' €.'
}
