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
} else {
  alert('Errore: Non è un numero!!')
}

// Chiedi all'utente la sua età per applicare eventuali sconti
var eta = parseInt(prompt('Scrivi quanti anni hai, in numero.'))
console.log(eta);

// Applicazione sconti in base all'età
if (!isNaN(eta)) {
  if (eta < 18) {
    document.getElementById('prezzo_scontato').innerHTML = 'Prezzo per minorenni.';
  } else if (eta > 65) {
    document.getElementById('prezzo_scontato').innerHTML = 'Prezzo over 65.';
  } else {
    document.getElementById('prezzo_scontato').innerHTML = 'Non ci sono sconti a te dedicati.';
  }
} else {
  alert('Errore: Non è un numero!!')
}
