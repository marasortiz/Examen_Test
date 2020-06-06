var value = 0;

var interval = setInterval(function() {
  value += 0.16;
  $("#progress-bar")
    .css("width", value + "%")
    .attr("aria-valuenow", value)
    .text(value + "%");
  if (value >= 100)
    clearInterval(interval);
}, 1000);



$(function() {
  $('[data-toggle="tooltip"]').tooltip();
});

n = new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
document.getElementById("date").innerHTML = d + "/" + m + "/" + y;



function nif(dni) {
  var numero;
  var letr;
  var letra;
  var expresion_regular_dni;

  expresion_regular_dni = /^\d{8}[a-zA-Z]$/;

  if (expresion_regular_dni.test(dni) == true) {
    numero = dni.substr(0, dni.length - 1);
    letr = dni.substr(dni.length - 1, 1);
    numero = numero % 23;
    letra = 'TRWAGMYFPDXBNJZSQVHLCKET';
    letra = letra.substring(numero, numero + 1);
    if (letra != letr.toUpperCase()) {
      alert('DNI erroneo, la letra es incorrecta');
    } else {
      alert('DNI correcto');
    }
  } else {
    alert('DNI erroneo, formato no correcto');
  }
}
