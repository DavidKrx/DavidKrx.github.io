//import * as mondongo from "./david.js"
//Agregar el DOM
const DOM ={ 
  form: document.getElementById('frm'),
  nombreUser: document.getElementById('nombreUser'),
  password: document.getElementById("password"),
  nombre: document.getElementById("nombre"),
  apellidos: document.getElementById("apellidos"),
  telefono: document.getElementById("tel"),
  codigoPostal: document.getElementById("codP"),
  year:document.getElementById("year"),
  dniNieSelect: document.getElementById('dniNie'),
  dniNieInput: document.getElementById('dniText'),
  description: document.getElementById("description"),
  contDesc: document.getElementById("contDesc"),
  dptitle: document.getElementById("dptitle"),
  conttitle: document.getElementById("conttitle"),
  checkbox:document.getElementById("checkbox"),
}

const ERROR ={ 
  errorUser: document.getElementById('errorUser'),
  errorPass: document.getElementById('errorPass'),
  errorNombre: document.getElementById('errorNombre'),
  errorApellidos: document.getElementById('errorApellidos'),
  errorTelefono: document.getElementById('errorTel'),
  errorCodigoPostal: document.getElementById('errorCodP'),
  errorDniNie: document.getElementById('errorDniNie'),
  errorTitulo: document.getElementById('errorTitle'),
  errorDescription: document.getElementById('errorDesc'),
}

const yearInicial=1920
const yearFinal=2010
for(year=yearInicial;year<=yearFinal;year++){
  let option=document.createElement("option")
  option.textContent=year;
  option.value=year;
  DOM.year.appendChild(option);
}


  DOM.form.addEventListener("submit",(e)=>{
    if(!DOM.nombreUser.validationMessage==""){
      e.preventDefault()
      ERROR.errorUser.textContent="Campo obligatorio";
    }
  
    if(!DOM.password.validationMessage==""){
      e.preventDefault()
      ERROR.errorPass.textContent="Campo obligatorio";
    }
    if(!DOM.nombre.validationMessage==""){
      e.preventDefault()
      ERROR.errorNombre.textContent="Campo obligatorio";
    }
    if(!DOM.apellidos.validationMessage==""){
      e.preventDefault()
      ERROR.errorApellidos.textContent="Campo obligatorio";
    }
    if(!DOM.telefono.validationMessage==""){
      e.preventDefault()
      ERROR.errorTelefono.textContent="Campo obligatorio";
    }
  
    if(!DOM.codigoPostal.validationMessage==""){
      e.preventDefault()
      ERROR.errorCodigoPostal.textContent="Campo obligatorio";
    }
  
    if(!DOM.dniNieInput.validationMessage==""){
      e.preventDefault()
      ERROR.errorDniNie.textContent="Campo obligatorio";
    }
  
    if(!DOM.dptitle.validationMessage==""){
      e.preventDefault()
      ERROR.errorTitulo.textContent="Campo obligatorio";
    }
    if(!DOM.description.validationMessage==""){
      e.preventDefault()
      ERROR.errorDescription.textContent="Campo obligatorio";
    }
  
  })
  DOM.checkbox.addEventListener("click",()=>{myFunction(DOM.password)});
  
  DOM.codigoPostal.addEventListener("input",()=>{
    validarLongitudCP(DOM.codigoPostal);
  })


  DOM.dniNieSelect.addEventListener("change",()=>{
    habilitarInput( DOM.dniNieSelect, DOM.dniNieInput)
  })
  
  DOM.dniNieInput.addEventListener("select", validarDniNie(DOM.dniNieSelect));
  // Contador de palabras
  DOM.description.addEventListener("input", (e) => {
    const conD = e.target.value.length
    DOM.contDesc.textContent=`${conD} /120`;
  })
  
  DOM.dptitle.addEventListener("input", () => {
    var conT=DOM.dptitle.value.length;
    conttitle.textContent=`${conT}/15`;
  })

function myFunction(password) {
  if (password.type === "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
} 

function habilitarInput(dniNieSelect,dniTextInput) {

  if (dniNieSelect.value == 'DNI') {
      // Habilitamos el input y establecemos el placeholder para el DNI
      dniTextInput.disabled = false;
      dniTextInput.placeholder = "12345678A"; // Formato de DNI
  } else if (dniNieSelect.value == 'NIE') {
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
function validarLongitudCP(input) {
if (input.value.length > 5) {
    input.value = input.value.slice(0, 5); // Limita a 5 caracteres
}
}
function validarLongitudTelefono(input) {
        if (input.value.length > 9) {
            input.value = input.value.slice(0, 9); // Limita a 5 caracteres
        }
    }



