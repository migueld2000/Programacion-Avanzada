//vercion 3
function coneccion(correo, contraseña) {

    let promesa = new Promise(function (resolve, reject) {
        const Correo = "migueld2000@gmail.com";
        const Contraseña = "lunatamayo15";
        console.log("mirando credenciales");

        setTimeout(function () {
            if (correo == Correo && contraseña == Contraseña) {
                resolve("Biembenido")
            }
            else {
                reject("Error a entrar")

            }
        }, 5000)
    })
    return promesa
}
async function procesar(){
    try{
        let resultadopromesa = await coneccion("migueld2000@gmail.com","lunatamayo15");
        console.log(resultadopromesa)
    }
    catch(error){
        console.log(Error)
    }
}
procesar();