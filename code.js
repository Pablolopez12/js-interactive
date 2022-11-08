/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */

let nombreUsuario = ""
do{ nombreUsuario = prompt("Ingresa tu nombre") }
while( !isNaN(nombreUsuario) || nombreUsuario === null || nombreUsuario.length < 3); 
datosPersona.nombre = nombreUsuario;

let anioNacimiento = "" 
do{ anioNacimiento = prompt("Ingresa tu año de nacimiento") }
while( anioNacimiento > 2022 || anioNacimiento < 1910 || anioNacimiento === null)
datosPersona.edad = 2022 - anioNacimiento;

let ciudad = "" 
do{ ciudad = prompt("Ingresa en donde vives") }
while(ciudad >= 50 || ciudad === null || ciudad.length < 2)
datosPersona.ciudad = ciudad;

interesPorJs = confirm("te interesa Javascript?") ? 'Si' : 'No'
datosPersona.interesPorJs = interesPorJs
console.log(datosPersona.interesPorJs);
}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  let name = document.querySelector("#nombre")
  name.innerText = datosPersona.nombre

  let age = document.querySelector("#edad")
  age.innerHTML = datosPersona.edad

  let city = document.querySelector("#ciudad")
  city.innerHTML = datosPersona.ciudad

  let interest = document.querySelector("#javascript")
  interest.innerHTML = datosPersona.interesPorJs

}


function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
let tarjetas = document.querySelector("#fila")
tarjetas.innerHTML = ''
listado.forEach(elemento =>{
tarjetas.innerHTML += `
<div class = "caja">
<img src= "${elemento.imgUrl}" alt="lenguajes">
<p class="lenguajes">${elemento.lenguajes}</p>
<p class="bimestre">${elemento.bimestre}</p>
</div>
`
})

}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
let theme = document.querySelector("#sitio")
theme.classList.toggle('dark')

}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */

let aboutMe = document.querySelector("#sobre-mi")
window.addEventListener('keydown', e =>{
if(e.key.toLowerCase() === 'f'){
  aboutMe.classList.remove('oculto')
}
})
