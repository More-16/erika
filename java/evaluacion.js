
console.log("Bienvenido a el juego")
const jj=alert("Pudimos ingresar")
let mascota ={
    nombre:"Katie",   
    hambre:7,
    energia:9,
    felicidad:4,
};
function jugar(hambre, energia, felicidad){
    hambre=hambre+2
    energia= energia-2
    felicidad= felicidad+2
    return [nombre + " tiene hambre("+hambre+"), energia("+energia+") y esta feliz("+felicidad+")"];
};
function comer(hambre, energia, felicidad){
    hambre=hambre-3
    energia= energia+2
    felicidad= felicidad+3
    return [nombre + " tiene hambre("+hambre+"), energia("+energia+") y esta feliz("+felicidad+")"];

};  
function dormir(energia, felicidad){
    energia= energia +3
    felicidad= felicidad+2
    return [nombre + " tiene hambre("+hambre+"), energia("+energia+") y esta feliz("+felicidad+")"];

};
let consigna;
for(let i=1; i<6; i++){
    console.log("Dia: "+i)
    console.log("1. Dormir  2. Comer    3. Jugar")
        consigna =prompt("¿Que quieres hacer?" )
        if (consigna==1){
            dormir(energia, felicidad);
        }
        if (consigna==2){
            comer(hambre, energia, felicidad);
        }
        if (consigna==3){
            jugar(hambre, energia, felicidad);
        }

};



