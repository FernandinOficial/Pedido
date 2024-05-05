
// Função para alterar o título
function changeTitle() {
    document.title = "Pedido Irrecusável";
}

// Função para restaurar o título original
function restoreTitle() {
    document.title = "Volte aqui ;(";
}

// Adiciona um evento para quando a janela ganhar foco
window.addEventListener('focus', changeTitle);

// Adiciona um evento para quando a janela perder foco
window.addEventListener('blur', restoreTitle);

//recarrega a página
window.addEventListener('focus', function() {
    location.reload();
});



//Seção de incorporação do código Button ser calculado para página

function mostrarResposta() {
    document.getElementById('resposta').style.display = 'block';
    document.getElementById('resposta').innerHTML = 'Sim! Eu aceito, meu amor. ❤️';
}

function mudarPosicao() {
    const buttonNao = document.getElementById('nao');
    const randomX = Math.floor(Math.random() * window.innerWidth);
    const randomY = Math.floor(Math.random() * window.innerHeight);
    buttonNao.style.left = `${randomX}px`;
    buttonNao.style.top = `${randomY}px`;
}
// Redireciona para confirmacao.html
function mostrarResposta() {
    window.location.href = "confirmacao.html";
}