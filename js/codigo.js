const inputtexto=document.querySelector(".input-text");
const mensaje=document.querySelector(".input-text-area");
const resultados=document.getElementById("resultados");
let noesta = document.getElementById("noexiste");
let mensajeerror = document.getElementById("mensajeerror");

mensajeerror.style.display="none";

resultados.style.display="none";
inputtexto.focus();

function verificaletras(string) {
    return /^[a-z\s]*$/.test(string);
  }

function btnecriptar()
{

    if ( inputtexto.value.length==0) {
        noesta.style.display = "block";
        resultados.style.display = "none";
        alert("Debe ingresar al menos una letra");
        return false;
      }
      else{
        if (!verificaletras(inputtexto.value)) {
             noesta.style.display = "block";
              resultados.style.display = "none";
              mensajeerror.style.display="block"
            alert("El texto debe contener solo letras minúsculas sin acentos");
            inputtexto.value="";
            return false;
          } else {
            mensaje.value=encriptar(inputtexto.value);
            noesta.style.display="none";
            resultados.style.display="flex";
            
          }

      }


}

function btndesencriptar()
{
   
    if ( inputtexto.value.length==0) {
        noesta.style.display = "block";
        resultados.style.display = "none";
        alert("Debe ingresar al menos una letra");
        return false;
      }
      else{
        if (!verificaletras(inputtexto.value)) {
            noesta.style.display = "block";
             resultados.style.display = "none";
             mensajeerror.style.display="block"
           alert("El texto debe contener solo letras minúsculas sin acentos");
           inputtexto.value="";
           return false;
         } else {

        mensaje.value=desencriptar(inputtexto.value);
        noesta.style.display="none";
        resultados.style.display="flex";
         }

      }
   
    
}
function btncopiar()
{
    copiar(mensaje);
 
}
function encriptar(cadena)
{
    let matriz=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
   let cadenax=cadena.toLowerCase();
   

    for(let i=0; i<matriz.length;i++)
    {
        
        if(cadenax.includes(matriz[i][0])){
            cadenax=cadenax.replaceAll(matriz[i][0],matriz[i][1]);
        } 

    }
    return cadenax;
}

function desencriptar(cadena)
{
    let matriz=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
   let cadenax=cadena.toLowerCase();
   

    for(let i=0; i<matriz.length;i++)
    {
        
        if(cadenax.includes(matriz[i][1])){
            cadenax=cadenax.replaceAll(matriz[i][1],matriz[i][0]);
        } 

    }


    return cadenax;

}

function copiar(mensajex) {

    mensajex.select();
    document.execCommand('copy');
    alert("copiado!");
}