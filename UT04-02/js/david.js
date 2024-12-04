function myFunction(password) {
    if (password.type === "password") {
      password.type = "text";
    } else {
      password.type = "password";
    }
  } 

 function habilitarInput(dniNieSelect,dniTextInput) {

    if (dniNieSelect.value === 'DNI') {
        // Habilitamos el input y establecemos el placeholder para el DNI
        dniTextInput.disabled = false;
        dniTextInput.placeholder = "12345678A"; // Formato de DNI
    } else if (dniNieSelect.value === 'NIE') {
        // Habilitamos el input y establecemos el placeholder para el NIE
        dniTextInput.disabled = false;
        dniTextInput.placeholder = "X1234567T"; // Formato de NIE
    } else {
        // Si no se ha seleccionado DNI ni NIE, deshabilitamos el input
        dniTextInput.disabled = true;
        dniTextInput.placeholder = "DNI/NIE"; // Placeholder predeterminado
    }
}

// Validar DNI

function validarDniNie(dniNieSelect) {
  
  
  // Expresión regular para validar NIE (una letra seguida de 7 dígitos y una letra final)
  const regexNie = /^[XYZ]\d{7}[A-Za-z]$/;
  const regexDni = /^\d{8}[A-Za-z]$/;
  
  // Comprobamos si el valor coincide con alguna de las expresiones regulares
  
  if (regexDni.test(dniNieSelect.value)) {
    dniNieSelect.style.background.color= "green";
    dniNieSelect.style.color= "green";
  } 
  else if (regexNie.test(dniNieSelect.value)) {
    dniNieSelect.style.background.color= "blue";
    dniNieSelect.style.color= "blue";
  }
  else{
      dniNieSelect.style.background.color= "red";
      dniNieSelect.style.color= "red";
  }
}

// Contador de palabras
function validarLongitud(input) {
  if (input.value.length > 5) {
      input.value = input.value.slice(0, 5); // Limita a 5 caracteres
  }
}
function validarLongitudTelefono(input) {
          if (input.value.length > 9) {
              input.value = input.value.slice(0, 9); // Limita a 5 caracteres
          }
      }


export {myFunction, habilitarInput,validarDniNie,validarLongitud,validarLongitudTelefono}