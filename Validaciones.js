function Guardar()
{
   if (  ValidaRequeridos() )
   {
    if (ValidaActivo())
      {
        alert("Guardado exitoso!!");
      }
   }
   
}
function ValidaRequeridos()
{
    valorNombre = document.getElementById("Nombre").value;
    valorPrecio = document.getElementById("Precio").value;
    valorCategoria = document.getElementById("Categoria").value;
    //alert(valorCategoria); 

    if(valorNombre == '')
    { 
        alert("Faltan Datos requeridos Nombre*");
        return false;
    }
    if(valorPrecio == '')
        { 
            alert("Faltan Datos requeridos Precio*");
            return false;
        }
    if(valorCategoria == 'Seleccione')
            { 
                alert("Faltan Datos requeridos Categoria*");
                return false;
            }
    return true;
}
function ValidaActivo()
{
    valorActivo = document.getElementById("activo").checked;
    //alert(valorActivo);
    if (valorActivo == true)
    {
        if (confirm("El producto esta activo, desea continuar"))
        {
            return true; //alert("si desea continuar");

        }
        else{
            return false; // alert("No desea continuar");
        }
       
    }
    return true;
}