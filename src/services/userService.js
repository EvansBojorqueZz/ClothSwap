export let usuariosRegistrados = []; 

export function buscarAmigo(id_amigo){
    for ( let i=0; i<usuariosRegistrados.length ; i++){
        if (id_amigo === usuariosRegistrados[i].id){
            return usuariosRegistrados[i];
        }
    }
    console.log("Usuario no encontrado");
    return null;
}

export function cargarSaldo(usuario, monto){
    return usuario.billetera += monto;
}