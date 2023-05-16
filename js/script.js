// DICHIARAZIONE VARIABILI
let nome;
let cognome;
let colore_preferito;
let password_number;
let password;

// INPUT NOME UTENTE
nome = prompt('Qual è il tuo nome?');

// CONSOL LOG NOME UTENTE
console.log(nome);

// INPUT COGNOME UTENTE
cognome = prompt('Qual è il tuo cognome?');

// CONSOL LOG COGNOME UTENTE
console.log(cognome);

// INPUT COLORE PREFERITO UTENTE
colore_preferito = prompt('Qual è il tuo colore preferito?');

// CONSOL LOG COLORE PREFERITO UTENTE
console.log(colore_preferito);

// PASSWORD NUMBER
password_number = 21;

// CONSOL LOG PASSWORD NUMBER
console.log(password_number);

// PASSWORD GENERATOR
password = nome + cognome + colore_preferito + password_number;

// CONSOL LOG PASSWORD GENERATOR
console.log(password);

// PASSWORD OUTPUT ALERT PER L'UTENTE
alert(`Ottimo! Abbiamo generato una password per te: ${password}`);

// PASSWORD OUTPUT PER L'UTENTE NELL'HTML
document.getElementById('password').innerHTML = `Ottimo! Abbiamo generato una password per te: ${password}`;



