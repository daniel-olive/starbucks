function subirTela() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function decidirBotaoScroll () {
    if (window.scrollY === 0) {
        // Ocultar o Botão
        document.querySelector('.scrollButton').style.display = 'none';
    } else {
        // Mostrar o Botão
        document.querySelector('.scrollButton').style.display = 'flex';
    }
}
window.addEventListener('scroll', decidirBotaoScroll);

function menuToggle() {
    let menuArea = document.getElementById("menu-area");

    if (menuArea.classList.contains('menuaberto') == true) {
        menuArea.classList.remove('menuaberto');
    } else {
        menuArea.classList.add('menuaberto');
    }
}    