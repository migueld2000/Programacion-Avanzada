function reclutar(nombre, planeta, edad, estatura, padawan) {
  let promesa=new Promise(function(resolve, reject) {

    if (edad < 15) {
      let mensaje = "Manejo de la fuerza";
      resolve(mensaje,true);
    } else {
      let mensaje = "Manejo del sable de luz";
      reject(mensaje,false);
    }

  })
return promesa;
}
reclutar("juan", "ABH431", 16, 1.7,)
.then(function (respuesta){
    console.log(respuesta);
})
.catch(function (error){
    console.log(error);
})

