import validator from './validator.js';

console.log(validator);

document.getElementById('boton').addEventListener('click', function () {
  const cc = document.getElementById('cc').value;
  const validacion = document.getElementById('validacion');
  const mensaje = document.getElementById('mensaje');
  const input = document.getElementById('cc');
  console.log(validator.maskify(cc));
  if (cc.length !== 16) {
    validacion.innerHTML = "Por favor coloque 16 caracteres";
    mensaje.className = 'informacion  '
    return
  }
  if (validator.isValid(cc)) {
    validacion.innerHTML = "Tarjeta valida";
    mensaje.className = 'correcto';
    input.value = validator.maskify(cc);
  } else {
    validacion.innerHTML = "Tarjeta invalida";
    mensaje.className = 'incorrecto';
  }
});

