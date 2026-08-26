function curtir(botao) {
    const contador = botao.querySelector('span');
    let valorAtual = parseInt(contador.innerText);
    contador.innerText = valorAtual + 1;
    
    botao.style.transform = 'scale(1.2)';
    setTimeout(() => {
        botao.style.transform = 'scale(1)';
    }, 150);
}

function alternarTema() {
    const body = document.body;
    const botaoTema = document.getElementById('theme-toggle');

    body.classList.toggle('light-mode');

    if (body.classList.contains('light-mode')) {
        botaoTema.innerText = '☀️ Modo Claro';
    } else {
        botaoTema.innerText = '🌙 Modo Escuro';
    }
}
