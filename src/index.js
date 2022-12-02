const shop = document.getElementById('shop')
const cardDinamica = document.getElementById('card-dinamica')
let total = 0;

let carrito = []


/**
 * Mostrar los productos guardados en el local storage
 */
document.addEventListener('DOMContentLoaded', () => {
    carrito = JSON.parse(localStorage.getItem('carrito')) || []
    productosCarrito()
})


/**
 * funcion para crear dinamicamente el html
 */
const crearProductos = () => {

    listaProductos.forEach((item) => {
        const div = document.createElement('div')
        div.setAttribute("id", `${item.id}`);
        div.classList.add("producto")
        const imagen = document.createElement('img')
        imagen.setAttribute("src", `${item.img}`)
        imagen.style.width = "220px"
        div.appendChild(imagen)

        const detalles = document.createElement('div')
        detalles.classList.add("details");

        const nombre = document.createElement('h3')
        nombre.classList.add('titulo')
        nombre.textContent = item.nombre
        detalles.appendChild(nombre)

        const categoria = document.createElement('p')
        categoria.textContent = item.categoria
        detalles.appendChild(categoria)

        const precio = document.createElement('h3')
        precio.textContent = `$${item.precio}`
        detalles.appendChild(precio)

        // creamos el boton
        const btnComprar = document.createElement('button')
        btnComprar.classList.add("btn", "btn-dark")
        btnComprar.textContent = "Comprar"
        btnComprar.setAttribute("id", `${item.id}`)
        // agregamos un escuchador al boton
        btnComprar.addEventListener('click', añadirAlcarro)

        // agregando a los contenedores padres
        detalles.appendChild(btnComprar)
        div.appendChild(detalles)

        shop.appendChild(div)

    })
}
crearProductos()




/**
 * 
 * @param {object} evento recibe el evento del btn comprar de la funcion crearProductos  
 */
function añadirAlcarro(evento) {
    // con el evento seleccionamos el ID para guardarlo en una variable
    console.log(evento.target.parentNode.parentNode)
    let productoSelec = evento.target.parentNode.parentNode.id

    let productoRecibido = listaProductos.find(item => item.id == productoSelec)
    if (carrito.includes(productoRecibido)) {
        productoRecibido.cantidad++
    }
    else {
        carrito.push(productoRecibido)
    }

    productosCarrito()
}


/**
 *  Comprobamos si el carrito esta vacio al apretar el boton, y si es asi se muestra en el modal que esta vacio
 */
const btnModal = document.getElementById("boton-modal")
btnModal.addEventListener('click', () => {
    const div = document.createElement('div')
    const h2 = document.createElement('h2')
    
    if (carrito.length === 0) {
        cardDinamica.textContent = ""
        h2.textContent = "Tu carrito esta vacio"
        div.appendChild(h2)
        cardDinamica.appendChild(div)
    }

})


/**
 * mostrar productos cargados al carrito
 */
function productosCarrito() {
    cardDinamica.textContent = "";
    // recorremos el carrito para pintar los elementos en pantalla
    carrito.forEach((item) => {
        const miNodo = document.createElement('div')
        miNodo.classList.add("producto")
        miNodo.id = item.id
        // nombre
        const nombre = document.createElement('p')
        nombre.textContent = `${item.nombre}`
        // precio
        const precio = document.createElement('p')
        precio.textContent = `$${item.precio}`
        // categoria
        const categoria = document.createElement('p')
        categoria.textContent = `${item.categoria}`
        // cantidad
        const contenedorCantidad = document.createElement('div')
        contenedorCantidad.classList.add("contenedor-cantidad")
        //Botones cantidad
        const btnAumentar = document.createElement('button')
        btnAumentar.classList.add("btn", "btn-info", "btn-sm", "btn-aumentar")
        btnAumentar.textContent = "+"

        const cantidad = document.createElement('span')
        cantidad.classList.add()
        cantidad.textContent = `${item.cantidad} `

        const btnDisminuir = document.createElement('button')
        btnDisminuir.classList.add("btn", "btn-danger", "btn-sm", "btn-disminuir")
        btnDisminuir.textContent = "-"

        contenedorCantidad.appendChild(btnAumentar)
        contenedorCantidad.appendChild(cantidad)
        contenedorCantidad.appendChild(btnDisminuir)
        // Boton borrar 
        const btnBorrar = document.createElement('button')
        btnBorrar.classList.add("btn", "btn-danger", "btn-md", "btn-borrar")
        btnBorrar.textContent = "Eliminar"

        // imagen
        const img = document.createElement('img')
        img.setAttribute("src", `${item.img}`)
        img.style.width = "150px"

        miNodo.appendChild(img)
        miNodo.appendChild(nombre)
        miNodo.appendChild(precio)
        miNodo.appendChild(categoria)
        miNodo.appendChild(contenedorCantidad)
        miNodo.appendChild(btnBorrar)

        cardDinamica.appendChild(miNodo)

    })

    const preciototal = document.createElement('h3')
    preciototal.textContent = `Total $${sumar().toFixed(3)}`

    // Se crea el boton de vaciar carrito unicamente si el carrito tiene algun producto
    if (carrito.length > 0) {
        const btnVaciar = document.createElement('button')
        btnVaciar.classList.add("btn", "btn-danger", "btn-md", "btn-vaciar")
        btnVaciar.textContent = "Vaciar carrito"
        btnVaciar.addEventListener('click', vaciarCarrito)
        cardDinamica.appendChild(btnVaciar)
    }
    cardDinamica.appendChild(preciototal)

    aumentarCantidad()
    removerProducto()
    storage()

}


