let cartas = [
{ nombre: "Zanahoria", poder: 93, rareza: "Epica", usada: false },
{ nombre: "Lechuga", poder: 85, rareza: "Especial", usada: true },
{ nombre: "Tomate", poder: 64, rareza: "Comun", usada: true },
{ nombre: "Remolacha", poder: 53, rareza: "Comun", usada: false },
{ nombre: "Zapallo", poder: 86, rareza: "Epica", usada: true },
{ nombre: "Papa", poder: 98, rareza: "Legendaria", usada: false },
{ nombre: "Membrillo", poder: 76, rareza: "Especial", usada: true },
];
let  poderTotal;
let  cartasUsadas;
let cartaMasAlta =0;
let cartaMasAltaN ;
console.log("¡Bienvenido a la ensalada!")
for (let i=1; i<8; i++){
    console.log(cartas.nombre[i] +" Poder: "+ cartas.poder[i])
   
    poderTotal=poderTotal+cartas.poder[i]
    if (cartas.usada[i]=true){
        cartasUsadas=cartasUsadas+1
    }
    if(cartas.poder[i2]>cartaMasAlta){
        cartaMasAlta=cartas.poder[i]
        cartaMasAltaN=cartas.nombre[i]
    }
}

console.log("Poder total de toda tu coleccion: "+ poderTotal);
console.log("La cantidad total de cartas  usadas: "+ cartasUsadas);
console.log("La carta con mas poder: "+ cartaMasAltaN)