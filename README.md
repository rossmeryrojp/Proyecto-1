# CipherText

## Preámbulo

Está próxima la fecha del cumpleaños de tu flacx (novix) y estás organizando una
fiesta sorpresa. Para organizar la fiesta has creado un grupo de Whatsapp junto
con amigos y familiares.

![usuariowhatsapp](https://user-images.githubusercontent.com/39319360/40916190-6d90c10c-67c4-11e8-8d79-50ccccc1bed4.jpg)

Un gran problema es que pones tu alarma para levantarte temprano, sin embargo
(como supondrás) eso nunca sucede y tu flacx es quien termina apagando la alarma
y "de casualidad" revisando tus mensajes. Debido a que es algo sorpresa, decides
crear una aplicación que te permita enviar mensajes cifrados y que las demás
personas (partícipes de la fiesta) puedan tener una interfaz para
descifrarlo. Así que ahora te toca aplicar tus superpoderes.

## Introducción
* Los principales usuarios de esta App son tanto nativos digitales como inmigrantes digitales.

![nativodigitalvsinmigrantedigital](https://user-images.githubusercontent.com/39319360/40916141-3db673dc-67c4-11e8-8dbe-88704569fa59.png)

* El objetivo de estos usuarios en relación con el producto es la privacidad de sus comunicaciones, a través del cifrado de mensajes, que ha sido hasta ahora una de las técnicas más populares a la hora de proteger información.

![cifrado-cesar](https://user-images.githubusercontent.com/39319360/40916165-54db8886-67c4-11e8-8d71-0edb1f903a63.png)

## Funcionalidad

Utiliza un cifrado que proporciona privacidad para cada mensaje. Basado en el Cifrado César conocido por ser un cifrado de sustitución.
Con un entorno fácil de usar.
Proporciona además redireccionamiento a WhatsApp.

![funcionalidad1](https://user-images.githubusercontent.com/39319360/40916207-8d14e350-67c4-11e8-8ae5-0bc2d241bb4a.png) ![funcionalidad2](https://user-images.githubusercontent.com/39319360/40916231-9f87aff4-67c4-11e8-82f9-cbe99ea0f0e4.png)


## Decisiones de Diseño

Empecé por un diagrama de flujo que plasma la interacción del usuario con la aplicación. Lo tome como un mapa (hoja de ruta) que me coloca en la posición de usuario, donde al recorrerla para obtener lo que busca, tendrá momentos que lo llevarán a tomar decisiones. Sin embargo estas no deben implicar complicaciones por lo que se le plantearán alternativas simples y agradables. 

![flujograma](flujograma.png)

Entonces definí en la interfaz una intro para que la primera vista le permita al usuario tener clara la finalidad del producto.
Para lograr esto pense en el detalle de emplear una imagen y una breve línea descriptiva de presentación.

Establecí un color sólido porque aplicaciones de conectividad que brindan servicio de mensajería, tales como Facebook y WhatsApp tienen esa característica con el azul y verde respectivamente.

Las razones sobre la cantidad y distribución de elementos como: casillas de texto y botones, fue en primera para evitar el uso del scroll y en segunda, para conservar la comodidad de no cambiar la orientación de visualizacion de vertical a horizontal en dispositivos.
