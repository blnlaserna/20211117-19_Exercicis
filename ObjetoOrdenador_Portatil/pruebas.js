import { Ordenador, Portatil } from "./ordenador.js";

var o1 = new Ordenador("HP", "EliteDisplay",8,256,23);
var o2 = new Ordenador("Dell" , "Inspiron AIO");
var p1 = new Portatil("Apple","Macbook Air",8,128,13,12);
var p2 = new Portatil("Acer", "Aspire");

console.log(o1.toString());
/* Salida:
    Marca: HP
    Modelo: EliteDisplay
    RAM: 8
    Disco duro: 256GB
    Pulgadas: 23 pulgadas
*/
console.log(o2.toString());
/* Salida:
    Marca: Dell
    Modelo: Inspiron AIO
    RAM: 4
    Disco duro: 512GB
    Pulgadas: 17 pulgadas
*/
console.log(p1.toString());
/* Salida:
    Marca: Apple
    Modelo: Macbook Air
    RAM: 8
    Disco duro: 128GB
    Pulgadas: 13 pulgadas
    Autonomía: 12 horas
*/
console.log(p2.toString());
/* Salida:
    Marca: Acer
    Modelo: Aspire
    RAM: 4
    Disco duro: 256GB
    Pulgadas: 13 pulgadas
    Autonomía: 4 horas
*/