# API de Bike4U

Este módulo maneja el inicio del servidor API, la carga de la base de datos y la adición de los puntos finales.

## Endpoints

### POST /signup

- Descripción: Crea un nuevo usuario en la base de datos y devuelve el usuario serializado.
- Parámetros: JSON en el cuerpo de la solicitud con los siguientes campos:
  - name (str)
  - email (str)
  - password (str)

### POST /login

- Descripción: Permite que el usuario inicie sesión en la página web (si está registrado); de lo contrario, devuelve un error 403.
- Parámetros: JSON en el cuerpo de la solicitud con los siguientes campos:
  - email (str)
  - password (str)

### GET /allusers

- Descripción: Devuelve todos los usuarios en la base de datos.

### GET /user/:id

- Descripción: Devuelve un usuario específico mediante su ID.
- Parámetros: ID del usuario (int) en la ruta de la URL.

### DELETE /deleteuser/:id

- Descripción: Elimina un usuario mediante su ID.
- Parámetros: ID del usuario (int) en la ruta de la URL.

### PUT /user/:id/edit

- Descripción: Edita la información de un usuario específico.
- Parámetros:
  - ID del usuario (int) en la ruta de la URL.
  - JSON en el cuerpo de la solicitud con los siguientes campos:
    - name (str)
    - email (str)
    - password (str)

### POST /send-email

- Descripción: Envía un correo electrónico desde el formulario de contacto.
- Parámetros: JSON en el cuerpo de la solicitud con los siguientes campos:
  - email (str)
  - message (str)
  - name (str)

```

Esta documentación describe los diferentes puntos finales en el módulo API de Bike4U y los parámetros necesarios para cada uno de ellos.
```
