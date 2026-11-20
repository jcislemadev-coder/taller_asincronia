const verificarEdad = (edad) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (edad >= 18) {
                resolve("Acceso concedido. Bienvenido a la plataforma");
            } else {
                reject("Acceso DENEGADO. Registro permitido solo para mayores de edad");
            }
        }, 1000);
    });
};

//Primer Resultado

verificarEdad(8)
    .then((resultado) => {
        console.log(resultado);
    }).catch((error) => {
        console.log(error);
    });

//Segunda Prueba

verificarEdad(81)
.then((resultado)=> {
    console.log(resultado);
}).catch((error)=>{
    console.log(error);
}) 