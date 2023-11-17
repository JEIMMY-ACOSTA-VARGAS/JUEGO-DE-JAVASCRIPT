// Se programa el Azar

let numeroAzar = Math.floor(Math.random()*100) + 1

let numeroEntrada = document.getElementById('numeroEntrada')
let mensaje = document.getElementById('mensaje')
let intento = document.getElementById('intento')
let intentos = 0

//Se programa la Operación
function chequearResultado(){
    intentos ++
    intento.textContent = intentos
    let numeroIngresado = parseInt(numeroEntrada.value)

    if (numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)) {
        mensaje.textContent = 'Ingresa un Número Valido entre 1 y 100'
        mensaje.style.color = 'orange'
        return
    }

    if (numeroIngresado == numeroAzar) {
        mensaje.textContent = 'Felicitaciones Adivinaste el Número'
        mensaje.style.color = 'green'
        numeroEntrada.disabled = true
    }else if (numeroIngresado < numeroAzar){
        mensaje.textContent = 'El número debe ser MAYOR al ingresado'
        mensaje.style.color = 'red'
    }else{
        mensaje.textContent = 'El número debe ser menor al ingresado'
        mensaje.style.color = 'yellow'
    }
}