Aquí tienes la documentación en formato markdown:

### Endpoint `/signup`

Este endpoint permite crear un nuevo usuario en la base de datos. Recibe un cuerpo de solicitud JSON que contiene el nombre, correo electrónico y contraseña del usuario. El endpoint encripta la contraseña y crea un nuevo objeto `User` en la base de datos con la información proporcionada. Luego devuelve el usuario serializado en formato JSON.

```http
POST /signup HTTP/1.1
Content-Type: application/json

{
    "nombre": "Juan Perez",
    "correo_electronico": "juanperez@example.com",
    "contraseña": "123456"
}
```

#### Parámetros

| Parámetro          | Tipo   | Descripción                                 |
| ------------------ | ------ | ------------------------------------------- |
| nombre             | string | Nombre completo del usuario                 |
| correo_electronico | string | Dirección de correo electrónico del usuario |
| contraseña         | string | Contraseña del usuario                      |

#### Respuesta

El endpoint devuelve el usuario creado en formato JSON.

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "id": 1,
    "nombre": "Juan Perez",
    "correo_electronico": "juanperez@example.com"
}
```

### Endpoint `/login`

Este endpoint permite que los usuarios inicien sesión en la aplicación. Recibe un cuerpo de solicitud JSON que contiene el correo electrónico y la contraseña del usuario. El endpoint verifica que el usuario existe en la base de datos y que la contraseña proporcionada coincide con la contraseña encriptada almacenada en la base de datos. Si la autenticación es exitosa, se devuelve un token de acceso JWT y el nombre del usuario en formato JSON.

```http
POST /login HTTP/1.1
Content-Type: application/json

{
    "correo_electronico": "juanperez@example.com",
    "contraseña": "123456"
}
```

#### Parámetros

| Parámetro          | Tipo   | Descripción                                 |
| ------------------ | ------ | ------------------------------------------- |
| correo_electronico | string | Dirección de correo electrónico del usuario |
| contraseña         | string | Contraseña del usuario                      |

#### Respuesta

El endpoint devuelve un token de acceso JWT y el nombre del usuario en formato JSON.

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "nombre": "Juan Perez",
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwibmFtZSI6Ikp1YW4gUGVyZXoiLCJpYXQiOjE1MTYyMzkwMjJ9.Ts9sKzVGsDTbcWZ0vQZ7JgAePXePusS5KjQa1S9l1J4"
}
```

### Endpoint `/allusers`

Este endpoint devuelve una lista de todos los usuarios registrados en la base de datos en formato JSON.

```http
GET /allusers HTTP/1.1
```

#### Respuesta

El endpoint devuelve una lista de usuarios en formato JSON.

```http
HTTP/1.1 200 OK
Content-Type: application/json

[
    {
        "id": 1,
        "nombre": "Juan Perez",
        "correo_electronico": "juanperez@example.com"
    },
    {
        "id": 2,
        "nombre": "Maria Garcia",
        "correo_electronico": "mariagarcia@example.com"
    }
]
```
