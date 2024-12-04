import * as mondongo from "./david.js"
//Agregar el DOM
const DOM ={ 
  form: document.getElementById('frm'),
  nombreUser: document.getElementById('nombreUser'),
  password: document.getElementById("password"),
  nombre: document.getElementById("nombre"),
  apellidos: document.getElementById("apellidos"),
  telefono: document.getElementById("tel"),
  codigoPostal: document.getElementById("codP"),

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
DOM.checkbox.addEventListener("click",()=>{mondongo.myFunction(DOM.password)});

DOM.dniNieSelect.addEventListener("click",()=>{mondongo.habilitarInput(DOM.dniNieSelect,DOM.dniTextInput)})


DOM.dniNieInput.addEventListener("select", mondongo.validarDniNie(DOM.dniNieSelect));
// Contador de palabras
DOM.description.addEventListener("input", () => {
  var conD=DOM.description.value.length;
  DOM.contDesc.textContent=`${conD}/120`;
})

DOM.dptitle.addEventListener("input", () => {
  var conT=DOM.dptitle.value.length;
  DOM.conttitle.textContent=`${conT}/15`;
})



