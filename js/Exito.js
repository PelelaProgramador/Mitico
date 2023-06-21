function toggleContrast() {
  var body = document.body;
  body.classList.toggle("contrast");
}

function changeFont(radio) {
  var body = document.body;
  var font = radio.value;
  body.style.fontFamily = font;
}

function toggleContrast() {
  var body = document.body;
  body.classList.toggle("contrast");
}
var countryCodes = {
    "Argentina": "+54",
    "Brasil": "+55",
    "Chile": "+56",
    "Colombia": "+57",
    "México": "+52",
    "Perú": "+51",
    "España": "+34",
    "Estados Unidos": "+1"
  };
  
  function validarCampos() {
    // Validación de campos
    var in1 = document.getElementById("n1");
    var in2 = document.getElementById("n2");
    var in3 = document.getElementById("n3");
    var in4 = document.getElementById("n4");
    var in5 = document.getElementById("n5");
    var in6 = document.getElementById("n6");
    var in7 = document.getElementById("n7");
    var in8 = document.querySelector('input[name="sexo"]:checked');
    
    
    // Validación de campos
    if (in1.value.trim() === "") {
      alert("Ingrese un nombre válido");
      return false;
    }
  
    if (in2.value.trim() === "") {
      alert("Ingrese una contraseña válida");
      return false;
    }
  
    // Validación del campo edad
    var edadRegex = /^[1-9][0-9]*$/; // Expresión regular que acepta solo números enteros positivos
    if (!edadRegex.test(in3.value)) {
      alert("Ingrese una edad válida");
      return false;
    }
  
    if (in4.value.trim() === "") {
      alert("Ingrese una fecha de nacimiento válida");
      return false;
    }
  
    // Validación del campo email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para validar el formato del email
    if (!emailRegex.test(in5.value)) {
      alert("Ingrese un email válido");
      return false;
    }
  
    if (in6.value.trim() === "") {
      alert("Ingrese un país válido");
      return false;
    }
  
    // Obtener el código de país del país seleccionado
    var countryCode = countryCodes[in6.value];
  
    // Validación del campo teléfono
    var telefonoRegex = new RegExp("^\\+" + countryCode + "\\d{8,}$");
    if (!telefonoRegex.test(in7.value)) {
      alert("Ingrese un teléfono válido para el país seleccionado");
      return false;
    }
  
    if (!in8) {
      alert("Seleccione un sexo");
      return false;
    }
  
    return true; // Si todos los campos son válidos
  }
  
  var modificar = (listaNueva) => {
    // Código para modificar un objeto en la lista
    let in1 = document.getElementById("n1");
    let in2 = document.getElementById("n2");
    let in3 = document.getElementById("n3");
    let in4 = document.getElementById("n4");
    let in5 = document.getElementById("n5");
    let in6 = document.getElementById("n6");
    let in7 = document.getElementById("n7");
    let in8 = document.querySelector('input[name="sexo"]:checked');
    let eBtnEditarUp = document.getElementById('btnEditar');
  
    let nombre = in1.value;
    let contraseña = in2.value;
    let edad = in3.value;
    let fecha_nac = in4.value;
    let email = in5.value;
    let pais = in6.value;
    let telefono = in7.value;
    let sexo = in8.value;
  
    let indice = eBtnEditarUp.value;
    listaNueva[indice].Nombre = nombre;
    listaNueva[indice].Contraseña = contraseña;
    listaNueva[indice].Edad = edad;
    listaNueva[indice].Fecha_nac = fecha_nac;
    listaNueva[indice].Email = email;
    listaNueva[indice].País = pais;
    listaNueva[indice].Teléfono = telefono;
    listaNueva[indice].Sexo = sexo;
  
    localStorage.setItem('personas', JSON.stringify(listaNueva));
  
    cargarTabla(listaNueva);
  }
  
  var eliminar = (listaNueva) => {
    // Código para eliminar un objeto de la lista
    let eBtnEliminarUp = document.getElementById('btnEliminar');
    let indice = eBtnEliminarUp.value;
  
    listaNueva.splice(indice, 1);
  
    for (let i = 0; i < listaNueva.length; i++) {
      listaNueva[i].id = i;
    }
  
    localStorage.setItem('personas', JSON.stringify(listaNueva));
    cargarTabla(listaNueva);
  
    // Restablecer los campos del formulario
    document.getElementById('n1').value = '';
    document.getElementById('n2').value = '';
    document.getElementById('n3').value = '';
    document.getElementById('n4').value = '';
    document.getElementById('n5').value = '';
    document.getElementById('n6').value = '';
    document.getElementById('n7').value = '';
    document.getElementsByName('sexo').defaultChecked;
  
    // Habilitar los campos del formulario
    document.getElementById('n1').readOnly = false;
    document.getElementById('n2').readOnly = false;
    document.getElementById('n3').readOnly = false;
    document.getElementById('n4').readOnly = false;
    document.getElementById('n5').readOnly = false;
    document.getElementById('n6').readOnly = false;
    document.getElementById('n7').readOnly = false;
    document.getElementById('n8').readOnly = false;
  };
  var cargarTabla = (listaNueva) => {
    // Código para generar la tabla con los datos de la lista
    let eContenedorTabla = document.getElementById("contenedorTabla");
  
    let render = "<table>";
    render += "<tr><th>Nombre</th><th>Contraseña</th><th>Edad</th><th>Fecha_nac</th><th>Email</th><th>País</th><th>Teléfono</th><th>Sexo</th><th>Acción</th></tr>";
  
    for (let i = 0; i < listaNueva.length; i++) {
      const element = listaNueva[i];
      render += "<tr>";
      render += "<td>" + element.Nombre + "</td>";
      render += "<td>" + element.Contraseña + "</td>";
      render += "<td>" + element.Edad + "</td>";
      render += "<td>" + element.Fecha_nac + "</td>";
      render += "<td>" + element.Email + "</td>";
      render += "<td>" + element.País + "</td>";
      render += "<td>" + element.Teléfono + "</td>";
      render += "<td>" + element.Sexo + "</td>";
      render += "<td>";
      render += "<button id='btnEditar" + i + "'>Editar</button>";
      render += "<button id='btnEliminar" + i + "'>Eliminar</button>";
      render += "</td>";
      render += "</tr>";
    }
  
    render += "</table>";
    eContenedorTabla.innerHTML = render;
  
    for (let i = 0; i < listaNueva.length; i++) {
      let eBtn = document.getElementById("btnEditar" + i);
      let eBtn2 = document.getElementById("btnEliminar" + i);
      let element = listaNueva[i];
  
      eBtn.addEventListener("click", () => {
        let in1 = document.getElementById("n1");
        let in2 = document.getElementById("n2");
        let in3 = document.getElementById("n3");
        let in4 = document.getElementById("n4");
        let in5 = document.getElementById("n5");
        let in6 = document.getElementById("n6");
        let in7 = document.getElementById("n7");
        let in8 = document.querySelector('input[name="sexo"]:checked');
        in1.value = element.Nombre;
        in2.value = element.Contraseña;
        in3.value = element.Edad;
        in4.value = element.Fecha_nac;
        in5.value = element.Email;
        in6.value = element.País;
        in7.value = element.Teléfono;
        in8 = element.sexo;
  
        let sEditar = "<button type='button' id='btnEditar' value='" + i + "'>Editar</button>";
        let contenedorBoton = document.getElementById('contenedorBtnExtra');
        contenedorBoton.innerHTML = sEditar;
  
        let eBtnEditarUp = document.getElementById('btnEditar');
        eBtnEditarUp.addEventListener('click', () => modificar(listaNueva));
      });
  
      eBtn2.addEventListener("click", () => {
        let in1 = document.getElementById("n1");
        let in2 = document.getElementById("n2");
        let in3 = document.getElementById("n3");
        let in4 = document.getElementById("n4");
        let in5 = document.getElementById("n5");
        let in6 = document.getElementById("n6");
        let in7 = document.getElementById("n7");
        let in8 = document.querySelector('input[name="sexo"]:checked');
      
        in1.value = element.Nombre;
        in2.value = element.Contraseña;
        in3.value = element.Edad;
        in4.value = element.Fecha_nac;
        in5.value = element.Email;
        in6.value = element.País;
        in7.value = element.Teléfono;
        in8 = element.sexo;

        var form =document.getElementById("FormularioPulento").getElementsByTagName('*')
        for(var x = 0; x < form.lenght; x++)
        {
          form[x].disabled = true;
        }
    
      
        let sEliminar = "<button type='button' id='btnEliminar' value='" + i + "'>Eliminar</button>";
        let contenedorBoton = document.getElementById('contenedorBtnExtra');
        contenedorBoton.innerHTML = sEliminar;
      
        let eBtnEliminarUp = document.getElementById('btnEliminar');
        eBtnEliminarUp.addEventListener('click', () => eliminar(listaNueva));
      });
    }
  }
  
  var registrar = () => {
    // Código para registrar un nuevo objeto en la lista
    var in1 = document.getElementById("n1");
    var in2 = document.getElementById("n2");
    var in3 = document.getElementById("n3");
    var in4 = document.getElementById("n4");
    var in5 = document.getElementById("n5");
    var in6 = document.getElementById("n6");
    var in7 = document.getElementById("n7");
    var in8 = document.querySelector('input[name="sexo"]:checked');
  
    var nombre = in1.value;
    var contraseña = in2.value;
    var edad = in3.value;
    var fecha_nac = in4.value;
    var email = in5.value;
    var pais = in6.value;
    var telefono = in7.value;
    var sexo = in8.value;
  
    var ListaPersonas = localStorage.getItem("personas");
    var listaNueva = [];
  
    if (ListaPersonas !== null) {
      listaNueva = JSON.parse(ListaPersonas);
    }
  
    var datos = {
      "id": listaNueva.length,
      "Nombre": nombre,
      "Contraseña": contraseña,
      "Edad": edad,
      "Fecha_nac": fecha_nac,
      "Email": email,
      "País": pais,
      "Teléfono": telefono,
      "Sexo": sexo
    };
  
    listaNueva.push(datos);
    localStorage.setItem("personas", JSON.stringify(listaNueva));
    cargarTabla(listaNueva);
  }
  
  var cargarDatos = () => {
    // Código para cargar los datos y generar la tabla al cargar la página
    var ListaPersonas = localStorage.getItem("personas");
    var ListaAntigua = JSON.parse(ListaPersonas);
    console.log(ListaAntigua); // Mostrar los datos en la consola

    cargarTabla(ListaAntigua);

    // Establecer el campo de país en blanco
    var in6 = document.getElementById("n6");
    in6.innerHTML = "<option value='' selected>Seleccione un país</option>";
    in6.value = ""; // Asegurarse de que el valor esté vacío

    // Agregar opciones de países
    for (var country in countryCodes) {
        var option = document.createElement("option");
        option.value = country;
        option.text = country;
        in6.appendChild(option);
    }
}

function calcularEdad() {
    // Funcion para calcular la edad a partir de la fecha de nacimiento
    var fechaNacimiento = document.getElementById("n4").value;
    var hoy = new Date();
    var fechaNac = new Date(fechaNacimiento);
    var edad = hoy.getFullYear() - fechaNac.getFullYear();
    var mes = hoy.getMonth() - fechaNac.getMonth();
    
    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNac.getDate())) {
      edad--;
    }
    
    document.getElementById("n3").value = edad;
  }
  
  // Evento click para el botón de registro
document.getElementById("btn").addEventListener("click", () => {
    if (validarCampos()) {
        registrar();
    }
});

// Evento change para el campo de selección de país
var in6 = document.getElementById("n6");
in6.addEventListener("change", function() {
    var selectedCountry = this.value;
    var countryCode = countryCodes[selectedCountry];
    var in7 = document.getElementById("n7");
    in7.value = countryCode;
});

// Llamada inicial para cargar los datos
addEventListener('load', cargarDatos);
  