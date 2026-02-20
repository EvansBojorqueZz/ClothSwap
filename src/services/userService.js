export let usuariosRegistrados = [];

export function buscarAmigo(id_amigo) {
    for (let i = 0; i < usuariosRegistrados.length; i++) {
        if (id_amigo === usuariosRegistrados[i].id) {
            return usuariosRegistrados[i];
        }
    }
    throw new Error(`Usuario con id ${id_amigo} no encontrado`);
}

export function cargarSaldo(usuario, monto) {
    if (monto <= 0) {
        throw new Error("El monto a cargar debe ser mayor a cero");
    }
    return usuario.billetera += monto;
}