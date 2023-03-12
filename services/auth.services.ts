export const getGogooleAuth = ()=>{
    fetch('http://localhost:3100/auth/google', {
        method: 'GET'
    })
    .then(response => response.json())
    .then(data => {
        console.log("data", data);
        
        // Procesa la respuesta aquí
    })
    .catch(error => {
        console.log("No se dio la vuelta", error);
        // Maneja el error aquí
    });
}

