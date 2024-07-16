const menu = document.querySelector('.cabecalho__menu')
const conteudo = document.querySelector('.conteudo')
const botaoMenu = document.querySelector('.icone__menu')


botaoMenu.addEventListener('click', ()=> {
    menu.classList.toggle('active')
    botaoMenu.classList.toggle('active')
})


conteudo.addEventListener('click', ()=> {
    menu.classList.remove('active');
    botaoMenu.classList.remove('active')
})