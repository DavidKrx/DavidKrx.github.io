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
  dniNieInput: document.getElementById('dniText'),
  description: document.getElementById("description"),
  dptitle: document.getElementById("dptitle"),

  dniNieSelect: document.getElementById('dniNie'),
  checkbox:document.getElementById("checkbox"),
  hiddenInput : document.getElementById('hideAficiones'),
  aficiones1:document.getElementById("aficiones1"),
  aficiones2:document.getElementById("aficiones2"),
  aficiones3:document.getElementById("aficiones3"),
  aficiones4:document.getElementById("aficiones4"),
  aficiones5:document.getElementById("aficiones5"),
  aficiones6:document.getElementById("aficiones6"),
  contDesc: document.getElementById("contDesc"),
  conttitle: document.getElementById("conttitle"),
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
  errorAficiones: document.getElementById('errorAficiones'),
}

const yearInicial=1920
const yearFinal=2010
for(year=yearInicial;year<=yearFinal;year++){
  let option=document.createElement("option")
  option.textContent=year;
  option.value=year;
  DOM.year.appendChild(option);
}

DOM.nombreUser.addEventListener("input",()=>{
  if(!DOM.nombreUser.validationMessage==""){
    ERROR.errorUser.textContent="Campo obligatorio";
  } else {
    ERROR.errorUser.textContent="";
  }
})

DOM.password.addEventListener("input",()=>{ 
if(!DOM.password.validationMessage==""){
  ERROR.errorPass.textContent="Campo obligatorio";
}else {
  ERROR.errorPass.textContent="";
}})


DOM.nombre.addEventListener("input",()=>{ 
  if(!DOM.nombre.validationMessage==""){
    ERROR.errorNombre.textContent="Campo obligatorio";
  }else {
    ERROR.errorNombre.textContent="";
  }})

  DOM.apellidos.addEventListener("input",()=>{ 
    if(!DOM.apellidos.validationMessage==""){
      ERROR.errorApellidos.textContent="Campo obligatorio";
    }else {
      ERROR.errorApellidos.textContent="";
    }})

    DOM.telefono.addEventListener("input",()=>{ 
      if(!DOM.telefono.validationMessage==""){
        ERROR.errorTelefono.textContent="Campo obligatorio";
      }else {
        ERROR.errorTelefono.textContent="";
      }})

      
    DOM.codigoPostal.addEventListener("input",()=>{ 
      if(!DOM.codigoPostal.validationMessage==""){
        ERROR.errorCodigoPostal.textContent="Campo obligatorio";
      }else {
        ERROR.errorCodigoPostal.textContent="";
      }})

      DOM.dptitle.addEventListener("input",()=>{ 
        var conT=DOM.dptitle.value.length;
        conttitle.textContent=`${conT}/15`;
        if(!DOM.dptitle.validationMessage==""){
          ERROR.errorTitulo.textContent="Campo obligatorio";
        }else {
          ERROR.errorTitulo.textContent="";
        }
      })

        DOM.description.addEventListener("input",()=>{ 
          const conD = DOM.description.value.length
          DOM.contDesc.textContent=`${conD} /120`;
          if(!DOM.description.validationMessage==""){
            ERROR.errorDescription.textContent="Campo obligatorio";
          }else {
            ERROR.errorDescription.textContent="";
          }

        })

  DOM.form.addEventListener("submit",(e)=>{
    checkboxInput();

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
    if(!DOM.dniNieSelect.validationMessage==""){
      e.preventDefault()
      ERROR.errorDniNie.textContent="Campo obligatorio";
    }
  })

  DOM.checkbox.addEventListener("click",()=>{myFunction(DOM.password)});

  DOM.dniNieSelect.addEventListener("change",()=>{
    habilitarInput( DOM.dniNieSelect, DOM.dniNieInput)
  })
  
  DOM.dniNieInput.addEventListener("select", validarDniNie(DOM.dniNieSelect));
  // Contador de palabras

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

DOM.aficiones1.addEventListener("change", ()=>{
  checkboxInput();
})

DOM.aficiones2.addEventListener("change", ()=>{
  checkboxInput();
})
DOM.aficiones3.addEventListener("change", ()=>{
  checkboxInput();
})
DOM.aficiones4.addEventListener("change", ()=>{
  checkboxInput();
})
DOM.aficiones5.addEventListener("change", ()=>{
  checkboxInput();
})
DOM.aficiones6.addEventListener("change", ()=>{
  checkboxInput();
})


function checkboxInput(){
  let checkaficiones = document.querySelectorAll('.aficiones input[type="checkbox"]');
  //let hiddenInput = document.getElementById('hideAficiones');
  //let errorAficiones= document.getElementById('errorAficiones');
  checkaficiones = [...checkaficiones];

  const aficionesValues = checkaficiones
          .filter(check => check.checked) // Filtro de los seleccionados
          .map(check => check.value);    // Valores de los seleccionados
          
  if (aficionesValues.length >= 2) {
            DOM.hiddenInput.value = aficionesValues.join(",");
            DOM.errorAficiones.textContent="";
  } else {
            DOM.hiddenInput.value = null;
            DOM.errorAficiones.textContent="2 Campos obligatorios";
        }
      }