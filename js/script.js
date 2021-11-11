
// const email = prompt("Inserisci una email ");

const email = prompt("inserisci un email");
// const filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
console.log(email)

const array = ["giorgio@gmail.com","franco@gmail.com","alice@gmail.com","rob@gmail.com"]

let sentinella=false;

for (let i=0; i < array.length;i++){
    if(array[i] == email){
        sentinella = true;
    }
}

if(sentinella){
    console.log("trovato");
}else{
    console.log("non trovato");
}


let pc = Math.floor(Math.random() * 6);
let utente = Math.floor(Math.random() * 6);

console.log("numero pc"+ pc );
console.log("numero utente"+ utente);

if(pc > utente){

    console.log("Il vincitore è il pc" );
    
    }
    else{
        console.log("Il vincitore è l utente");
        
    }




// let email = document.getElementById('txtEmail');
// let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;


// function checkEmail() {

//     if (!filter.test(email.value)) {
//     alert('Perfavore inserisci una mail valiva');
//     email.focus;
//     return false;
//     }
// }




// *** PROVA 2 (DEPRECATA)

// function myFunction() {
//     let x = document.getElementById("myEmail").pattern;
//     document.getElementById("demo").innerHTML = x;
//   }



// ***PROVA 1


// function Email() {
// let email = document.modulo.email.value;


// if ((email.indexOf("@") == (-1)) || (email == "") || (email == "undefined")) {
// alert("Inserire un indirizzo email valido.");
// document.modulo.email.focus();
// }
// else {
// console.log(email);
// }
// }
