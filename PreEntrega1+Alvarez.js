
 alert("Young mates, los mejores mates !")
 
{
    function carritoDeCompra() {
        
    let total = 0 // carrito
    let compro_mate = false, compro_bombilla = false
    let mate = 2500
    let bombilla = 1000
    
    let compra = prompt(
    "Elegí una opción: \n1- Agregar un mate. \n2- Anular un mate.   \n3 - Agregar una bombilla. \n4 - Anular una bombilla. \n5 - Total \nFinalizar compra"
    );
    while (compra != "Finalizar compra") {
        switch (compra) {
            case "1":                
                alert("compraste un mate $" + "" + mate);
               
                total = total + mate;
                compro_mate = true
                break;
            case "2":
                if (compro_mate === false)
                    break
                alert("anulaste un mate $" + "" + mate);                
                total = total - mate;

                break;
            case "3":                        
               alert("compraste una bombilla $" + "" + bombilla);
               
                total = total + bombilla;
                compro_bombilla = true     
                break;
            case "4":
                if (compro_bombilla === false)
                    break
                alert("anulaste una bombilla $" + "" + bombilla);
                total = total - bombilla;

                break;
            case "5":
                
                alert("El total de tu compra es $" + total);
                break; 
                
        }
        compra = prompt(
           "Elegí una opción: \n1- Agregar un mate. \n2- Anular un mate.   \n3 - Agregar una bombilla. \n4 - Anular una bombilla. \n5 - Total \nFinalizar compra"
        );
        }
    }
    carritoDeCompra();
    alert("En 48 horas despacharemos tu pedido");
}


alert('Gracias por tu compra')

//Objetivo

// Calcular costo total de productos y/o servicios seleccionados por el usuario.

//algoritmo condicional y algoritmo con ciclo. Utilizar funciones para realizar esas operaciones.

// Ponerle mi nombre a los archivos

//Debe identificar el apellido del alumno/a en el nombre de archivo comprimido por ““PreEntrega1+Apellido””.



