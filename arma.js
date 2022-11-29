const $select1 = document.querySelector("#tipo");
const $select2 = document.querySelector("#sabor");
const $select3 = document.querySelector("#relleno");
const $select4 = document.querySelector("#especiales");
const p = document.getElementById("result");

const calcular = () => {
    const indice1 = $select1.selectedIndex;
    const indice2 = $select2.selectedIndex;
    const indice3 = $select3.selectedIndex;
    const indice4 = $select4.selectedIndex;

    const opcionSeleccionada1 = $select1.options[indice1];
    const opcionSeleccionada2 = $select2.options[indice2];
    const opcionSeleccionada3 = $select3.options[indice3];
    const opcionSeleccionada4 = $select4.options[indice4];

    console.log(`Texto: ${opcionSeleccionada1.text}. Valor: ${opcionSeleccionada1.value}`);
    console.log(`Texto: ${opcionSeleccionada2.text}. Valor: ${opcionSeleccionada2.value}`);
    console.log(`Texto: ${opcionSeleccionada3.text}. Valor: ${opcionSeleccionada3.value}`);
    console.log(`Texto: ${opcionSeleccionada4.text}. Valor: ${opcionSeleccionada4.value}`);

    console.log(opcionSeleccionada1.value)
    var result = 0;

    switch(opcionSeleccionada1.value){
        case 'elastica': result += 80; break;
        case 'chantilly': result += 65; break;
        case 'fondant': result += 70; break;
        case 'impresos': result += 50; break;
        default: result += 0;
    }

    switch(opcionSeleccionada2.value){
        case 'vainilla': result += 50; break;
        case 'chips': result += 58; break;
        case 'naranja': result += 48; break;
        case 'yogurt': result += 52; break;
        case 'platano': result += 54; break;
        default: result += 0;
    }

    switch(opcionSeleccionada3.value){
        case 'manjar': result += 15; break;
        case 'fudge': result += 16; break;
        case 'chocolate': result += 16; break;
        case 'dulce': result += 14; break;
        case 'chantilly': result += 12; break;
        default: result += 0;
    }

    switch(opcionSeleccionada4.value){
        case 'buttercream': result += 10; break;
        case 'bitter': result += 10; break;
        case 'blanco': result += 10; break;
        case 'pecanas': result += 10; break;
        case 'oreo': result += 10; break;
        default: result += 0;
    }

    console.log(result);
    p.innerText ="S/." + result;
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#boton").addEventListener("click", calcular);
});