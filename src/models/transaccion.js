import { CONFIG, historialVentas } from '../config.js';

export class Transaccion {
    constructor(id, prenda, comprador, vendedor) {
        this.id = id;
        this.prenda = prenda;
        this.comprador = comprador;
        this.vendedor = vendedor;
        this.estado = CONFIG.ESTADOS.PENDIENTE;
    };

    responderOferta(decision) {
        if (decision === "Aceptar") {
            if (this.comprador.billetera >= this.prenda.precio) {
                this.comprador.billetera -= this.prenda.precio;
                this.vendedor.billetera += this.prenda.precio;
                this.vendedor.closet = this.vendedor.closet.filter(prenda => prenda !== this.prenda);
                this.comprador.closet.push(this.prenda);
                this.prenda.idUser = this.comprador.id;
                this.estado = CONFIG.ESTADOS.ACEPTADA;
                historialVentas.push(this);
                return console.log("Trato Hecho! Felicidades!");
            } else {
                throw new Error("No hay saldo en la billetera. Carga saldo para poder comprarla");
            }
        }
        if (decision === CONFIG.ESTADOS.RECHAZADA) {
            this.estado = CONFIG.ESTADOS.RECHAZADA;
            return console.warn("Tu oferta fue rechazada :C");
        }

        throw new Error(`Decisión inválida: ${decision}`);
    }
}