
interface User{
    id: number,
    name: string
}
const users: User[] = [
    {
        id: 1,
        name: 'John Doe'
    },
    {
        id: 2,
        name: 'Jane Doe'
    }
];


//======== FUNCIÓN DE CALLBACK CON FUNCIÓN FLECHA =========
//En cualquier momento que se utilize y envie nuestro callback, va a saber que el error es opcional 
// y el usuario es opcional pero sabe que propiedades tendremos ahí.
//Se puede hacer una interfaz para los parametros del callback
export function getUserById(id: number, callback: (err?: string, user?: User) => void){
    const user = users.find(function(user){
        return user.id === id;
    });

    if(!user){
        return callback(`Usuario not found with id: ${id}`);
    }

    return callback(undefined, user);
}