
const inputPrice = document.getElementById('price');
const inputDiscount = document.getElementById('discount');
const realPrice = document.getElementById('realPrice');
const calc = document.getElementById('btn');

const inputPrice2 = document.getElementById('price2');
const inputDiscount2 = document.getElementById('discount2');
const realPrice2 = document.getElementById('realPrice2');
const calc2 = document.getElementById('btn2');


function calcPrice () {
    const price = Number(inputPrice.value);
    const discount = Number(inputDiscount.value);

    if (!price || !discount) {
        realPrice.innerText = "Debes llenar los campos";
        return;
    }
    if (discount > 99) {
        realPrice.innerHTML = `aja ya quisieras, no te te vamos a dar nada.
        solo puedes ingresar descuentos menores a 100`;
        return;
    }
    const showPrice = price * (100 - discount)/100;
    realPrice.innerText = "Precio con descuento $" + showPrice;
}


function calcPrice2 () {
    const price = inputPrice2.value;
    const discount = String(inputDiscount2.value).toLowerCase();
    console.log(discount);

    if (!price || !discount) {
        realPrice2.innerText = "Debes llenar los campos";
        return;
    }
    switch(discount) {
        case 'platzi15':

    }
    const show = (descuento) =>{
        const showPrice = price * (100 - descuento)/100;
        realPrice2.innerText = `Felicidades obtuvistre un ${descuento}% de descuebto => Precio con descuento ${showPrice}`;
        

    }

    if (discount === 'platzi15') {
        show(15);
        return;
    }
    else if (discount === 'platzi30') {
        show(30);
        return;

    }
    else if (discount === 'platzi50') {
        show(50);
        return;

    } else {
        realPrice2.innerText = `No hay descuentos asociados a ese cupon.`;
        setTimeout(() =>{
            realPrice2.innerText = "Precio: $" + price;
        },2000);
        realPrice2.innerText = `No hay descuentos asociados a ese cupon.`;
        
    }
}
    
calc.addEventListener('click', calcPrice);
calc2.addEventListener('click', calcPrice2);

// funcion ayudd

const getDiscount = () => {
    return {
        '15%': 'PLATZI15',
        '30%': 'PLATZI30',
        '50%': 'PLATZI50',
    }
}