//primer metodo
function Calcular_Promedio_Temperatura(...temperaturas)
{
    /*let temperaturamaxima=Math.max(temperaturas);
    let temperaturaminma=Math.min(temperaturas);
    
    let proimedio=(temperaturamaxima+temperaturaminma)/2;*/

    let promedio=((temperaturamaxima=(Math.max(...temperaturas)+Math.min(...temperaturas))/2));

    return (promedio);
}

let temperaturas=[61,36,66,55,70];

console.log(`La temperatura promedio fue de: ${Calcular_Promedio_Temperatura(...temperaturas)}°C`)

//segundo metodo

let Calcular_Promedio_Temperatura2=(temperaturas)=>((Math.max((temperaturas)+Math.min(temperaturas))/2));
console.log("La temperatura promedio fue de: "+Calcular_Promedio_Temperatura2(61,36,66,55,70) + "°C")

