/**
 * Constructor para crear objetos que representen un punto 
 * @constructor
 * @param {Number} coordX La coordenada x del punto
 * @param {Number} coordY La coordenada y del punto
 * @property {Number} x Guarda el valor de la coordenada x del punto
 * @property {Number} y Guarda el valor de la coordenada y del punto
 */
function Punto(coordX,coordY) {
    this.x = coordX;
    this.y = coordY;

    /**
     * Método al que le pasamos dos números y nos permite modificar las 
     * coordenadas del número a estos nuevos números
     * @param {Number} coordX La coordenada x nueva
     * @param {Number} coordY La coordenada y nueva
     * @returns {void}
     */
    this.cambiar = (coordX,coordY) => {
        this.x = coordX;
        this.y = coordY;
    };

    /**
     * Método que retorna una copia del objeto
     * @returns {Punto}
     */
    this.copia = () => (new Punto(this.x,this.y));

    /**
     * Método para sumar dos puntos que devuelve un punto nuevo con el resultado de la suma
     * @param {Punto} punto2 Punto con el que se desea sumar
     * @returns {Punto} El resultado de sumar los dos puntos
     */
    this.sumar = (punto2) => (new Punto(this.x + punto2.x, this.y + punto2.y));
    
    /**
     * Método que convierte las coordenadas del objeto en un texto
     * @returns {String} Devuelve las coordenadas en formato (x,y)
     */
    this.toString = () => (`(${this.x},${this.y})`);

    /**
     * Método para mostrar la distancia entre dos puntos
     * @param {Punto} punto2 Punto con el que se desea medir la distancia
     * @returns {Number} Distancia con el punto2
     */
    this.obtenerDistancia = function (punto2) {
        return Math.sqrt(
            Math.pow(Math.abs(this.x - punto2.x),2) + 
            Math.pow(Math.abs(this.y - punto2.y),2)
        );
    };
}

export {Punto};

var p = new Punto(1,2); 
console.log("p: " + p.toString()) // Salida: (1,2)
var q = new Punto(6,-3);
console.log("q: " + q.toString()); //Salida: (6,-3)

p.cambiar(-5,2);

var r = p.copia();
console.log("r: " + r.toString());
r.x = 9;

console.log("p: " + p.toString()); // Salida: (-5,2)
console.log("r: " + r.toString()); // Salida: (9,2)

var s = p.sumar(r);
console.log("s: " + s.toString()); // Salida: (4,4)

console.log("Distancia entre p y q: " + p.obtenerDistancia(q)); // Salida: 12.08