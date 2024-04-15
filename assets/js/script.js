let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let edad = document.getElementById("edad");

let btnEnviar = document.getElementById("btnEnviar");

btnEnviar.addEventListener("click",function(e){

    nombre = nombre.value;
    apellido = apellido.value;
    

    console.log(`El nombre es: ${nombre}`);
    console.log(`El apellido es: ${apellido}`);
    console.log("El apellido es: "+nombre);
    console.log("El apellido es: "+apellido);

    // Esto es para prevenir que se actualize la pagina al darle click al enviar
    e.preventDefault();
    console.log('Estoy haciendo click');
})


console.log(nombre);

