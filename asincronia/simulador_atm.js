const retirarDinero = (monto) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (monto <= 500) {
                resolve("Retiro exitoso de $X. Saldo Restante: $Y");
            } else {
                reject("Fondos insuficientes. Limite de retiro: $500");
            }
        }, 1500);
    });
};

//Prueba 1

retirarDinero(200)
    .then((resultado) => {
    console.log(resultado);
}).catch ((error) => {
    console.log(error);
});

//Prueba 2

retirarDinero(600)
.then((resultado) =>{
    console.log(resultado);
}).catch((error)=>{
    console.log(error);
})