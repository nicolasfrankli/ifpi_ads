document.addEventListener('DOMContentLoaded', function() {
    var adicionar = document.getElementById('adicionar');
    adicionar.addEventListener('click', adicionarTexto);
});

function adicionarTexto() {
    var texto = document.getElementById('texto').value.trim();
    var select = document.getElementById('select');

    // Verifica se o texto não está vazio e se já não foi adicionado
    if (texto !== "" && !select.querySelector("option[value='" + texto + "']")) {
        // Cria um elemento option e adiciona no select
        var option = document.createElement('option');
        option.value = texto;
        option.text = texto;
        select.appendChild(option);

        // Limpa o campo de texto
        document.getElementById('texto').value = "";
    }
}