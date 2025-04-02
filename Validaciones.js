function ProcesarFn() {
    Promise.all([
        procesarPieza("Taladro", 3000),
        procesarPieza("Martillo", 1000),
        procesarPieza("Maquina", 2000)
    ]).then(resultados => {
        alert(resultados.join("\n"));
    });
}