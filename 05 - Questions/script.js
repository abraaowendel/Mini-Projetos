const btns = document.querySelectorAll('.btns')

btns.forEach(function(btns){
    btns.addEventListener('click', function(e){
        const question = e.currentTarget.parentElement.parentElement
        question.classList.toggle('show-text')            
    })
})