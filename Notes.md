Estructura
- Inicio (Solo 3 productos)
- Productos (la lista entera de productos) y filtrado por categoría
- Detalle del producto(/productos/[slug])
- Comprar (/comprar) -Resumen del carrito de compras. Copiar el checkout de cualquier pag
- Iniciar sesión (/login)
- Registro (/registrar)
- Compras anteriores (/compras)


Flujo del usuario
- Ingreso al inicio, puedo dar clic a todos los productos o bien comprar uno de los 3 listados
    - Si doy a uno de los tres => detalle del producto
    - Si voy a ver todos => /productos
- Dentro de la descripción del producto, subir la cantidad de items a comprar
    - A más de subir items, un btn para submit la cantidad final
- Cuando se genera el submit, detecta dos casos:
    - Si el usuario está logeago o no
        - Si está logeado => resumen del producto
        - ! Logeado => iniciar sesión
            - Si tiene cuenta => logear y luego mandar a resumen de compra
            - Si no tiene cuenta => crear cuenta => logear=> mandar a resumen de compra
- En la pagina de resumen de compra, permitir ingresar datos y luego tener un boton de submit, si se clikea, se hace un modal de gracias por comprar, tu pedido será enviado, etc
    - El modal tiene dos opciones
        - Seguir comprando: mandar a página con todos los productos
        - Ver historial de compras => página de historial

Necesito múltiples páginas, puede ser usando Next Js o simplemente React App
- Si uso vanilla, el control de estilos es super simple
- Si uso next js no necesito routing
- Si uso next js no necesito slug tan complicado
    - En el caso del slug en vanilla debería seguir algo así [https://stackoverflow.com/questions/71694404/dynamically-create-pages-based-on-slug-from-api-in-reactjs]
    - Busca documentación de use params en react Js


Info importante para tener a la mano

El usuario se crea através de la API, su historial se envía como post y su carrito se crea y se actualiza con post. 

Website de documentación API:
https://codealodev.notion.site/Codealo-Commerce-API-Docs-8a648b5f6f774e9eb87b7b5e729e3901

URL Base de API: https://codealo-commerce-api.onrender.com/

TODOS LOS PRODUCTOS VAN A LA REQUEST: "/products"

Código para hacer fetch de productos

`
async function getProducts(){
  const url ="https://codealo-commerce-cms.onrender.com/products"
  const response= await fetch(url)
  const products = await response.json()
  return products
}

async function showProducts(){
  const products= await getProducts()
  console.log(products)
}

showProducts()
`

Para obtener solo un producto, se puede hacer un get products/[title]




--------------------------
Enlace sobre como utilizar routing
https://www.freecodecamp.org/news/how-to-use-react-router-version-6/#:~:text=To%20install%20React%20Router%2C%20all,%2Drouter%2Ddom%406%20.