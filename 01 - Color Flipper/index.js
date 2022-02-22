const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.querySelector('#btn');
const color = document.querySelector('.color');


btn.addEventListener('click', function() {
    const escolhaAleatoria =sorteio();
    document.body.style.backgroundColor = colors[escolhaAleatoria];
    color.textContent = colors[escolhaAleatoria];
    color.style.color = colors[escolhaAleatoria];
})

function sorteio(){
    return Math.floor(Math.random() * colors.length)
}