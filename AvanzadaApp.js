import { sumar, restar, multiplicar, dividir } from "./Fundiendo.js";

function calcular() {
    let operacion;
    do {
        operacion = prompt("Seleccione una operación: \n1. Sumar \n2. Restar \n3. Multiplicar \n4. Dividir \n5. Salir");
        if (operacion === "5") break;
        
        let num1 = parseFloat(prompt("Ingrese el primer número:"));
        let num2 = parseFloat(prompt("Ingrese el segundo número:"));
        let resultado;

        switch (operacion) {
            case "1":
                resultado = sumar(num1, num2);
                break;
            case "2":
                resultado = restar(num1, num2);
                break;
            case "3":
                resultado = multiplicar(num1, num2);
                break;
            case "4":
                resultado = dividir(num1, num2);
                break;
            default:
                alert("Operación no válida, intente de nuevo.");
                continue;
        }

        alert("El resultado es: " + resultado);
    } while (true);
    
    alert("Gracias por usar la calculadora.");
}

calcular();
