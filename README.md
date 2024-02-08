# Biblioteca APP Angular 10 por Antony G Chambi

## Descripción
El siguiente Frontend está desarrollado para mostrar los dos reportes solicitados. Aquí puedes encontrar el código fuente del proyecto. Sin embargo, debido a problemas de compatibilidad con Angular 10 y considerando que la última versión estable es Angular 16, no se instalaron nuevas dependencias que habrían mejorado el desempeño y la experiencia del usuario. Con más tiempo, sería posible agregar nuevas dependencias para enriquecer la experiencia del usuario.

## Instalación

Para configurar y ejecutar este proyecto en tu entorno local, sigue los siguientes pasos:

1. Clona el repositorio:
2. Navega al directorio del proyecto:
3. Instala las dependencias del proyecto:
4. Inicia el servidor de desarrollo de Angular:

5. Abre tu navegador y visita [http://localhost:4200](http://localhost:4200) para ver la aplicación en funcionamiento.

## Características
> Aquí puedes describir las características principales de la aplicación, como los reportes que se muestran y cualquier otra funcionalidad relevante.

## Problemas Conocidos y Soluciones
> Dado que mencionaste problemas con Angular 10 y la imposibilidad de instalar nuevas dependencias, sería útil documentar aquí cualquier problema conocido y sus posibles soluciones o workarounds.

## Rutas API REST

Este proyecto soporta las operaciones CRUD básicas (Crear, Leer, Actualizar, Eliminar) a través de los siguientes endpoints:

### Recursos Básicos

- **Autores**
  - `GET /autor`: Listar todos los autores.
  - `POST /autor`: Crear un nuevo autor.
  - `GET /autor/{id}`: Obtener detalles de un autor específico.
  - `PUT /autor/{id}`: Actualizar un autor existente.
  - `DELETE /autor/{id}`: Eliminar un autor.

- **Libros**
  - `GET /libros`: Listar todos los libros.
  - `POST /libros`: Crear un nuevo libro.
  - `GET /libros/{id}`: Obtener detalles de un libro específico.
  - `PUT /libros/{id}`: Actualizar un libro existente.
  - `DELETE /libros/{id}`: Eliminar un libro.

- **Clientes**
  - `GET /cliente`: Listar todos los clientes.
  - `POST /cliente`: Crear un nuevo cliente.
  - `GET /cliente/{id}`: Obtener detalles de un cliente específico.
  - `PUT /cliente/{id}`: Actualizar un cliente existente.
  - `DELETE /cliente/{id}`: Eliminar un cliente.

- **Préstamos**
  - `GET /prestamos`: Listar todos los préstamos.
  - `POST /prestamos`: Crear un nuevo préstamo.
  - `GET /prestamos/{id}`: Obtener detalles de un préstamo específico.
  - `PUT /prestamos/{id}`: Actualizar un préstamo existente.
  - `DELETE /prestamos/{id}`: Eliminar un préstamo.

### Lógica de Negocio (Reportes)

- `GET /reportes/prestamos-por-mes`: Reporte de préstamos por mes.
- `GET /reportes/prestamos-por-semana`: Reporte de préstamos por semana.
- `GET /reportes/libros-prestados-mes-actual`: Reporte de libros prestados en el mes actual.
- `GET /reportes/libros-prestados-semana-actual`: Reporte de libros prestados en la semana actual.
- `GET /reportes/total-libros`: Reporte del total de libros.
