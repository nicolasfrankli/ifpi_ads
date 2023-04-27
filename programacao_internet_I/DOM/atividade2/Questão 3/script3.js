document.addEventListener('DOMContentLoaded', function () {
    var botaoCarregar = document.getElementById('botaoCarregar');
    botaoCarregar.addEventListener('click', carregarImagem);
});

function carregarImagem() {
    var caixaDeTexto = document.getElementById('caixaDeTexto');
    var conteudo = caixaDeTexto.value;

    if (conteudo === '') {
        document.getElementById('resultado').innerHTML = '<span style="color: red;">Nome da imagem não informado!</span>';
        return;
    }

    var img = document.createElement('img');
    img.src = conteudo;

    img.onload = function() {
        document.getElementById('resultado').appendChild(img);
    }

    img.onerror = function() {
        document.getElementById('resultado').innerHTML = '<span style="color: red;">Imagem não encontrada!</span>';
    }
}
