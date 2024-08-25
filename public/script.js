//Se captura el "enviar" del formulario por su id
const button = document.getElementById('submitButton');

//Se escucha el "click" del boton
button.addEventListener( 'click', () => {
    
    const form = document.getElementById('form');   //Se obtiene el formulario por su id
    const formData = new FormData(form);   //Se crea un objeto FormData con los datos del formulario
    const data = {};   //Se crea un objeto vacio para guardar los datos del formulario
    
    //Se recorren los datos del formulario, por su clave y su valor, y se agregan al objeto creado
    formData.forEach((value, key) => {
        data[key] = value;
    });

    console.log(JSON.stringify(data, null, 2));   //Se convierte el objeto en un string JSON y se muestra en la consola
    
    //Los campos del formularios se vacian luego de mostrarlos
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("select").value = "";
    document.getElementById("textArea").value = ""

});