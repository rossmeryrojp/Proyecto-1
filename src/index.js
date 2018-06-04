// Declaración de variables, vinculación de HTML y Javascript
const buttonStart = document.getElementById('start');
const imgWebApp = document.getElementById('logo');
const introWebApp = document.getElementById('contenedorPresentacion');
const contentWebApp = document.getElementById('contenedorPrincipal');
// Función de inicio declarada, conteniendo funciones propias de la interacción
function start() {
   
   contentWebApp.style.display = '';
   buttonStart.style.display = 'none';
   introWebApp.style.display = 'none';
   imgWebApp.style.display = 'none';
   
   const buttonEncode = document.getElementById('encode');
   const buttonDecode = document.getElementById('decode');
   const buttonCopy = document.getElementById('copy');
   const viewResult = document.getElementById('viewResult');
// función de control de evento para cifrado
   function resultEncode() {
       var string = document.getElementById('string').value;
       var offset = parseInt(document.getElementById('offset').value);
       viewResult.innerHTML = cipher.createCipherWithOffset(offset).encode(string);
   }
   
   buttonEncode.addEventListener('click', resultEncode);
// función de control de evento para descifrado
   function resultDecode() {
       var string = document.getElementById('string').value;
       var offset = parseInt(document.getElementById('offset').value);
       viewResult.innerHTML = cipher.createCipherWithOffset(offset).decode(string);
   }
       
   buttonDecode.addEventListener('click', resultDecode);
// función de control de evento para copia de resultado
   function copyText() {
       document.getElementById('viewResult').select();
       document.execCommand('copy');
   } 
   buttonCopy.addEventListener('click', copyText);
} 
buttonStart.addEventListener('click', start);