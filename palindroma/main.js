// Palindroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

const wordUser = prompt('Inserisci una parola');
console.log(wordUser)

const wordReverse = reverseChars(wordUser);
console.log(wordReverse)

function reverseChars(word){
    let reverse = '';
    
    for(let i = word.lenght - 1; i >= 0; i--){
        console.log( word[i]);
        reverse += word[i]
    }

    return reverse;
}