// primer metodo
function salario_mensual(salario,comision)
{
    let total=(salario + comision)-0.05;
    console.log("El salario mensual del bendedor es de: " + total)
}

salario_mensual(3500000,1500000);


//segundo metodo


let salario_mensual2=(salario,comision)=>salario+comision-0.05;

console.log("El salario mensual del bendedor es de: " + salario_mensual2(3500000,1500000));


