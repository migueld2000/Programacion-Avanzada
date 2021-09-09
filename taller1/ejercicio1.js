//Metodo 1
function allar_cordenadas(
    coordenadax1,
    coordenadax2,
    coordenaday1,
    coordenaday2
) {
    let raiz = Math.sqrt(
        Math.pow(coordenadax2 - coordenadax1, 2) +
        Math.pow(coordenaday2 - coordenaday1, 2)
    );
    console.log(
        "La distancia del plante NABOO se encuantra a " + raiz + " años luz "
    );
}

allar_cordenadas(0, 50, 0, -90);

//Metodo 2
let allar_cordenadas2 = (
    coordenadax1,
    coordenadax2,
    coordenaday1,
    coordenaday2
) =>
    Math.sqrt(
        Math.pow(coordenadax2 - coordenadax1, 2) +
        Math.pow(coordenaday2 - coordenaday1, 2)
    );
console.log(
    "La distancia del plante NABOO se encuantra a " +
    allar_cordenadas2(0, 50, 0, -90) +
    " años luz "
);

//ENTRADAS
//let coordenadax_1=0;
//let coordenadax_2=50;
//let coordenaday_1=0;
//let coordenaday_2=-70;
//SALIDA
//console.log(`La distancia del planeta Yavin4 a Naboo es de: ${Math.sqrt(Math.pow(coordenadax_2-coordenadax_1,2)+Math.pow(coordenaday_2-coordenaday_1,2))} UA`);
