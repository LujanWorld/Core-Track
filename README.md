# Core-Track
Project for the challenge in 4040Apps
## Índice

- [Introducción](#introducción)
- [¿Qué necesidades satisface?](#¿qué-necesidades-satisface?)
- [Historias de usuario](#historias-de-usuario)
- [Prototipo de Baja Fidelidad](#prototipo-de-baja-fidelidad)
- [Prototipo de Alta Fidelidad](#prototipo-de-alta-fidelidad)
- [Bitácora de trabajo](#bitácora-de-trabajo)
- [Herramientas utilizadas](#herramientas-utilizadas)
- [Integrantes del squad Femmes en Code](#Integrantes-del-squad)

---

## Introducción

Core Track es una aplicación web que permite traquear el tiempo por proyectos y tareas de forma automática y mostrando los resultados filtrados y clasificados según el usuario. Cuenta con dos interfaces, la primera para el personal de Recursos Humanos y la segunda para los usuarios de la empresa.

---

## ¿Qué necesidades satisface CT?

- Registro de tiempos tanto para el personal de RH como para los usuarios en cada dia laboral.
- Visualizacion de tareas separada por usuario y proyecto.
- Interfaz amigable e intuitiva.
- Botón para iniciar o detener tarea, con un dropdown para cambiar el estatus.
- Registro y almacenamiento de la información de cada usuario en una base de datos.
- Visualización eficiente de porcentaje de horas obtenidos en una grafica.

---

## Historias de usuario

### Historia de usuario 1

Usuario requiere poder visualizar tablas para guardar el tiempo registrado.

- DoD:

  - Pantalla de inicio con botón para cambiar a la sección correspondiente.
  - Formulario para escribir el nombre del usuario.
  - Botones de las tareas disponibles.
  - Función para seleccionar la tarea.
  - Función para seleccionar el status.
  - Función para registrar el tiempo.

### Historia de usuario 2

Usuario requiere una plataforma que agilice el proceso de manejo de tiempo y seleccion de tareas, para poder visualizar las que les fueron asignadas por proyecto.

- DoD:
  - Boton de tareas con 2 botones (Iniciar o pausar).
  - Visualizar el temporizador activado.
  - La lista de tareas deberá estar separada por proyecto.
  - Enviar informacion a la API.

### Historia de usuario 3

Usuario requiere ver la información de los status con base a la actualizacion de todo el sitema.

- DoD:
  - Pantalla con boton status y dropdown (Completo, Revisión, Detenido por cliente o Prueba).
  - Función para traer la información de la API.

### Historia de usuario 4

Usuario requiere visualizar a detalle los datos y cada uno de los resultados obtenidos por el total de tiempo registrado y se tendrá que gráficar.

- DoD:
  - Sección para ver la información total de tiempo registrado.
  - Función para mostrar la información que mostrará el porcentaje de tiempo que tardó cada usuario en cada tarea y visualizarlo en la grafica .
  - Enviar el reporte del tiempo registrado al encargado del proyecto.

### Historia de usuario 5

Se requiere ver los tiempos del proyecto con las tareas, sus tiempos y la grafica de estos.

- DoD:
  - Pantalla con botón nombre de usuario y los asignados al proyecto.
  - Sumatoria total del tiempo regustrado en tareas.
  - Grafica general por proyecto con porcentaje de tiempo que trabajo cada ususario.

### Historia de usuario 6

Se requiere enviar alertas en periodos de inactividad o en conexion a redes sociales.

- DoD:
  - Pantalla de alerta cada 20 minitos de inactividad en dicha tarea.
  - Función para mostrar la pregunta si estas activo, durante la conexion en redes sociales.

## Prototipo de Baja Fidelidad

- Prototipo de Baja Fidelidad
  ![alt Prototipo en papel](src/Propaper.png)

---

## Prototipo de Alta Fidelidad

- [Prototipo de Alta Fidelidad](https://www.figma.com/file/SfXXoSduMoM1dw51nbj0kC/TIME-TRACKER-4040APPS?node-id=0%3A1)

  ![alt Prototipo digital](src/DigitalPro.png)

- Paleta de colores
  ![alt Paleta de colores](src/Colors.png)

---

## Bitácora de trabajo

- Día 1: Presentación de reto, ideación de las posibles soluciones y prototipo de baja fidelidad.
- Día 2: Historias de usuario, elección de herramientas a utilizar y prototipo de alta fidelidad.
- Día 3: Retroalimentación de idea propuesta, replanteamiento de herramientas y modificación de prototipo de alta fidelidad.
- Día 4 Talent:
- Día 5 Talent:

---

## Herramientas utilizadas

- Prototipos: [Figma](https://www.figma.com/).
- Base de datos:API cubos
- Framework: [React](https://es.reactjs.org).
- Organización: [Trello](https://trello.com/b/wGM6lGbq/talent-fest).

## Integrantes del squad CORE TRACK

---

- Eugenia Najar [LinkedIn](https://www.linkedin.com/in/eugenianajar/)
- Josseline Acosta [LinkedIn](https://www.linkedin.com/in/jossacosta/)
- Mirey Morales [LinkedIn](https://www.linkedin.com/in/mirey-morales/)
- Maria Lujan Navarro [LinkedIn](https://www.linkedin.com/in/lujan-navarro/)

