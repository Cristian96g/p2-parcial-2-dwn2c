/**
 * Creamos una variable para almacenar datos de la publicidades dependiendo la categoria 
 */
let publicidad = [
    {
        categoria: "buzos",
        titulo: "Envio Gratis",
        parrafo: "En la compra de cualquier buzo de la tienda"
    },
    {
        categoria: "remeras",
        titulo: "10% de Descuento",
        parrafo: "En la compra de cualquiera de nuestras remeras de la tienda"
    },
    {
        categoria: "pantalones",
        titulo: "15% Descuento",
        parrafo: "En la compra de la segunda unidad de los pantanlones de nuetra tienda"
    }
]

/**
 * 
 * @param {object} item recibe el objeto de la categoria actual seleccionada
 */
// funcion para crear modal publicidad
function modalPublicidad(item) {
    let modalPopUp = document.querySelector(".popup")
    modalPopUp.textContent = ""


    let btnCerrar = document.createElement('button')
    btnCerrar.id = "close"
    btnCerrar.textContent = "X"



    let tituloModal = document.createElement('h2')
    tituloModal.textContent = item.titulo

    let contenidoModal = document.createElement('p')
    contenidoModal.textContent = item.parrafo
    contenidoModal.style.fontSize = "18px"

    modalPopUp.appendChild(btnCerrar)
    modalPopUp.appendChild(tituloModal)
    modalPopUp.appendChild(contenidoModal)

}


/**
 * Creando el modal para mostrar la publicidad acorde a la categoria 
 */
function activarModal() {
    
    let btnCategoria = document.querySelectorAll('.btnCategoria')
    btnCategoria = [...btnCategoria]

    btnCategoria.forEach(item => {
        item.addEventListener('click', (e) => {

            let btnId = e.target.id
            let categoriaActual = publicidad.find(item => item.categoria == btnId)

            modalPublicidad(categoriaActual)
        

            document.querySelector(".popup").style.display = "block";
            let timeOut = setTimeout(
                function open(){
                    document.querySelector(".popup").style.display = "none";
                },
                10000
            )

            const btnCerrar = document.getElementById('close')
            btnCerrar.addEventListener('click',() => {
                document.querySelector(".popup").style.display = "none"
                clearTimeout(timeOut)
            })
        })
    })
}

activarModal()


