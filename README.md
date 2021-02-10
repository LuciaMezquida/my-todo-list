<img src="https://media.giphy.com/media/H4iCOH5qHMP6qwIRGF/giphy.gif" width="200">

# My TODO list

Vamos a realizar una aplicación simple de lista de tareas con una funcionalidad básica:

1. Completar una tarea 
1. Desmarcar una tarea completada 
1. Añadir una tarea nueva

## Guía de inicio rápido

> **NOTA:** Necesitas tener instalado [Node JS](https://nodejs.org/)

### Arrancar el proyecto desde cero:

Si has decidido clonar este repo,:
1. **Abre una terminal** en la carpeta raíz de tu repositorio.
1. **Instala las dependencias** locales ejecutando en la terminal el comando:

```bash
npm install
```

### Para arrancar el proyecto:

Una vez hemos instalado las dependencias, vamos a arrancar el proyecto. Para ello ejecuta el comando:

```bash
npm start
```

## La web

![Imagen de la web](https://i.ibb.co/QMDzd8C/Captura-de-pantalla-2021-02-08-a-las-19-45-05.png")

## Estructura de carpetas

```
src
 ├─ html // los ficheros de esta carpeta se copian en public/api/
 |  ├─ partials
 |  |  ├─ addNewTask.html
 |  |  ├─ footer.html
 |  |  └─ main.html
 |  └─ index.html
 ├─ images
 |  └─ list.png
 ├─ js // los ficheros de esta carpeta se concatenan en el fichero main.js y este se guarda en public/main.js
 |  ├─ 01-variables.js
 |  ├─ 02-create-date.js
 |  ├─ 03-create-tasks-list.js
 |  ├─ 04-manage-every-task.js
 |  ├─ 05-local-storage.js
 |  └─ 06-events.js
 └─ scss
    ├─ core
    |  ├─ _reset.scss
    |  └─ _variables.scss
    ├─ layout
    |  ├─ _addNewTask.scss
    |  ├─ _footer.scss
    |  └─ _main.scss
    └─ pages
    |  └─ _index.scss
    └─ _main.scss
 
```

