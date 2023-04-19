var botao = document.getElementById("botao");
var botao_limpar = document.getElementById("limpar");
var botao_est_1 = document.getElementById("estilo1");
var botao_est_2 = document.getElementById("estilo2");
//var botao = document.getElementsByTagName("button")[0];
// adicione um evento de clique ao botão
botao.addEventListener("click", function() {
    var paragrafo = document.getElementById("paragrafo");
    //var paragrafo = document.getElementByTagName("paragrafo")[0];
    // altere o texto do parágrafo
    paragrafo.textContent = "O texto deste parágrafo foi alterado!";
});

botao_limpar.addEventListener("click", function() {
    var paragrafo = document.getElementById("paragrafo");
    //var paragrafo = document.getElementByTagName("paragrafo")[0];
    // altere o texto do parágrafo
    paragrafo.textContent = "";
});

botao_est_1.addEventListener("click", function() {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
});

botao_est_2.addEventListener("click", function() {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
});