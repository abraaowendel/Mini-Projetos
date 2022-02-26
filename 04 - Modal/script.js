
const modal = document.querySelector('.modal-overlay')
const abrirModal = document.querySelector('.modal-open')
const fecharModal = document.querySelector('.modal-close')

abrirModal.addEventListener('click', () => {
    modal.classList.toggle('open-modal')
})
fecharModal.addEventListener('click', () =>{
    modal.classList.remove('open-modal')
})