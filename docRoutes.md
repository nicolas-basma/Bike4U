# Documentación de la API

## Rutas

### 1. POST /signup

Registra un nuevo usuario en el sistema.

### 2. POST /login

Inicia sesión con un usuario existente.

### 3. GET /all-users

Obtiene una lista de todos los usuarios.

### 4. GET /user/<int:id>

Obtiene la información de un usuario específico por ID.

### 5. DELETE /delete-user/<int:id>

Elimina un usuario específico por ID.

### 6. PUT /edit-user/<int:id>

Edita la información de un usuario específico por ID.

### 7. PUT /edit-user-password/<int:id>

Edita la contraseña de un usuario específico por ID. Esta ruta debe estar protegida.

### 8. GET /recover-user-password/<string:email>

Recupera la contraseña de un usuario a través de su correo electrónico. Envía un correo electrónico al usuario con la nueva contraseña.

### 9. POST /send-email

Envía un correo electrónico desde el formulario de contacto.

### 10. GET /bikes

Obtiene una lista de todas las bicicletas.

### 11. GET /images

Obtiene las fotos de todas las bicicletas.

### 12. GET /parts

Obtiene una lista de todas las partes de las bicicletas.

### 13. GET /bikes/<string:terrain>

Obtiene las bicicletas de un tipo de terreno específico.

### 14. GET /bikes/<string:terrain>/<int:id>

Obtiene una bicicleta específica por ID y tipo de terreno.

### 15. GET /parts/<string:terrain>/<string:size>

Obtiene las partes de las bicicletas de un tamaño y tipo de terreno específicos.

### 16. POST /user/<int:user_id>/add-favorite-bike/<int:bike_id>

Agrega una bicicleta a los favoritos de un usuario específico.

### 17. POST /user/<int:user_id>/add-favorite-part/<int:part_id>

Agrega una parte de bicicleta a los favoritos de un usuario específico.

### 18. GET /user/<int:user_id>/favorites

Obtiene los favoritos de un usuario específico.

### 19. DELETE /user/<int:user_id>/delete-favorite-bike/<int:bike_id>

Elimina una bicicleta de los favoritos de un usuario específico.

### 20. DELETE /user/<int:user_id>/delete-favorite-part/<int:part_id>

Elimina una parte de bicicleta de los favoritos de un usuario específico.
