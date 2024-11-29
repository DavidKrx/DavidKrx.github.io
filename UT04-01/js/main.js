//Agregar el DOM
const form = document.getElementById('frm');
const nombreUser = document.getElementById('nombreUser');

form.addEventListener("submit",(e)=>{
  if(!nombreUser.validationMessage==""){
    e.preventDefault()
    alert(nombreUser.validationMessage)
  }
})

function myFunction() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  } 

  

 function habilitarInput() {
  const dniNieSelect = document.getElementById('dniNie').value;
  const dniTextInput = document.getElementById('dniText');
    if (dniNieSelect === 'DNI') {
        // Habilitamos el input y establecemos el placeholder para el DNI
        dniTextInput.disabled = false;
        dniTextInput.placeholder = "12345678A"; // Formato de DNI
    } else if (dniNieSelect === 'NIE') {
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
const dniNieSelectA = document.getElementById('dniNie').value;

const dniNie = document.getElementById('dniText');

dniNie.addEventListener("input", validarDniNie);

function validarDniNie() {
  
  
  // Expresión regular para validar NIE (una letra seguida de 7 dígitos y una letra final)
  const regexNie = /^[XYZ]\d{7}[A-Za-z]$/;
  const regexDni = /^\d{8}[A-Za-z]$/;
  
  // Comprobamos si el valor coincide con alguna de las expresiones regulares
  
  if (regexDni.test(dniNie.value)) {
    dniNie.style.background.color= "green";
    dniNie.style.color= "green";
  } 
  else if (regexNie.test(dniNie.value)) {
    dniNie.style.background.color= "blue";
    dniNie.style.color= "blue";
  }
  else{
      dniNie.style.background.color= "red";
      dniNie.style.color= "red";
  }
}





// Contador de palabras
const description = document.getElementById("description");
const contDesc = document.getElementById("contDesc");

description.addEventListener("input", () => {
  var conD=description.value.length;
  contDesc.textContent=`${conD}/120`;
})

const dptitle = document.getElementById("dptitle");
const conttitle = document.getElementById("conttitle");

dptitle.addEventListener("input", () => {
  var conT=dptitle.value.length;
  conttitle.textContent=`${conT}/15`;
})

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



