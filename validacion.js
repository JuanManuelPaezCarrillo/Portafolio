
const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function(event) {  
    event.preventDefault();

    const formData = new FormData(formulario);
   
    fetch(formulario.action, {
        method: formulario.method,
        body: formData
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Hubo un problema al enviar el formulario.');
        }
        return response.text();
    })
    .then(data => {
        // Procesar la respuesta si es necesario
        console.log(data);
        alert('El formulario se ha enviado correctamente.');
        // Puedes redirigir a otra página si lo deseas
        // window.location.href = 'gracias.html';
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Hubo un problema al enviar el formulario. Por favor, inténtalo de nuevo más tarde.');
    });
});
