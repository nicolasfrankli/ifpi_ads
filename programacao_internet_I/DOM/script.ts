// selecione o botão usando 
const botao2: HTMLElement | null = document.getElementById("botao");
const limpar2: HTMLElement | null = document.getElementById("limpar");
const color1: HTMLElement | null = document.getElementById("estilo1");
const color2: HTMLElement | null = document.getElementById("estilo2");

// adicione um evento de clique ao botão
if(botao2){
    botao2.addEventListener("click", function() {
    const paragrafo = document.getElementsByTagName("p")[0];
    paragrafo.textContent = "O texto deste parágrafo foi alterado!";
    });
}

if(limpar2){
    limpar2.addEventListener("click", function() {
    const paragrafo = document.getElementsByTagName("p")[0];
    paragrafo.textContent = "";
    });
}
if(color1){
    color1.addEventListener("click", function() {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    });
}
if(color2){
    color2.addEventListener("click", function() {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    });
}
