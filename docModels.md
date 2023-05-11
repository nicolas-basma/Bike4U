# Modelo de base de datos

Este modelo de base de datos contiene dos tablas principales: `User` y `Parts`, y una tabla de relación muchos a muchos llamada `favorites_parts`.

## Tabla favorites_parts

Esta tabla almacena las relaciones entre los usuarios y sus partes favoritas.

| Campo    | Tipo de dato | Descripción                             |
| -------- | ------------ | --------------------------------------- |
| user_id  | Integer      | Clave externa que referencia a User.id  |
| parts_id | Integer      | Clave externa que referencia a Parts.id |

## Clase User

Esta clase representa a un usuario en la aplicación.

| Campo     | Tipo de dato | Descripción                                                        |
| --------- | ------------ | ------------------------------------------------------------------ |
| id        | Integer      | Clave primaria                                                     |
| name      | String       | Nombre del usuario                                                 |
| lastname  | String       | Apellido del usuario                                               |
| email     | String(120)  | Correo electrónico único del usuario                               |
| size      | String       | Tamaño del usuario                                                 |
| weight    | String       | Peso del usuario                                                   |
| password  | String       | Contraseña del usuario (almacenada cifrada)                        |
| favorites | relationship | Relación con la tabla Parts a través de la tabla `favorites_parts` |
| is_active | Boolean      | Indica si el usuario está activo                                   |

### Métodos

- `verify(password)`: Comprueba si la contraseña proporcionada es correcta.
- `serialize()`: Retorna un diccionario con la información del usuario.

## Clase Parts

Esta clase representa las partes de la aplicación.

| Campo       | Tipo de dato | Descripción                         |
| ----------- | ------------ | ----------------------------------- |
| id          | Integer      | Clave primaria                      |
| model       | String       | Modelo de la parte                  |
| description | String       | Descripción de la parte             |
| link        | String       | Enlace para obtener más información |
| size        | String       | Tamaño de la parte                  |

### Métodos

- `serialize()`: Retorna un diccionario con la información de la parte.

```

```
