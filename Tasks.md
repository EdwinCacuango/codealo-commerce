1. Instalar Tw y React router (check)
    1. Definir los archivos de cada página y enrutarlos
2. Definir context:
    1. Para el carrito
    2. Para el listado de productos (Puede no ser necesario ya que se necestia en contadas ocasiones: solo )
    3. Para el usuario logeado** Buscar como hacer
        1. Dentro del usuario, almacenar el historial de sus compras
            El historial contiene fecha de compra, item, precio de intem, cantidad de item, si el pedido fue pagado y entregado
            Por defecto, todos los pedidos son entregados. La entrega no tiene fecha
3. Crear página de inicio (listo)
4. Crear una página de listado total (listo)
    1. Listar mediante map todos los productos
    2. Crear el fitro (listo)
        Al inicio, el filtro muestra todos
        Incluir una opción en la lista desplegable que permita aquello
5. Crear una página específica para cada producto
    1. Configurar routing con use params
    2. Dentro de cada página, seguir el esquema de la tienda ya creada
    pero sin galería para imágenes
    3. Crear una función de submit para setear el carrito
    4. Validar si el usuario está logeado o no
6. Crear las funciones para almacenar la sesión del sujeto de manera 
    permanente (Esto por el historial)- Verificar si se puede en la API
    o si debe hacerse en local
7. Crear una página de resumen de compra
    Esta incluye todo lo del carrito
8. Condicionar ir a la página de compra si el usuario está logeado
    1. Crear una página de inicio de sesión
    2. Crear una págna de crear cuenta
        Nombre, mail, contraseña. (No datos de envío, eso se pide en el resumen de la venta)
9. Si el usuario está logeado y en la página de compra, 
    finaliza la compra una vez que todos los datos estén validados en el front
    Para la validación del front, usa ese paquete que enseñaban en el curso de la UBA
10. Crear modal con los links a todos los productos o al historial de compra
11. Condicionar el modal a cuando la compra acabe
12. Crear una página con la historia de compra
