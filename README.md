# ClothSwap - App de Intercambio de Ropa

¡Bienvenido a ClothSwap! Esta es una aplicación lógica construida en JavaScript para gestionar el inventario, préstamos, ventas e intercambios de ropa entre amigos.

## Estado del Proyecto: Avance 1 - Arquitectura Modular
Actualmente, el proyecto cuenta con una estructura modular funcional que permite crear usuarios, gestionar un "clóset" virtual y procesar transacciones básicas con validación de saldo.

## Funcionalidades Actuales
- **Gestión de Usuarios**: Creación de perfiles con closet y billetera virtual.
- **Sistema de Inventario**: Registro de prendas con categorías, estados (nuevo/usado) y permisos (venta/préstamo/intercambio).
- **Lógica de Transacciones**: Sistema para realizar ofertas, validar saldo del comprador y realizar el cambio de dueño de forma automática.
- **Marketplace**: Filtrado de prendas por presupuesto y categoría.

##  Estructura de Carpetas
El proyecto está organizado de la siguiente manera:
- `/src/models`: Definición de los moldes de datos (Ropa, User, Transaccion).
- `/src/services`: Lógica de negocio (Marketplace, Gestión de Usuarios).
- `/src/config.js`: Constantes y configuraciones globales.
- `index.js`: Punto de entrada y scripts de prueba.

## Cómo Correr el Proyecto
Para probar la lógica actual en tu terminal:
1. Asegúrate de tener instalado [Node.js](https://nodejs.org/).
2. Clona este repositorio.
3. Navega a la carpeta del proyecto: `cd mi_app_ropa`
4. Ejecuta el comando: `node index.js`


##  Autor
**Evans Bojorquez** *Estudiante de Ingeniería en Computación | UNAM*  
[GitHub Profile](https://github.com/EvansBojorqueZz)