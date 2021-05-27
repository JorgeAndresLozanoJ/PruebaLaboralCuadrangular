# OASPRUEBA
Prueba técnica Cuadrangulares
# Descripción del programa 

El entorno es un enlace entre una base de datos llamada equipos, y el cliente, la aplicación permite que se ingresen cuantos equipos se requieran, con nombre a gusto, hecho eso, se puede acceder a una tabla, la cual muestra los equipos registrados, desde la cual se puede editar para añadir victorias derrotas o empates según corresponda

# Dependencias
: 
  - Angular cli 10.1
  - Node.js
  - Typescript
  - Xamp/MYSQL

# Ejecución

1. Para realizar la ejecución de la aplicación, primero se debe conectar a una base de datos generada en MYSQL, para lo que se debe ejecutar el comando:
- mysql -u root, o en su defecto el usuario de la base de datos, el archivo para generar la base de datos se encuentra en la carpeta "database", archivo "database.sql", Se debe utilizar este codigo en el entorno mysql deseado, ya sea conectandose por consola o por interfaz. una vez creada y coenctada la base de datos local se puede acceder a las funcionalidades de la página.
2. Para realizar la conexión con el servidor, se deben ejecutar los comandos npm run build y npm run dev desde la consola, ubicada en la carpeta server.
3. Para conectar la aplicación con el servidor, y desplegarla en el navegador, se ejecuta en otra consola el comando ng serve, que asigna el puerto 4200 del localhost a la aplicación, http://localhost:4200/. Desde allí se podrá acceder a las diferentes opciones de la app.


# Navegación
La primer a ventana que se despliega es la tabla con los equipos contenidos en la Base de datos hasta el momento, que por defecto esta vacía hasta que se llene la base de datos, en esta ventana, se muestra el computo de puntos de los equipos registrados.
Para eliminar un equipo almacenado en la base de datos solo es necesario clickar el botón que se encuentra frente al equipo a eliminar.
![alt text](https://github.com/JorgeAndresLozanoJ/PruebaLaboralCuadrangular/blob/main/Imagenes%20Readme/ActEquipos.png)

Para llenar la base de datos se debe dar click en la pestaña que dice "Registrar equipos" donde será solicitado el nombre del equipo y por defecto los partidos ganados, empatados y perdidos comenzarán en "0". Cada vez que se registra un equipo se regresará automaticamente a la página donde se puede observar la tabla de equipos registrados.
![Ingreso](https://github.com/JorgeAndresLozanoJ/PruebaLaboralCuadrangular/blob/main/Imagenes%20Readme/PagPrincipal.png)

En caso de seleccionar "actualizar" en la vista de la tabla se dirige a esta página, donde es posible actualizar las estadisticas de los equipos registrados.
![alt text](https://github.com/JorgeAndresLozanoJ/PruebaLaboralCuadrangular/blob/main/Imagenes%20Readme/RegistroEquipos.png)
