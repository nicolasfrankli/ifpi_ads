document.addEventListener('DOMContentLoaded', function() {
    var botaoValidar = document.getElementById('botaoValidar');
    botaoValidar.addEventListener('click', validarCheckboxes);
  });
  
  function validarCheckboxes() {
    var checkboxes = document.getElementsByName('opcao');
    var peloMenosUmSelecionado = false;
    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        peloMenosUmSelecionado = true;
        break;
      }
    }
    if (peloMenosUmSelecionado) {
      document.getElementById('mensagem').innerHTML = 'Pelo menos um checkbox foi selecionado';
    } else {
      document.getElementById('mensagem').innerHTML = 'Nenhum checkbox foi selecionado';
    }
  }
  