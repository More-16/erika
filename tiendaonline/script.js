
const titulo = document.querySelector("#titulo");
const titulo2 = document.querySelector("#titulo2");

titulo.textContent = "Supel chinito";
titulo2.textContent = " Todo lo que necesites al mejol plecio (NO SE FIÁ)";


const nuevoAlimento = document.createElement("li");

nuevoAlimento.textContent = "Morcilla $6.000";




const lista = document.querySelector("#lista-alimentos");
const nuevosA = [
    {nombre: "Maicena", precio: 8000},
    {nombre: "Manzana", precio: 35000 },
    {nombre: "Cacao", precio: 28000}
];

//  agregamos elemntos

nuevosA.forEach((ali)=>{
    const nuevoAlimentoi = document.createElement("li");
    nuevoAlimentoi.style.background= "blue";
    nuevoAlimentoi.textContent = ali.nombre;
    lista.appendChild(nuevoAlimentoi);

});


