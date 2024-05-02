
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
