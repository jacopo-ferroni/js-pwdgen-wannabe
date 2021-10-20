// Chidi all'utente il suo nome
const nome = prompt('Dammi gentilmente il tuo nome')
console.log(nome)

// Chiedi all'utente il suo cognome
const cognome = prompt('Anche il tuo cognome')
console.log(cognome)

// Chiedi all'utente il suo colore preferito
const colore_preferito = prompt('come ultimo step, dammi anche il tuo colore preferito, in questo modo genereremo una password con i dati appena ricevuti.')
console.log(colore_preferito)

// Stampa la password generata con nomecognomecolorepreferito21
document.getElementById('password').innerHTML=(nome + cognome + colore_preferito + '21')