
function myFunction() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  } 
  function habilitarInput() {
            var select = document.getElementById('dniNie');
            var input = document.getElementById('dniText');
            
            // Si la opción seleccionada es "escribir", habilitar el input
            if (select.value == 'DNI' || select.value == 'NIE') {
               
                input.disabled = false;  // Habilitar el input
            } else {
                
                input.disabled = true;  // Deshabilitar el input
            }
        }
