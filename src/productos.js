/**
 * Creamos la clase productos
 */
class Productos {
    constructor(id, nombre, precio, des, img, categoria) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.des = des;
        this.img = img;
        this.categoria = categoria
        this.cantidad = 1;
    }
}
/**
 * Variable para almacenar los productos instanciados de la clase
 */
let listaProductos = []
/**
 * instanciamos de la clase producto y pusheamos al array lista productos
 */


const bNike = new Productos(1, "Buzo Nike Sportswear Sport Essentials", 18.750.toFixed(3), "Buzo con capucha  corte relajado, te da un estilo simple y a la vez moderno, completa tu vestuario para cualquier plan en épocas de bajas temperaturas además de permitirte moverte fácilmente.", "images/Bnike.jfif", "buzos")
listaProductos.push(bNike)

const bVenom = new Productos(2, "Buzo Jack Lee Canguro Venom", 16.798.toFixed(3), "Su diseño te da un toque clásico y urbano, su material lo hace cálido y suave al usarlo, mientras que las costuras y la capucha te darán un look relajado. ", "images/Bvenom.jfif", "buzos")
listaProductos.push(bVenom)

const bAdidas = new Productos(3, "Buzo adidas Graphic Crew", 31.200.toFixed(3), "Su diseño discreto está potenciado por el logo minimalista en el pecho y un corte versátil que podes combinar con todos tus outfits favoritos y sacarle el máximo provecho. ", "images/Badidas.jfif", "buzos")
listaProductos.push(bAdidas)

const rJordan = new Productos(4, "Remera Nike Jordan AJ5 85", 8.120.toFixed(3), "Tiene estampado el diseño frontal con el número y jersey que usó MJ en los Toros de Chicago. Ya la podés agregar a tu pila de favoritas, no te la vas a querer sacar!", "images/Rjordan.jfif", "remeras")
listaProductos.push(rJordan)

const rAdidas = new Productos(5, "Remera adidas Trefoil", 6.150.toFixed(3), "Lleva un clásico con onda con la Remera adidas Trefoil, diseñada con un corte para todos los días y un estampado moderno para mejorar tu outfit y lucirlo en cualquier ocasión.", "images/Radidas.jfif", "remeras")
listaProductos.push(rAdidas)

const rPuma = new Productos(6, "Remera Puma Downtown Graphic", 9.990.toFixed(3), "su corte casi oversized y las estampadas del frente asociadas al planeta y la naturaleza vuelven esta prenda singularmente única y los colores del diseño agregan resalte, sin perder la elegancia.", "images/Rpuma.jfif", "remeras")
listaProductos.push(rPuma)

const pNike = new Productos(7, "Pantalón Nike Sportswear Sport Essentials", 17.999.toFixed(3), "El Pantalón Nike Sportswear es una perfecta compañia en épocas de bajas temperaturas. Su tejido Fleece está cepillado para ofrecer mayor suavidad durante el tiempo que lo lleves puesto y se comibina con un diseño inspirado en el atletismo. ", "images/Pnike.jfif", "pantalones")
listaProductos.push(pNike)

const pPuma = new Productos(8, "Pantalón Puma Classics Cargo Wv", 16.829.toFixed(3), "El pantalón Puma Classics Cargo Wv tiene que ver con la comodidad y la practicidad, además de ser una contribución al planeta. Porque están fabricados con algodón de Better Cotton Initiative, que trata de cultivo de algodón sostenible.", "images/Ppuma.jfif", "pantalones")
listaProductos.push(pPuma)

const pAdidas = new Productos(9, "Pantalón adidas Trefoil", 15.999.toFixed(3), "Los pantalones perfectos cumplen tres criterios esenciales: Comodidad. Estilo. Facilidad de uso. Este par de adidas tiene un diseño minimalista y tejido polar grueso para mantenerte cómodo mientras te movés o te relajás.", "images/Padidas.jfif", "pantalones")
listaProductos.push(pAdidas)

