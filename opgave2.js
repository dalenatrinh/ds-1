/*  Ide:
*   1. En funktion der aktiver krypteringsproces
*
*   2. Brug af random nummer med Math.random som nøgle.
*
*   3. Random nummeret skal plusse bogstav index op.
*
*   4. Der hvor index er, skal value spyttes ud gemmes.
*
*   5. En loop til at gøredet på repeat af antal bogstaver / tekst
* */

let input = document.getElementById("input");
let btn = document.getElementById("cryptBtn");

let alfabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

btn.addEventListener("click", function() {
    let inputValue = input.value;
    console.log(inputValue);

    let key = Math.floor(Math.random()*100);
    console.log(key);



});