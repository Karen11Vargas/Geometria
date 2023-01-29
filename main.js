
function calculoPerimetroCuadrado (){

    let input = document.getElementById('side');      //Se alamcena en variabl el id del input
    let value = Number(input.value);                  // Se convierte en numero el valor del obtenido del input
    
    let calculoPerimetro = value * value;             //Operacion del perimetro
                                                
Swal.fire(`El resulatdo de Cuadrado es: ${calculoPerimetro}`)
   const message = `El resulatdo de Cuadrado es: ${calculoPerimetro}`;    //Se crea el mensaje con la funcion especifica 
 document.getElementById('result').innerHTML = message;              //Se retorna mesaje al HTML con innerHtml

}


function calculoAreaCuadrado (){

    let input = document.getElementById('side');      //Se alamcena en variabl el id del input
    let value = Number(input.value);                  // Se convierte en numero el valor del obtenido del input
    
    let calculoArea = value * 2;             //Operacion del perimetro
                                                
   Swal.fire(`El resulatdo de Cuadrado es: ${calculoArea}`)
   const message = `El resulatdo de Cuadrado es: ${calculoArea}`;    //Se crea el mensaje con la funcion especifica 
 document.getElementById('result').innerHTML = message;              //Se retorna mesaje al HTML con innerHtml

}