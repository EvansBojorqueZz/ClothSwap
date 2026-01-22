import { usuariosRegistrados } from './userService.js';

export function mostrarCloset(usuario, filtroCategoria){
    console.log("Closet de: " + usuario.nombre + ":");
    for (let i = 0; i < usuario.closet.length ; i++){
        if( usuario.closet[i].categoria === filtroCategoria){
            console.log("Prenda: " + usuario.closet[i].nombre + " - " + "Estado: " + usuario.closet[i].estado);
        }
    } 
}

export function validarIntencion(prenda, intencion){
    if(prenda.permisos.includes(intencion)){
        return true;
    } else {
        return false;
    }
}

export function marketplace(presupuestoMaximo, categoriaDeseada, ordenamiento){
    return usuariosRegistrados.flatMap(usuario => {
        return usuario.closet.map(prenda => {
            return {
                nombre: prenda.nombre,
                precio: prenda.precio,
                categoria: prenda.categoria,
                propietario: usuario.nombre 
            };
        });
    })
    .filter(prenda => {
        return prenda.precio <= presupuestoMaximo && prenda.categoria === categoriaDeseada;
    })
    .sort((a,b)=>{
        if ( ordenamiento === "asc"){
            return a.precio - b.precio;
        } else {
            return b.precio - a.precio;
        }
    });
}