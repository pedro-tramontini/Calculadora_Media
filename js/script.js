let nota1 = document.querySelector('#nota1');
let nota2 = document.querySelector('#nota2');

let btnCalcular = document.querySelector('#btn-calcular');
let form = document.querySelector('form');
let cxMedia = document.querySelector('#media') 

console.log(nota1);
console.log(nota2);
console.log(btnCalcular);
console.log(cxMedia);

btnCalcular.addEventListener('click', (e) => {
    let valorNota1 = parseFloat(nota1.value);
    let valorNota2 = parseFloat(nota2.value);
    let media = (valorNota1 + valorNota2)/2;

    console.log(valorNota1);
    console.log(valorNota2);
    console.log(media);

    e.preventDefault(e);
})