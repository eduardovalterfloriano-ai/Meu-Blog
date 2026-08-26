function curtir(botao) {
    const contador = botao.querySelector('span');
    let valorAtual = parseInt(contador.innerText);
    contador.innerText = valorAtual + 1;
    
    // Animação de clique no botão
    botao.style.transform = 'scale(1.2)';
    setTimeout(() => {
        botao.style.transform = 'scale(1)';
    }, 150);
}
