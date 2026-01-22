// 1. Importamos las clases (moldes)
import { User } from './src/models/user.js';
import { Ropa } from './src/models/ropa.js';
import { Transaccion } from './src/models/transaccion.js';

// 2. Importamos la base de datos temporal y las funciones de lógica
import { usuariosRegistrados } from './src/services/userService.js';
import { validarIntencion } from './src/services/marketplace.js';

// --- 1. Creando Usuarios ---
console.log("--- 1. Creando Usuarios ---");
let evans = new User("Evans001", "Evans");
let kissi = new User("Kissi002", "Kissi");

// Agregamos los usuarios a nuestra lista global para que el marketplace los vea
usuariosRegistrados.push(evans, kissi); 
console.log(kissi);

// --- 2. Subiendo Ropa ---
console.log("\n--- 2. Subiendo Ropa ---");
let chamarra = new Ropa("Chamarra Cool", 500, ["Venta"], evans.id, "Exterior", "Nuevo");
evans.closet.push(chamarra);
console.log("Closet de Evans:", evans.closet);

// --- 3. Validando Intención ---
console.log("\n--- 3. Validando Intención ---");
let intencionKissi = "Venta";

if (validarIntencion(chamarra, intencionKissi)) {
    console.log(`¡Éxito! La prenda acepta: ${intencionKissi}`);
    
    // --- 4. Creando Transacción ---
    console.log("\n--- 4. Creando Transacción ---");
    // Pasamos los objetos completos de kissi y evans para que la transacción pueda mover el dinero
    let trato = new Transaccion("Trato-01", chamarra, kissi, evans);
    console.log("Estado actual del trato:", trato.estado); 

    // --- 5. Respuesta del Vendedor ---
    console.log("\n--- 5. Respuesta del Vendedor ---");
    trato.responderOferta("Aceptar"); 
    console.log("Estado final del trato:", trato.estado);

} else {
    console.log("Error: Esta prenda no acepta esa intención.");
}