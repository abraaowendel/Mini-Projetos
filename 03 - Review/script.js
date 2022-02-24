// Selecionando Itens

const fotoPessoa = document.querySelector('.img-container img');
const nomePessoa = document.querySelector('#nome');
const trabalhoPessoa = document.querySelector('#profissao');
const sobrePessoa = document.querySelector('#sobre');

const botaoProximo = document.querySelector('.proximo-btn');
const botaoAnterior = document.querySelector('.anterior-btn');
const botaoAleatorio = document.querySelector('.aleatorio-btn');

// Item atual

let itemAtual = 0;

// inicio

document.addEventListener('DOMContentLoaded', function(){
    mostrarPessoa(itemAtual);
})

function mostrarPessoa(){
    const item = avaliacoes[itemAtual];
    fotoPessoa.src =  item.url;
    nomePessoa.textContent = item.name;
    trabalhoPessoa.textContent = item.sobrePessoa;
    sobrePessoa.textContent = item.about;
}

// Mostrar próxima pessoa

botaoProximo.addEventListener('click', function(){
    itemAtual == avaliacoes.length - 1 ? itemAtual = 0 : itemAtual++;
    mostrarPessoa();
})

// Mostrar pessoa anterior

botaoAnterior.addEventListener('click', function(){
    itemAtual == 0 ? itemAtual = avaliacoes.length - 1 : itemAtual--;
    mostrarPessoa();
})

// Mostrar Pessoa aleatória

botaoAleatorio.addEventListener('click', function(){
    itemAtual = Math.floor(Math.random() * avaliacoes.length)
    mostrarPessoa();
})