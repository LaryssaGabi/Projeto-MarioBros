/*
Objetivo1: quando o usuario aperta no botão veja o trailer, devemos abrir a modal com o video do trailer
Objetivo2: quando o usuário clicar no X devemos fechar a modal

Objetivo1: quando o usuario aperta no botão veja o trailer, devemos abrir a modal com o video do trailer
    -PASSO 1- dar um jeito de pegar o elemento que representa o botão na tela usando o js
    -PASSO 2- dar um jeito de identificar quando o usuario clicar no botão
    -PASSO 3- dar um jeito de pegar o elemento da modal no js 
    -PASSO 4- abrir a modal na tela 
Objetivo2: quando o usuário clicar no X devemos fechar a modal
    -PASSO 1- dar um jeito de pegar o elemento de fechar modal usando js 
    -PASSO 2- dar um jeito de identificar quando o usuario clicar no X
    -PASSO 3- fechar a modal
*/
const botaoTrailer = document.querySelector(".botao-trailer");
const botaoFecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;

function alternarModal(){
    modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", ()=>{
    alternarModal();
    video.setAttribute("src" , linkDoVideo);
});



botaoFecharModal.addEventListener("click", ()=>{
    alternarModal();
    video.setAttribute("src", "");
});



