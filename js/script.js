// DICHIARAZIONE VARIABILI
let nome;
let cognome;
let colore_preferito;
let password_number;
let password;

// INPUT NOME UTENTE
nome = prompt('Qual è il tuo nome?');
console.log(nome);

// INPUT COGNOME UTENTE
cognome = prompt('Qual è il tuo cognome?');
console.log(cognome);

// INPUT COLORE PREFERITO UTENTE
colore_preferito = prompt('Qual è il tuo colore preferito?');
console.log(colore_preferito);

// PASSWORD NUMBER
password_number = 21;
console.log(password_number);

// PASSWORD GENERATOR
password = nome + cognome + colore_preferito + password_number;
console.log(password);

// PASSWORD OUTPUT ALERT PER L'UTENTE
alert(`Ottimo! Abbiamo generato una password per te: ${password}`);

// PASSWORD OUTPUT PER L'UTENTE NELL'HTML
document.getElementById('password').innerHTML = `Ottimo! Abbiamo generato una password per te: ${password}`;



