/**
 * Funcion para crear el modal que muestra los detalles del producto
 */
function modal() {
    const modalDetalles = document.getElementById('exampleModal-1')

    const modalDialog = document.createElement('div')
    modalDialog.classList.add("modal-dialog")

    const modalContent = document.createElement('div')
    modalContent.classList.add("modal-content")

    const modalHeader = document.createElement('div')
    modalHeader.classList.add("modal-header")

    const btnCerrar = document.createElement('button')
    btnCerrar.classList.add("btn-close")
    btnCerrar.setAttribute("data-bs-dismiss", "modal")
    btnCerrar.type = "button"
    btnCerrar.setAttribute("aria-label", "Close")
    modalHeader.appendChild(btnCerrar)
    modalContent.appendChild(modalHeader)

    const modalBody = document.createElement('div')
    modalBody.classList.add("modal-body")
    modalBody.id = "modalDetalle"
    modalContent.appendChild(modalBody)

    modalDialog.appendChild(modalContent)

    modalDetalles.appendChild(modalDialog)

}

/**
 * 
 * @param {object} item recibimos el objeto del producto que vamos a pintar en el modal
 */

function detallesProducto(item) {
    const modalDetalle = document.getElementById('modalDetalle')
    modalDetalle.textContent = ""
    const nombre = document.createElement('h3')
    nombre.textContent = item.nombre
    modalDetalle.appendChild(nombre)

    const imagen = document.createElement('img')
    imagen.setAttribute("src", `${item.img}`)
    imagen.style.width = "220px"
    modalDetalle.appendChild(imagen)

    const descripcion = document.createElement('p')
    descripcion.textContent = item.des
    modalDetalle.appendChild(descripcion)

    const categoria = document.createElement('p')
    categoria.textContent = item.categoria
    modalDetalle.appendChild(categoria)

    const precio = document.createElement('h3')
    precio.classList.add('precio')
    precio.textContent = `$${item.precio}`
    modalDetalle.appendChild(precio)


}

/**
 * Filtramos los productos por categoria
 */
function filtrarProducto() {
    let producto = document.querySelectorAll("img")
    producto = [...producto]
    console.log(producto)
    modal()
    const myModal = new bootstrap.Modal('#exampleModal-1')
    producto.forEach(item => {
        item.addEventListener('click', e => {
            let id = e.target.parentNode.id
            let productoActual = listaProductos.find(item => item.id == id)
            myModal.show();



            detallesProducto(productoActual)
        })
    })
}
filtrarProducto()