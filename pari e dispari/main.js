// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

//utente sceglie pari o dispari e un numero da 1 a 5
const btnEven = document.querySelector('.btn-even')
btnEven.addEventListener('click', function(){
    const number1 = parseInt( prompt('Inserisci un numero da 1 a 5') );
    while(number1 < 1 || number1 > 5){
        alert('il numero inserito non è valido');
        const number1 = parseInt( prompt('Inserisci un numero da 1 a 5') );
        if(number1 >= 1 || number1 <= 5){
        }
    }
    //generiamo un numero random per il computer
    const randNum = getRandomNumber(1, 5)
    
    function getRandomNumber(min, max){
        const rand = Math.floor( Math.random()* (max - min + 1)) + min;
        return rand;
    }
    //somma del numero utente e del numero random
    const som = number1 + randNum;
    //riconosciamo se il numero è pari o dispari
    const resNumber = numEvenOdd(som, 2)
    
    function numEvenOdd(somma, divisore){
        const res = somma % divisore === 0;
        return res;
    }
    //risultato
    if(resNumber == true){
        console.log('Hai vinto!!!');
    } else {
        console.log('Hai perso :(');
    }
    
    console.log(`Il tuo numero è ${number1}`);
    console.log(`il numero random è ${randNum}`)
    console.log(`La somma dei due numeri è ${som}`);
    console.log(resNumber);
});

const btnOdd = document.querySelector('.btn-odd')
btnOdd.addEventListener('click', function(){
    const number1 = parseInt( prompt('Inserisci un numero da 1 a 5') );
    while(number1 < 1 || number1 > 5){
        alert('il numero inserito non è valido');
        const number1 = parseInt( prompt('Inserisci un numero da 1 a 5') );
        if(number1 >= 1 || number1 <= 5){
        }
    }

    const randNum = getRandomNumber(1, 5)
    
    function getRandomNumber(min, max){
        const rand = Math.floor( Math.random()* (max - min + 1)) + min;
        return rand;
    }

    const som = number1 + randNum;
    
    const resNumber = numEvenOdd(som, 2)
    
    function numEvenOdd(somma, divisore){
        const res = somma % divisore !== 0;
        return res;
    }
    
    if(resNumber == true){
        console.log('Hai vinto!!!');
    } else {
        console.log('Hai perso :(');
    }
    console.log(`Il tuo numero è ${number1}`);
    console.log(`il numero random è ${randNum}`)
    console.log(`La somma dei due numeri è ${som}`);
    console.log(resNumber);
});