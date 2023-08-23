// hize la simulacion de una lista de tareas usando ciclos, objetos, array y aplicando algunos métodos visto previamente en las clases

// Función principal de la lista de tareas
function ListaDeTareas() {
  // primero inicializo un array vacío
  let tareas = [];

  // Ciclo principal
  while (true) {
    // Aca le muestro las opciones al usuario
    let opcion = prompt(
      "Elige una opción:\n1. Agregar tarea\n2. Quitar tarea\n3. Mostrar las tareas\n4. Salir"
    );

    // aqui convierto la opción en número
    opcion = parseInt(opcion);

    // Aqui se realiza las acciones según la opción que se elija
    switch (opcion) {
      // agregar
      case 1:
        let titulo = prompt("Ingresa una nueva tarea");
        let tarea = {
          titulo: titulo,
        };
        tareas.push(tarea);
        alert("Tarea agregada correctamente.");
        break;

      // eliminar
      case 2:
        if (tareas.length === 0) {
          alert("No hay tareas en la lista.");
        } else {
          let indice = prompt(
            "Ingresa el índice de la tarea que quieres eliminar (1-" +
              tareas.length +
              "):"
          );
          indice = parseInt(indice) - 1;
          if (indice >= 0 && indice < tareas.length) {
            tareas.splice(indice, 1);
            alert("Tarea eliminada correctamente.");
          } else {
            alert("Índice inválido.");
          }
        }
        break;
      // ver tareas
      case 3:
        if (tareas.length === 0) {
          alert("No hay tareas en la lista.");
        } else {
          let listaTareas = "";
          for (let i = 0; i < tareas.length; i++) {
            listaTareas += i + 1 + ". " + tareas[i].titulo + "\n";
          }
          alert("tareas:\n" + listaTareas);
        }
        break;
      // terminar
      case 4:
        return; // Se sale del menu

      default:
        alert("Opción inválida.");
        break;
    }
  }
}

ListaDeTareas();
