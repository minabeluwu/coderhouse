//Primera Entrega - Calcular el costo total de productos.

// 1. definimos las variables iniciales
let finalizo = false;
let total = 0;

// 2. hacemos un ciclo para agregar el costo de los productos
while (!finalizo) {
    let costo = parseInt(prompt("Ingrese el costo del producto"));

// 3. si isNaN es diferente a true sume los productos, y si es true finaliza
    if(!isNaN(costo)) {
        total += costo;
    }else {
        finalizo = true;
    }
};

// 4. suma el total de productos y lo muestra en un alert
alert(`El costo total de los productos es ${total}`);