let a,b;
let c,d;
let suma, resta, multiplicacion, division,residuo, potencia;

a = parseInt(prompt("Ingrese el primer número:"));
b = parseInt(prompt("Ingrese el segundo número:"));
c = parseInt(prompt("Ingrese el tercer número:"));
d = parseInt(prompt("Ingrese el cuarto número:"));
//resultado de operaciones
suma = a + b + c + d;
resta = a - b - c - d;
multiplicacion = a * b * c * d;
division = a / b / c / d;
residuo = a % b % c % d;
potencia = a ** b ** c ** d;
//Imprimir resultados
document.write("La suma es: " + suma + "<br>");
document.write("La resta es: " + resta + "<br>");
document.write("La multiplicación es: " + multiplicacion + "<br>");
document.write("La división es: " + division + "<br>");
document.write("El residuo es: " + residuo + "<br>");
document.write("La potencia es: " + potencia + "<br>");