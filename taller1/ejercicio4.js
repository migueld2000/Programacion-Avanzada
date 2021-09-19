//metodo 1
let arr1 = [2,4,-8,5,-6];

function numeronegativo(arr) {
  let negativos = 0;
  arr.forEach(num => {
    if (num < 0) negativos++;
  });
  return negativos;
}

console.log("la cantidad de sables defectuosos con energía negativa fue de: " + numeronegativo(arr1));

//metodo 2

let arr2 = [2, 4, -8, 5, -6];

let Numeronegativo = arr =>
{
    let negativos2=0; arr.forEach(num2=>{ if(num2<0)negativos2++;}) 
    return negativos2;
}
console.log("la cantidad de sables defectuosos con energía negativa fue de: " + Numeronegativo(arr2));
