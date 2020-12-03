var form = document.getElementById('formulario');
var campo = document.getElementById('campo');

form.addEventListener('submit', function(e) {
    // alerta o valor do campo
    alert(' O Nome Completo é: '+ campo.value + '  '+ '|| Quantidade de caracteres: ' + campo.value.length);

    // impede o envio do form
    e.preventDefault();
});