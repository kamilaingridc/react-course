// udemy
// export default (userName, message) => {
//     console.log('Hello');
//     return userName + message;
// }

// CodeTime
// (a, b) => {
//     return a + b;
// }

// (a, b) => a + b;

let a = 5;
let b = 10;


// vários argumentos
let c = (num, num2 ) => num + num2;

console.log(c(a,b));

let d = (x, y) => {
    let op;
     
    if(x >= 5){
        op = x * y;
    } else {
        op = x / y;
    }

    return op;
}

console.log(d(a, b));

// um argumento
let frase = "A Ingrid é uma ótima dev.";

let fraseArray = (frase) => frase.split(' ');

console.log(fraseArray(frase));

// sem arg 
let semArg = () => console.log("Não tenho argumentos.");
semArg();

// casos de uso 
let roupas = [
    {produto: 'camisa', preco: 25, cor:'amarelo'},
    {produto: 'calça', preco: 80, cor:'azul'},
    {produto: 'jaqueta', preco: 100, cor:'preto'},
    {produto: 'camiseta', preco: 15, cor:'rosa'},
    {produto: 'shorts', preco: 20, cor:'azul'}
];

let precoMaiorQue50 = roupas.filter((roupa) => {
    return roupa.preco >= 50;
});

console.log(precoMaiorQue50);

// setTimeout(() =>{
//     console.log("Deu tempo!");
// }, 150);


// NÃO usar arrow 
let pessoa = {
    nome: "Ingrid",
    sayName() {
        console.log(this.nome);
        console.log(this);
    }
}

pessoa.sayName();


let btn = document.getElementById('btn');
console.log(btn);

btn.addEventListener('click', function() {
    this.classList.toggle('classe');
});