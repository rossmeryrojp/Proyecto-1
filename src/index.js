const buttonStart = document.getElementById('start');
const imgWebApp = document.getElementById('logo');
const introWebApp = document.getElementById('contenedorPresentacion');
const contentWebApp = document.getElementById('contenedorPrincipal');

function start() {
   
   contentWebApp.style.display = '';
   buttonStart.style.display = 'none';
   introWebApp.style.display = 'none';
   imgWebApp.style.display = 'none';
   
   const buttonEncode = document.getElementById('encode');
   const buttonDecode = document.getElementById('decode');
   const buttonCopy = document.getElementById('copy');
   const viewResult = document.getElementById('viewResult');
   
   function resultEncode() {
       var string = document.getElementById('string').value;
       var offset = parseInt(document.getElementById('offset').value);
       viewResult.innerHTML = cipher.createCipherWithOffset(offset).encode(string);
   }
   
   buttonEncode.addEventListener('click', resultEncode);

   function resultDecode() {
       var string = document.getElementById('string').value;
       var offset = parseInt(document.getElementById('offset').value);
       viewResult.innerHTML = cipher.createCipherWithOffset(offset).decode(string);
   }
       
   buttonDecode.addEventListener('click', resultDecode);

   function copyText() {
       document.getElementById('viewResult').select();
       document.execCommand('copy');
   } 
   buttonCopy.addEventListener('click', copyText);
} 
buttonStart.addEventListener('click', start);