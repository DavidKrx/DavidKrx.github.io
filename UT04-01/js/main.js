//Agregar el DOM
const DOM ={ 
  form: document.getElementById('frm'),
  nombreUser: document.getElementById('nombreUser'),
  password: document.getElementById("password"),
  dniNieSelect: document.getElementById('dniNie'),
  dniTextInput: document.getElementById('dniText'),
  description: document.getElementById("description"),
  contDesc: document.getElementById("contDesc"),
  dptitle: document.getElementById("dptitle"),
  conttitle: document.getElementById("conttitle"),
}

DOM.form.addEventListener("submit",(e)=>{
  if(!DOM.nombreUser.validationMessage==""){
    e.preventDefault()
    alert(DOM.nombreUser.validationMessage)
  }
})

function myFunction() {
    if (DOM.password.type === "password") {
      DOM.password = "text";
    } else {
      DOM.password = "password";
    }
  } 

 function habilitarInput() {

    if (DOM.dniNieSelect.value === 'DNI') {
        // Habilitamos el input y establecemos el placeholder para el DNI
        DOM.dniTextInput.disabled = false;
        DOM.dniTextInput.placeholder = "12345678A"; // Formato de DNI
    } else if (DOM.dniNieSelect.value === 'NIE') {
        // Habilitamos el input y establecemos el placeholder para el NIE
        DOM.dniTextInput.disabled = false;
        DOM.dniTextInput.placeholder = "X1234567T"; // Formato de NIE
    } else {
        // Si no se ha seleccionado DNI ni NIE, deshabilitamos el input
        DOM.dniTextInput.disabled = true;
        DOM.dniTextInput.placeholder = "DNI/NIE"; // Placeholder predeterminado
    }
}

// Validar DNI

DOM.dniTextInput.addEventListener("input", validarDniNie);

function validarDniNie() {
  
  
  // Expresión regular para validar NIE (una letra seguida de 7 dígitos y una letra final)
  const regexNie = /^[XYZ]\d{7}[A-Za-z]$/;
  const regexDni = /^\d{8}[A-Za-z]$/;
  
  // Comprobamos si el valor coincide con alguna de las expresiones regulares
  
  if (regexDni.test(DOM.dniNieSelect.value)) {
    DOM.dniNieSelect.style.background.color= "green";
    DOM.dniNieSelect.style.color= "green";
  } 
  else if (regexNie.test(DOM.dniNieSelect.value)) {
    DOM.dniNieSelect.style.background.color= "blue";
    DOM.dniNieSelect.style.color= "blue";
  }
  else{
      DOM.dniNieSelect.style.background.color= "red";
      DOM.dniNieSelect.style.color= "red";
  }
}





// Contador de palabras



DOM.description.addEventListener("input", () => {
  var conD=DOM.description.value.length;
  DOM.contDesc.textContent=`${conD}/120`;
})

DOM.dptitle.addEventListener("input", () => {
  var conT=DOM.dptitle.value.length;
  DOM.conttitle.textContent=`${conT}/15`;
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



