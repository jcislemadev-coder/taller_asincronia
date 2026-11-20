const consultarClima = (ciudad) => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("temperatura :24°C, condicion: soleado")
        },1500)
    });
}

//Prueba
async function mostrarClima(ciudad) {
    let resultado = await consultarClima(ciudad);
    console.log(resultado);
} mostrarClima("Guayaquil");