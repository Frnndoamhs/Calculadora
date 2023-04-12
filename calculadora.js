function numeros(THIS){
    /*****obtener elvalor de la caja****/
    var numero = THIS.textContent;
    /*****obtener elvalor de la caja****/
    var box = document.getElementById("resultados_calculadora").innerHTML;

    console.log(numero);
    if (numero !== '0'){
        document.getElementById("resultados_calculadora").innerHTML = numero;
        console.log("Es un numero diferente a 0");
   }
}