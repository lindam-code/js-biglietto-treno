// Chiedi all'utente quanti chilometri deve percorrere con il treno e quanti anni ha per applicare sconti eventuali.
var km = parseInt(prompt('Scrivi in numero quanti km devi percorrere con il treno.'));
var eta = parseInt(prompt('Scrivi quanti anni hai, in numero.'))

// Tariffa a chilometro.
var tariffa = 0.21;

//Calcolo del prezzo totale e sconti.
var prezzoTotale = tariffa * km;
var scontoMinorenni = prezzoTotale * 0.2;
var scontoOver65 = prezzoTotale * 0.4;

// Calcolo prezzi scontati
var prezzoScontatoMinorenni = prezzoTotale - scontoMinorenni;
var prezzoScontatoOver65 = prezzoTotale - scontoOver65;

// Validazione e output
if (!isNaN(prezzoTotale)) {
  document.getElementById('prezzo_biglietto').innerHTML = 'Il prezzo del biglietto è di ' + prezzoTotale + ' €.'

  if (!isNaN(eta)) {
    if (eta < 18 && eta > 12) {
      document.getElementById('prezzo_scontato').innerHTML = 'Il prezzo del biglietto scontato è ' + prezzoScontatoMinorenni + ' €.';
    } else if (eta <= 12) {
      document.getElementById('prezzo_scontato').innerHTML = 'I bambini fino a 12 anni compresi non pagano il biglietto!';
    } else if (eta > 65) {
      document.getElementById('prezzo_scontato').innerHTML = 'Il prezzo del biglietto scontato è ' + prezzoScontatoOver65 + ' €.';
    } else {
      document.getElementById('prezzo_scontato').innerHTML = 'Non ci sono sconti a te dedicati.';
    }
  } else {
    alert("Non posso calcolare gli sconti perchè l'età che mi hai dato non è un numero valido!!")
  }

} else {
  alert('Non posso calcolare il prezzo totale perchè non mi hai dato il numero dei kilometri!!')
}
