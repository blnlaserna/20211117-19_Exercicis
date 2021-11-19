/**
 * @constructor
 * @param {String} marca - Marca del ordenador            
 * @param {String} modelo Modelo del ordenador
 * @param {Number} ram Capacidad de la memória RAM del ordenador indicado en GB 
 * @param {Number} disco Capacidad del disco duro del ordenador indicado en GB
 * @param {Number} pulgadas Pulgadas de la pantalla del ordenador indicado en pulgadas
 * @property {String} marca Marca del ordenador            
 * @property {String} modelo Modelo del ordenador
 * @property {Number} ram Capacidad de la memória RAM del ordenador indicado en GB 
 * @property {Number} disco Capacidad del disco duro del ordenador indicado en GB
 * @property {Number} pulgadas Pulgadas de la pantalla del ordenador indicado en pulgadas
 */
function Ordenador (marca, modelo, ram=4, disco=512, pulgadas=17){
    this.marca = marca;
    this.modelo = modelo;
    this.ram = ram;
    this.disco = disco;
    this.pulgadas = pulgadas;

    /**
     * Método para devolver en formato texto los detalles del ordenador
     * @returns {String} Devuelve los detalles del ordenador en fomato texto
     */
    this.toString = function() {
        return "Marca: " + this.marca + "\n" +
            "Modelo: " + this.modelo + "\n" +
            "RAM: " + this.ram + "\n" +
            "Disco duro: " + this.disco + "GB\n" +
            "Pulgadas: " + this.pulgadas + " pulgadas\n";
    }
};

/**
 * @constructor
 * @extends Ordenador
 * @param {String} marca - Marca del portátil            
 * @param {String} modelo Modelo del portátil
 * @param {Number} ram Capacidad de la memória RAM del portátil indicado en GB 
 * @param {Number} disco Capacidad del disco duro del portátil indicado en GB
 * @param {Number} pulgadas Pulgadas de la pantalla del portátil indicado en pulgadas
 * @param {Number} autonomia Horas del autonomía del portátil
 * @property {String} marca Marca del portátil            
 * @property {String} modelo Modelo del portátil
 * @property {Number} ram Capacidad de la memória RAM del portátil indicado en GB 
 * @property {Number} disco Capacidad del disco duro del portátil indicado en GB
 * @property {Number} pulgadas Pulgadas de la pantalla del portátil indicado en pulgadas
 * @property {Number} autonomia Número de horas de autonomía que tiene el portátil
 */

function Portatil(marca, modelo, ram=4, disco=256, pulgadas=13, autonomia=4) {
    this.__proto__ = new Ordenador(marca, modelo, ram, disco, pulgadas);
    this.autonomia = autonomia;

    this.toString = function() {
        return this.__proto__.toString() + 
        "Autonomía: " + this.autonomia + " horas\n";
    }
}

export {Ordenador, Portatil};

