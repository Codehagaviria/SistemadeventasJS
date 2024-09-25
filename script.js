let inventario=[
    {id:1, nombre:"camisas",precio:100000,disponible:true,tallas:{
            XS:20,
            S:50,
            M:35,
            L:150,
            XL:25
    }},
    {id:2, nombre:"pantalones",precio:{
        XS:100000,
        S:115000,
        M:300000,
        L:150000,
        XL:25000}, disponible:true,tallas:{
        XS:20,
        S:50,
        M:35,
        L:150,
        XL:25
    }},
    {id:3, nombre:"zapatos",precio:250000, disponible:true,tallas:40
    }
];

//Agregar Productos
function Agregar(productos){
    inventario.push(productos);
    document.write(`productos:${inventario.nombre}.agregar`)
};

//Mostrar el inventario
document.write("<br><h2>Stock total</h2>")
inventario.forEach((productos)=>{
    const{nombre,precio,disponible}=productos   
    const disponibilidadproducto=disponible ? 'Disponible':'Agotado'

    document.write(`Nombre:${nombre},Precio:${precio}, Disponibilidad:${disponible}`);
})

//función para agregar un producto
//4 porq el push agrega elemento en la ultima posicion tenemos 3 id agregados inciales.

function ejecutar(){
    const Agregar={id:4, nombre: "camisetas", precio:35000, disponible:true};
                                                               
}
