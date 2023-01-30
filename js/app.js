// 1. chiedere nome all'utente

let nome_utente = prompt ('Inserisci il tuo nome');
console.log('il nome è = ', nome_utente);

// 2. chiedere cognome

let cognome_utente = prompt ('Inserisci il tuo cognome');
console.log('il cognome è = ', cognome_utente);

// 3. chiedere il suo colore preferito

let colore_utente = prompt ('Inserisci il tuo colore preferito');
console.log('il colore scelto è = ', colore_utente);

// 4. chiedere un numero

let numero_utente = prompt ('Scegli un numero');
console.log('il numero scelto è = ', numero_utente);

// 5. scrivere sulla pagina il risultato della concatenazione di: <nome> <cognome> <colorePreferito> <numero>

const password_generata = document.getElementById('password_generata');
password_generata.innerHTML = nome_utente + cognome_utente + colore_utente + numero_utente ;

console.log(password_generata);
