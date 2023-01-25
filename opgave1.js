let input = document.getElementById("caesarInput");
let button = document.getElementById("caesarCipher");
let text = document.getElementById("cryptedTxt");


let alpabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let cipherbet = ["c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","a","b"].split;
button.addEventListener("click", function () {
    // skal gøre på denne måde fordi den anden måde ikke virker man!
    let inputValue = input.value;

    // Checker
    console.log(inputValue.length);
    console.log(alpabet);

    // loop for at repeat det med at finde bogstav
    for (var i = 0; i < inputValue.length; i++) {
        // Finder input bogstav og sammenlignes med index i alfabetet.
        // console.log(alpabet.indexOf(inputValue[i]));

        // kigger 3 index videre for at kryptere
        let crypted = alpabet.indexOf(inputValue[i])+3;
        console.log(crypted)
        
        // Udskriver value i stedet for værdi
        console.log(crypted);


    }

    /* Ide :
    *  1. Der laves et array, hvor alfabetet ligger i.
    *
    *  2. Med brugen af inputfelt, vil man sammenligne pr. input index værdien med array alfabetet værdien.
    *
    *  3. Når der er fundet et match, skal index +3 for at caesar kryptisere det.
    *
    *  4. Værdien på det index skal trækkes ud og gemmes.
    *
    *  5. Laves i en loop for repeat af hvert input index.
    *  */



})