/**
 * @returns {Number} retorna la suma total del precio segun las cantidades
 */
function sumar() {
    let sumaTotal;
    return carrito.reduce((suma, item) => {
        sumaTotal = suma + item.precio * item.cantidad
        return sumaTotal
    }, 0)
}




/**
 * funcion para aumentar y disminuir cantidad
 */
function aumentarCantidad() {
    let btnAumentar = document.querySelectorAll('.btn-sm')
    btnAumentar = [...btnAumentar]

    btnAumentar.forEach(item => {
        item.addEventListener('click', (e) => {
            // guardamos el elemento padre del boton en el que se genero el click
            const producto = e.target.parentNode.parentNode

            let productoActual = carrito.find(item => item.id == producto.id)
            // preguntamos si elemento ya se encuentra cargado
            if (item.classList.contains("btn-aumentar")) {
                productoActual.cantidad++
            }
            if (item.classList.contains("btn-disminuir")) {
                if (productoActual.cantidad > 1) {
                    productoActual.cantidad--
                }
            }
            productosCarrito()
        })
    })

}


/**
 * funcion para eliminar producto
 */
function removerProducto() {
    let btnBorrar = document.querySelectorAll('.btn-borrar')
    btnBorrar = [...btnBorrar]
    btnBorrar.forEach(item => {
        item.addEventListener('click', e => {
            const producto = e.target.parentNode
            let productoActual = carrito.find(item => item.id == producto.id)
            carrito = carrito.filter(item => item.id !== productoActual.id)
            productosCarrito()
        })
    })
}


/**
 * Funcion para guardar en localStorage
 */
 function storage() {
    localStorage.setItem('carrito', JSON.stringify(carrito))
}



/**
 * 
 * @param {object} producto recibe un objeto de la funcion detallesModal
 */
function filtarCategoria(producto) {
    console.log(typeof(producto))
    shop.textContent = "";
    return producto.forEach((item) => {
        const div = document.createElement('div')
        div.setAttribute("id", `${item.id}`);
        div.classList.add("producto")
        const imagen = document.createElement('img')
        imagen.setAttribute("src", `${item.img}`)
        imagen.style.width = "220px"
        div.appendChild(imagen)

        const detalles = document.createElement('div')
        detalles.classList.add("details");

        const nombre = document.createElement('h3')
        nombre.textContent = item.nombre
        nombre.classList.add('titulo')
        detalles.appendChild(nombre)

        const categoria = document.createElement('p')
        categoria.textContent = item.categoria
        detalles.appendChild(categoria)

        const precio = document.createElement('h3')
        precio.classList.add('precio')
        precio.textContent = `$${item.precio}`
        detalles.appendChild(precio)

        // creamos el boton
        const btnComprar = document.createElement('button')
        btnComprar.classList.add("btn", "btn-dark")
        btnComprar.textContent = "Comprar"
        btnComprar.setAttribute("id", `${item.id}`)
        // agregamos un escuchador al boton
        btnComprar.addEventListener('click', añadirAlcarro)

        // agregando a los contenedores padres
        detalles.appendChild(btnComprar)
        div.appendChild(detalles)

        shop.appendChild(div)


    })
}


function detallesModal() {

    let btnCategoria = document.querySelectorAll('.btnCategoria')
    btnCategoria = [...btnCategoria]
    btnCategoria.forEach(item => {
        item.addEventListener('click', (e) => {
            let btnId = e.target.id
            let categoriaActual = listaProductos.filter(item => item.categoria == btnId)
            filtarCategoria(categoriaActual)
        })
    })

}

detallesModal()







/**
 * funcion para vaciar el carrito
 */
function vaciarCarrito() {

    carrito = []
    productosCarrito()
}