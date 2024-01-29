let caja = [];

function inciarCaja (m01, m02, m05, m10, m20, m50, m1, m2, b5, b10, b20, b50, b100, b200, b500) {

    let total = m01*0.01 + m02*0.02 + m05*0.05 + m10*0.10 + m20*0.20 + m50*0.50 + m1 + m2*2 + b5*5 + b10*10 + 
    b20*20 + b50*50 + b100*100 + b200*200+ b500*500;

    return [total.toFixed(2), m01, m02, m05, m10, m20, m50, m1, m2, b5, b10, b20, b50, b100, b200, b500];

}

caja = inciarCaja(1, 3, 2, 1, 0, 0, 4, 5, 2, 8, 4, 1, 0, 0, 0);

let precio = parseFloat(prompt('Precio del producto: '));

let pago = prompt('Ingrese desglose del pago');

let desglosePago = pago.split(",");

for (let i = 0; i < desglosePago.length; i++) {
    desglosePago(i) = parseInt(desglosePago(i));
}

desglosePago = inciarCaja(desglose[0], desglose[1], desglose[2], desglose[3], desglose[4], desglose[5], 
    desglose[6], desglose[7], desglose[8], desglose[9], desglose[10], desglose[11], desglose[12], desglose[13], 
    desglose[14]);

if (desglosePago[0] == precio) { //Pago justo
    alert("Gracias por su visita!!!")
} else {
    if(desglosePago[0] < precio) { //Importe insuficiente
        alert("Tas pelando, hermano. Te faltan " + (precio -desglosePago[0]) + " €")
    } else { 
        if(caja[0] < (desglosePago[0] - precio)) { // No hay cambio suficiente en la caja para devolver
            alert("No tengo cambio suficiente :(")
        } else {
            if(caja[0] == (desglosePago[0] - precio)) { // La caja se queda vacía
                alert("Caja vacía!");

                for (let i = 0; i < caja.length; i++) {
                    cambio[i] = caja[i]                    
                }

                for (let i = 0; i < desglosePago.length; i++) {
                    caja[i] = desglosePago[i]                    
                }
                alert("Caja: " + caja);
                alert("Cambio: " + cambio);
            }
        }
    }
} 