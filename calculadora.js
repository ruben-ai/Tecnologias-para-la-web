
function sumaNumeros() {
    //Acceder a los elementos d emi documento
    var num1 = document.getElementById("numero1").value; //sacamos el elemento de numero 1, el .value hace referencia a solo el valor del objeto
    var num2 = document.getElementById("numero2").value;
    var resultado = document.getElementById("resultado");

    //proceso
    var suma = parseFloat(num1) + parseFloat(num2);
    
    //mostrar
    resultado.innerHTML = "Resultado: " + suma;

    //alert("la suma de los dos numeros es" + suma);
    //alert(num1.value); //esta alerta nos muestra el numero 1 introducido
}

function restaNumeros() {
    var num1 = document.getElementById("numero1").value;
    var num2 = document.getElementById("numero2").value;
    var resultado = document.getElementById("resultado");
    var resta  = num1 - num2;
    resultado.innerHTML = "Resultado: " + resta;
}

function multiplicaNumeros() {
    var num1 = document.getElementById("numero1").value;
    var num2 = document.getElementById("numero2").value;
    var resultado = document.getElementById("resultado");
    var multiplicacion = num1 * num2;
    resultado.innerHTML="Resultado: " + multiplicacion;
}

function divideNumeros() {
    var num1 = document.getElementById("numero1").value;
    var num2 = document.getElementById("numero2").value;
    var resultado = document.getElementById("resultado");
    var division = num1 / num2;
    resultado.innerHTML = "Resultado: " + division;
}