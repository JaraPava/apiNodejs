//Este archivo adapta los paquetes y ya tenemos listo nuestro controlador-adaptador

export const getAge = (birthdate:string) =>{
    if(!birthdate) return new Error('birthdate is required');

    return new Date().getFullYear() - new Date(birthdate).getFullYear();
};
