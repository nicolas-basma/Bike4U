# Documentación de la Base de Datos

## Tablas

### 1. favorites_parts

Es una tabla de relación entre usuarios y partes de bicicleta favoritas.

- `user_id`: Campo de tipo entero. Clave foránea que hace referencia a la id del usuario en la tabla `user`. Parte de la clave primaria.
- `bike_part_id`: Campo de tipo entero. Clave foránea que hace referencia a la id de la parte de bicicleta en la tabla `bike_part`. Parte de la clave primaria.

### 2. favorites_bikes

Es una tabla de relación entre usuarios y bicicletas favoritas.

- `user_id`: Campo de tipo entero. Clave foránea que hace referencia a la id del usuario en la tabla `user`. Parte de la clave primaria.
- `bike_id`: Campo de tipo entero. Clave foránea que hace referencia a la id de la bicicleta en la tabla `bike`. Parte de la clave primaria.

## Modelos

### 1. User

Representa a un usuario en el sistema.

#### Campos:

- `id`: Campo de tipo entero. Clave primaria.
- `name`: Campo de tipo String. No puede ser nulo.
- `lastname`: Campo de tipo String. No puede ser nulo.
- `email`: Campo de tipo String. Debe ser único y no puede ser nulo.
- `size`: Campo de tipo String. No puede ser nulo.
- `weight`: Campo de tipo String. No puede ser nulo.
- `bike_type`: Campo de tipo String. No puede ser nulo.
- `password`: Campo de tipo String. No puede ser nulo.
- `is_active`: Campo de tipo Boolean. No puede ser nulo.
- `favorites_parts`: Relación con el modelo `BikePart`. Referencia a las partes de bicicleta favoritas del usuario.
- `favorites_bikes`: Relación con el modelo `Bike`. Referencia a las bicicletas favoritas del usuario.

### 2. BikePart

Representa una parte de bicicleta en el sistema.

#### Campos:

- `id`: Campo de tipo entero. Clave primaria.
- `part`: Campo de tipo String. No puede ser nulo.
- `terrain`: Campo de tipo String. No puede ser nulo.
- `size`: Campo de tipo String. No puede ser nulo.
- `title`: Campo de tipo String. No puede ser nulo.
- `image`: Campo de tipo String. No puede ser nulo.
- `link`: Campo de tipo String. No puede ser nulo.

### 3. Bike

Representa una bicicleta en el sistema.

#### Campos:

- `id`: Campo de tipo entero. Clave primaria.
- `title`: Campo de tipo String. No puede ser nulo.
- `image`: Campo de tipo String. No puede ser nulo.
- `link`: Campo de tipo String. No puede ser nulo.
- `terrain`: Campo de tipo String. No puede ser nulo.
- `description`: Campo de tipo String. No puede ser nulo.
