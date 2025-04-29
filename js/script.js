let formulario = document.querySelector('form');


let btnCalcular = document.querySelector('#btn-calcular');
let btnApagar = document.querySelector('#btn-limpar');


let nota1 = document.querySelector('#nota1');   //pega o conteudo do ID nota1
let nota2 = document.querySelector('#nota2');   //pega o conteudo do ID nota2
let campoMedia = document.querySelector('#media-nota'); //pega o conteudo do ID media-nota
let situacao = document.querySelector('#situacao-id');  //pega o conteudo do ID situacao-id

let x = situacao.innerHTML;

console.log(x);

// Calcula a media entre 2 valores, retorna um float
function media(num1, num2) {
    console.log('FUNCAO MEDIA SENDO CHAMADA');
    return (num1 + num2) / 2; //Retorna um inteiro
}


// Valida o que sua média te retorna, se é aprovado, recuperacao ou reprovado e retorna uma string
function validarMedia(media) {
    console.log('VALIDAR MEDIA SENDO CHAMADA');
    let situacaoFinal = '';

    if (media >= 7) {
        situacaoFinal = 'Aprovado(a)';
    } else if (media >=4) {
        situacaoFinal = 'Recuperacao';
    } else {
        situacaoFinal = 'Reprovado(a)';
    }

    return situacaoFinal;
}

// recebe uma string e conforme a opcao, ele adiciona ou tira as classes
function verificarSituacao(situacaoFinal) {
    console.log('FUNÇÃO SITUACAO FINAL');

    switch(situacaoFinal) {
        case 'Aprovado(a)':
        situacao.classList.remove('situacao-recuperacao');
        situacao.classList.remove('situacao-reprovado');
        situacao.classList.add('situacao-aprovado');
        console.log('APROVADO');
        break;
        case 'Recuperacao':
        situacao.classList.remove('situacao-aprovado');
        situacao.classList.remove('situacao-reprovado');
        situacao.classList.add('situacao-recuperacao');
        console.log('RECUPERACAO');
        break;
        case 'Reprovado(a)':
        situacao.classList.remove('situacao-recuperacao');
        situacao.classList.remove('situacao-aprovado');
        situacao.classList.add('situacao-reprovado');
        console.log('REPROVADO');
        break;

        default:
            console.log('Situação indefinida');       
    }
}

btnCalcular.addEventListener('click', function (e) {
    e.preventDefault();
    let valorNota1 = parseFloat(nota1.value);
    let valorNota2 = parseFloat(nota2.value);

    if (valorNota1 < 0 || isNaN(valorNota1) || valorNota2 < 0 || isNaN(valorNota2)) {
        alert('ERRO');
        return ;
    }

    //funcao media
    let calculoMedia = media(valorNota1, valorNota2);    

    // passa o resultado da função media, que é um inteiro para a função mediaValidada
    mediaValidada = validarMedia(calculoMedia);

    //Aqui ele passa o retorno string
    verificarSituacao(mediaValidada);

    if(isNaN(calculoMedia) || calculoMedia < 0) {
        situacao.value = ''
        console.log(situacao);
    } else {
        campoMedia.value = parseFloat(calculoMedia); //muda o valor de campo media
        situacao.innerHTML = validarMedia(calculoMedia);
    }

})

btnApagar.addEventListener('click', () => {
    situacao.classList.remove('situacao-recuperacao');  
    situacao.classList.remove('situacao-reprovado');
    situacao.classList.remove('situacao-aprovado');
    situacao.innerHTML = '';
})