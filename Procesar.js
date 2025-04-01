
function procesarPieza(nombre, tiempo) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Pieza ${nombre} procesada en ${tiempo}ms`);
        }, tiempo);
    });
}

function ProcesarFn() {
    Promise.all([
        procesarPieza("Taladro", 3000),
        procesarPieza("Martillo", 1000),
        procesarPieza("Maquina", 2000)
    ]).then(resultados => {
        alert(resultados.join("\n"));
    });
}