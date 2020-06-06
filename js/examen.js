function validar(formulario) {
  var resultado = 0;

  if ((formulario.nombre.value.length == 0) || (formulario.apellidos.value.length == 0) || (formulario.dni.value.length == 0)) {
    alert("Datos personales obligatorios");
    return false;
  }

  if (
    (formulario.t1.options.selectedIndex == 0) ||
    (formulario.t2.value.length == 0) ||
    (formulario.t3.options.selectedIndex == 0) ||

    ((!formulario.t4a.checked) && (!formulario.t4b.checked) && (!formulario.t4c.checked) && (!formulario.t4d.checked)) ||
    ((!formulario.t5a.checked) && (!formulario.t5b.checked) && (!formulario.t5c.checked) && (!formulario.t5d.checked)) ||
    ((!formulario.t6a.checked) && (!formulario.t6b.checked) && (!formulario.t6c.checked) && (!formulario.t6d.checked)) ||

    ((!formulario.t7a.checked) && (!formulario.t7b.checked) && (!formulario.t7c.checked) && (!formulario.t7d.checked)) ||
    ((!formulario.t8a.checked) && (!formulario.t8b.checked) && (!formulario.t8c.checked) && (!formulario.t8d.checked)) ||
    ((!formulario.t9a.checked) && (!formulario.t9b.checked) && (!formulario.t9c.checked)) ||

    (formulario.t10.value.length == 0)
  ) {
    alert("😤 Responde a todas las preguntas 😤");
    return false;
  }

  if (formulario.t1.options.selectedIndex == 2) {
    resultado++;
  }
  if (formulario.t2.value == "br") {
    resultado++;
	}
  if (formulario.t3.options.selectedIndex == 1) {
    resultado++;
	}
  if (formulario.t4d.checked) {
    resultado++;
  }
  if (formulario.t5a.checked) {
    resultado++;
  }
  if (formulario.t6a.checked) {
    resultado++;
  }
  if (formulario.t7c.checked) {
    resultado++;
  }
  if (formulario.t8b.checked) {
    resultado++;
  }
  if (formulario.t9a.checked) {
    resultado++;
  }
  if (formulario.t10.value.length != 0) {
    resultado++;
	}


  if (formulario.check.checked) {
    examen.boton_enviar.disabled = true;
    document.getElementById("nota").style.display = "block";
    if (resultado < 5) {
      document.body.classList.add("suspenso");
      document.body.classList.remove("aprobado");
      suspenso();
      examen.nota.value = "Tu nota es: " + resultado;
    } else {
      document.body.classList.add("aprobado");
      document.body.classList.remove("suspenso");
      aprobado();
      examen.nota.value = "Tu nota es: " + resultado;
    }
  } else {
    alert("Comprueba que quieres enviar el examen");
    return false;
  }
}

function ocultar() {
  document.getElementById("nota").style.display = "none";
  document.body.classList.remove("suspenso");
  document.body.classList.remove("aprobado");
}
