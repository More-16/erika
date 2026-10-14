//1
for (let a=0; a<20; a++){
    console.log(a+1)
}
//2
let c = 0;
for (let b=0; b<100; b++){
    c=c+b+1
}
//3
console.log("La suma de todos los numeros del 1 al 100 es " + c)
const nombres = ["Charlott", "Fabian", "Anastasia", "Brenda", "Damian"]
for (let d=0; d<nombres.length; d++){
    console.log("Hola, " + nombres[d])
}
//4
for(let e=0; e<50; e++){
    if(e%3==0){
        console.log(e)
    }
}
//5
/*No se puede usar el prompt
let f= NaN;
let g=0;
while( f!==0){
    f= prompt("Ingresa un numero: ")
    g=g+1
    if(f==0){
        console.log("Has ingresado " + g +" numeros.")
    }
}
*/
//6
let i=10;
let h=0;
while(h<9){
    h=h+1
    i=i*h
};
console.log("El factorial de 10 es "+i);
//7
const edad =[29,42,13,75,3]
for(let j=0; j<edad.length; j++){
    if(edad[j]<18){
        console.log("Es menor de edad")
    } else{
        console.log("Es mayor de edad")
    }
}
//8 No puedo usar el prompt
//9
const nota =[7, 2, 10, 4, 1, 9, 6, 3, 8, 5]
for(let k=0; k<nota.length; k++){
    if(nota[k]<7){
        console.log("Aprobado")
    } else{
        console.log("Desaprobado")
    }
}
//10 No puedo usar el prompt
//11 No puedo usar el prompt
