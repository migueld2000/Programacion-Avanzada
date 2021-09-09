//Metodo 1
function CodigoNave(Codigo_Nave) {
  let separacionCadena = Codigo_Nave.split(":");
  Codigo_Nave = CodigoNave;
  console.log("El piloto de la nave es: " + separacionCadena[1]);
}

CodigoNave("ARQ2555:Sara Bel-Sun");

//Metodo 2

let codigoNave2 = (Codigo_Nave2, separacionCadena2) => separacionCadena2 = Codigo_Nave2.split(":");
console.log("El piloto de la nave es: " + codigoNave2("ARQ2555:Sara Bel-Sun"+[1])
);

/*let codigoNave = "ARQ255:Juan";
let separacionCadena = codigoNave.split(":");
console.log(separacionCadena[1]);*/
/*let codigo_nave1="ARQ2555";
    let codigo_nave2="ARQ2556";
    let codigo_nave3="ARQ2557";

    let Piloto;
    let piloto1="Sara Bel-Sun";
    let piloto2="Nodin Chavdri";
    let piloto3="Finn";*/
