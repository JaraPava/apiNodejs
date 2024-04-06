"use strict";
var _a;
/*
    El 'process' es un proceso de node que esta corriendo y tiene mucha información de la
    computadora, de los procesos que se estan ejecutando, librerias de Node, argumentos que
    se reciben de afuera y versiones de Node, etc.
    NOTA: El process se esta ejecutando o corriendo directamente en una aplicación de Node.
    Este tambien apunta a enviroment.Como se muestra en las siguientes lineas de código.
*/
console.log((_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3000);
// atajo para hacer el bloque de comentarios: Shift + Alt + A
// atajo para generar comentario:             Ctrl + }
/*
    Para aplicar la destructuración del objeto tomamos las propiedades igualandolo a nivel del process.env
*/
const { npm_config_npm_version, INIT_CWD, npm_lifecycle_script } = process.env;
/*
    Uno de los usos de variables de entorno, es querer extraer algo en particular acorde a donde esta
    corriendo Node, por ejemplo en un futuro cuando se despliegue esta aplicación en la nube. La nube
    te dará un puerto y entonces ahí es donde podemos poner el siguiente comando para que nos
    regrese el puerto del mundo exterior: process.env.PORT. Si imprimimos con un console probablemente
    tenga
*/
// Hace ver más fácil, a través del console.table();
// console.table({ npm_config_npm_version, INIT_CWD, npm_lifecycle_script });
/*
    Creamos un arreglo llamado characters el cual tendra los nombres de algunos superheroes:
        const characters = ['Flash', 'Superman', 'Batman'];
*/
const characters = ['Flash', 'Superman', 'Green Lantern', 'Batman'];
/*
    Si queremos pedir una constante y queremos extraer a Batman del arreglo entonces podemos hacer lo siguiente:
    const [_,__,batman] = characters -> la sintaxis del guión bajo y el doble guión bajo, son nombres validos de javascript.
    Como nota podemos no definir el nombre en la destructuración.
*/
const [, , , batman] = characters;
console.log(batman);
/*
    Un breakpoint pausa la ejecución en el momento que nosotros damos clic al costado izquierdo de los números de lineas
    (Es una pausa de ejecución de nuestra aplicación).
    ¿Como lo ejecuto para que llegue hasta el breakPoint?
    Respuesta = Si abrimos la terminal integrado y ponemos el npm run dev, van a ver que no sucederá nada y se
    ejecutará correctamente, y es que le estamos indicando que se ejecute con el proceso de la terminal que esta
    independiente a mi aplicación en visual studio code. Hay varias formas de hacer la depuración y llegar al
    breakPoint.
    1. Vamonos al package.json.
    2. Aparecerá una opción de depuración.
    3. Dar clic en esa opción.
    4. Visual studio code mostrará una lista de todos los scripts.
    5. Hacemos clic en nodemon dev nodemon src/app.js
    6. Se abrirá en consola.
    7. Hará el breakPoint
    Nota: Se puede poner otros breakpoints en otros puntos de ejecución.

 */
