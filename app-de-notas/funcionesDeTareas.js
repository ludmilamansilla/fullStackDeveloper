let fs = require('fs');

let moduloTareas = {
    archivo: './tareas.json',
    leerJSON: () => {
        let tareasJSON = fs.readFileSync('./tareas.json', 'utf-8');
        return JSON.parse(tareasJSON)
    },
    escribirJSON: (info) => {
        let nuevoJSON = JSON.stringify(info)
        fs.writeFileSync('./tareas.json', nuevoJSON, 'utf-8')
    },
    agregarTarea: (titulo, estado) => {
        let tareasAnteriores = moduloTareas.leerJSON()

        let nuevaTarea = {
            titulo: titulo,
            estado: estado
        }

        tareasAnteriores.push(nuevaTarea)

        moduloTareas.escribirJSON(tareasAnteriores)
    }

}

module.exports = moduloTareas