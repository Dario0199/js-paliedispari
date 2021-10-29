// Palindroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

const wordUser = prompt('Inserisci una parola');

const wordReverse = reverseChars(wordUser);

function reverseChars(word){
    let reverse = '';
    console.log(word);
    for(let i = word.length - 1; i >= 0; i--){
        reverse += word[i]
    }

    return reverse;
}

if(wordUser === wordReverse){
    console.log('La parola inserita è palindroma');
} else {
    console.log('La parola inserita non è palindroma');
}