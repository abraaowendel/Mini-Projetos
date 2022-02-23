
const numero = document.querySelector('span')
const botoes = document.querySelectorAll('.btn')
let contador = 0;

botoes.forEach(function (btn) {
    btn.addEventListener("click", function(e){
        botaoClicado = e.currentTarget.classList;

        if(botaoClicado.contains('diminuir')){
            contador--;
        }
        else if (botaoClicado.contains('aumentar')){
            contador++;
        }
        else{
            contador = 0;
        }

        if(contador > 0){
            numero.style.color = 'green';
        }
        else if(contador < 0){
            numero.style.color = 'red';
        }
        else{
            numero.style.color = 'initial';
        }
        
        numero.textContent = contador;
    });

});


