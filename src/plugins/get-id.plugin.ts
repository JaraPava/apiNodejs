//UUUID fue escrita en javascript, entonces tenemos que instalar el uuid en la contraparte de @types => ctrl + .
// HAY QUE TENER MUY EN CUENTA QUE LOS TYPES EN LAS DEPENDENCIAS SOLAMENTE DEBEN ESTAR EN DEVDEPENDENCIES
import {v4 as uuidv4} from 'uuid';

export const getUUID = () =>{
    return uuidv4();
}
