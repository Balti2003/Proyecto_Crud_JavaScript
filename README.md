# Proyecto CRUD con JavaScript

Este proyecto es un CRUD básico implementado en JavaScript que interactúa con la API de prueba de [JSONPlaceholder](https://jsonplaceholder.typicode.com). Permite realizar operaciones como obtener, agregar, editar y eliminar usuarios. 

## Funcionalidades

1. **Obtener Usuarios**: 
   - Los usuarios se obtienen al cargar la página.

2. **Agregar Usuarios**:
   - Se puede agregar un nuevo usuario llenando el formulario con nombre y correo electrónico.
   - Al enviar el formulario, el usuario se agrega (simulado con la API de JSONPlaceholder).

3. **Editar Usuarios**:
   - Se puede seleccionar un usuario existente para editar sus datos. Los campos del formulario se completan automáticamente con los datos seleccionados.
   - Al guardar, la actualización se envía a la API.

4. **Eliminar Usuarios**:
   - Se incluye un botón para eliminar usuarios. Aunque la solicitud DELETE se envía correctamente a la API, no se refleja en la base de datos de prueba (debido a la naturaleza de la API).

## Limitacion

- **Persistencia**: La API de JSONPlaceholder es de prueba, por lo que los cambios (crear, actualizar o eliminar usuarios) no se guardan permanentemente. 

## Tecnologías utilizadas
-HTML
-CSS
-JavaScript
-JSONPlaceholder API

## Formulario

