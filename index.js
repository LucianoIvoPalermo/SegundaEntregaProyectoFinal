let formulario = document.getElementById("form")
let buttonEnviar = document.getElementById("button")

// Mouse Event Click
buttonEnviar.onclick = (e) => {
  e.preventDefault()
  let inputNombre = document.getElementById("nombre").value
  let inputApellido = document.getElementById("apellido").value
  let inputEmpresa = document.getElementById("empresa").value
  let inputTelefono = document.getElementById("telefono").value
  let inputEmail = document.getElementById("email").value
  let inputComentario = document.getElementById("comentario").value

  //Mensaje al usuario y devolución por consola
  let div2 = document.getElementById("div1")
  div2.innerHTML = `<h1>Muchas gracias ${inputNombre} ${inputApellido}!</h1> <h2>Estaremos respondiendo a tu consulta por correo a la casilla ${inputEmail} dejandote la información para que ustedes, ${inputEmpresa}, puedan contactarnos. De no obtener respuesta les estaremos llamando al ${inputTelefono}.`;

  const arrayInput = [inputNombre, inputApellido, inputEmpresa, inputTelefono, inputEmail, inputComentario]

  console.log(arrayInput);
  localStorage.setItem("arrayInput", JSON.stringify(arrayInput))
  let inputUsuario = localStorage.getItem("arrayInput")
  let inputObj = JSON.parse(inputUsuario)

  inputObj.forEach(element => {
    console.log(element)
});

console.log(typeof inputUsuario === "object")
}

//Calculo de horas a contratar
/*Se ingresa la cantidad de horas a contratar, luego se confirma presionando el boton.
Se selecciona el tipo de evento que tiene asignado un valor cada uno, el cual se va a multiplicar por la cantidad de horas ingresadas por el valor según evento.*/

//Cotización
// Ingreso de cantidad de horas y funcion click.
let horasCant = document.getElementById("horasCant")
let botonHoras = document.getElementById("botonHoras")
botonHoras.onclick = () => {
  console.log(horasCant.value);
  localStorage.setItem("Cantidad de horas a contratar",horasCant.value)
}
// Constuctor de eventos
class Eventos {
  constructor(nombre, precio) {
      this.nombre = nombre;
      this.precio = precio;
  }
}

const fiestaPrivada = new Eventos("Fiesta Privada", 65000);
const cumpleaños = new Eventos("Fiesta de cumpleaños", 60000);
const casamiento = new Eventos("Casamiento", 90000);
const eventoSocial = new Eventos("Evento para entidades sin fines de lucro", 45000);
const fiestaCorporativa = new Eventos("Fiesta Corporativa", 75000);
const eventoReligioso = new Eventos("Evento Religioso", 50000);

const eventos = []

eventos.push (fiestaPrivada, cumpleaños, casamiento, eventoSocial, fiestaCorporativa, eventoReligioso)

//Funcion calculo total

let select = document.createElement("select");
let select2 = document.getElementById("select")
select.innerHTML += `
<option value=blank </option>`;
for (i = 0; i < eventos.length; i++) {
    select.innerHTML += `
    <option value='${i}'>${eventos[i].nombre} $${eventos[i].precio}  </option>`;
    select2.appendChild(select)
}

//GENERO EL EVENTO
select.addEventListener('change', function (e) {
  console.log(eventos[e.target.value].precio)
  valorTotal.innerHTML =
    valorTotal.classList.add("multiplicar")
    costo = (horasCant.value) * (eventos[e.target.value].precio)
    valorTotal.innerText = ("$ " + costo)
    localStorage.setItem("Precio total de cotización", costo)

    const datosUsuarioJSON = [horasCant.value, eventos[e.target.value].nombre, eventos[e.target.value].precio, costo]

localStorage.setItem("datosUsuarioJSON", JSON.stringify(datosUsuarioJSON))
  let datosUsuario = localStorage.getItem("datosUsuarioJSON")
  let datosObj = JSON.parse(datosUsuario)

  datosObj.forEach(element => {
    console.log(element)
});
})

select.appendChild(select);


//BOTON DELETE REVISAR
/*function clearResult(){
  document.getElementById("valorTotal").value = '$0.00'
}*/



//Test a desarrollar para tp final

/*let horasCant = document.getElementById("horasCant").value
let horasTotales = document.getElementById("horasTotales")
let botonTiposdeEvento = document.getElementById("botonTiposdeEvento")
let botonTotal = document.getElementById()
let resetear = document.getElementById("resetear")


horasTotales.onclick = () => {
    console.log(horasCant)
  }
botonTiposdeEvento.forEach(botonTiposdeEvento => {
  botonTiposdeEvento.onclick = () =>{
    console.log("algo")
    calcularValores
  }

});

function calcularValores() {
  let horasCant
  if (horasTotales) {
    horasCant = horasTotales
  } else {

  }

}
*/





//Estructura vieja

/*class Contratacion {
    constructor(id, descripcion, valor) {
        this.id = id;
        this.descripcion = descripcion;
        this.valor = valor;
    }
  }
  const horaFiesta = new Contratacion("1","1 hora de show en fiesta privada", 10000);
  const horaCasamiento = new Contratacion("2","1 hora de show en casamiento", 15000);
  const horaCumple = new Contratacion("3","1 hora de show en cumpleaños", 12000);
  const horaExtra = new Contratacion("4","1 hora extra de show por pedido especial", 30000);
  const horaSociales = new Contratacion("5","1 hora de presencia sin show", 40000);
  
  let gastoTotal = 0;
  
  const sumarHoras = (horas) => (gastoTotal += horas);
  
  function comprar() {
    let continuar = true;
    alert("Usted está en la página oficial de Babasónicos! Determine la cantidad de horas y el tipo de evento al que desea contratar a la banda.");
  
    while (continuar) {
      let horas = prompt(`
      Ingrese el numero de la izquierda para contratar las horas deseadas.
      
      Detalle de horas:
      ${horaFiesta.id} - ${horaFiesta.descripcion} $${horaFiesta.valor}
      ${horaCasamiento.id} - ${horaCasamiento.descripcion} $${horaCasamiento.valor}
      ${horaCumple.id} - ${horaCumple.descripcion} $${horaCumple.valor}
      ${horaExtra.id} - ${horaExtra.descripcion} $${horaExtra.valor}
      ${horaSociales.id} - ${horaSociales.descripcion} $${horaSociales.valor}
      6 - Salir
      
      Gastaste: $${gastoTotal}.
      `);
  
      switch (horas) {
        case "1":
          sumarHoras(horaFiesta.valor);
          break;
        case "2":
          sumarHoras(horaCasamiento.valor);
          break;
        case "3":
          sumarHoras(horaCumple.valor);
          break;
        case "4":
          sumarHoras(horaExtra.valor);
          break;
        case "5":
          sumarHoras(horaSociales.valor);
          break;
        case "6":
          continuar = false;
          break;
        default:
          alert("El valor ingresado no es válido.");
          break;
      }
      if (horas != "6") continuar = confirm("Desea seguir acordando horarios?");
    }
  
    alert(`El total del show es $${gastoTotal}.`);
  }
  
  comprar();
  console.log(gastoTotal)*/