document.querySelector('#enviar-carta').onclick = function(e) {
  const $form = document.querySelector('#carta-a-santa');
  const nombre = $form.nombre.value;
  const ciudad = $form.ciudad.value;
  const descripcionRegalo = $form['descripcion-regalo'].value;

  const errorNombre = validarNombre(nombre);
  const errorCiudad = validarCiudad(ciudad);
  const errorDescripcionRegalo = validarDescripcionRegalo(descripcionRegalo);

  const errores = {
    nombre: errorNombre,
    ciudad: errorCiudad,
    ['descripcion-regalo']: errorDescripcionRegalo
  }

  manejarErrores(errores);

  e.preventDefault();
}

function manejarErrores(errores){
  const keys = Object.keys(errores);
  const $form = document.querySelector('#carta-a-santa');
  contador = 0;

  keys.forEach(function(key) {
    const $contenedorErrores = document.querySelector('#errores');
    const error = errores[key]

    if(error) {
      contador++;

      $form[key].className = 'error';

      const $error = document.createElement('li');
      $error.textContent = error;
      $contenedorErrores.appendChild($error)
    } else {
      $form[key].className = '';
    }
  })
}

function validarNombre(nombre) {
  if (nombre.length === 0) {
    return 'Este campo debe tener al menos 1 caracter';
  }

  if(nombre.length >= 50) {
    return 'Este campo debe tener menos de 50 caracteres';
  }

  if(!/^[a-z]+$/i.test(nombre)) {
    return 'Este campo sólo acepta letras';
  }

  return '';
}


function validarCiudad(ciudad){
  if(ciudad.length === 0) {
    return 'Debes seleccionar una ciudad';
  }

  return '';
}

function validarDescripcionRegalo(descripcionRegalo) {
  if(descripcionRegalo.length === 0) {
    return 'Este campo debe tener al menos 1 caracter'
  }

  if(descripcionRegalo.length >= 100) {
    return 'Este campo debe tener menos de 100 caracteres';
  }

  if(!/^[a-z0-9]+$/i.test(descripcionRegalo)) {
    return 'Este campo solo acepta letras y numeros';
  }

  return '';
}
