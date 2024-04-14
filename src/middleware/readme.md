Los middleware son una función que estarán en la mitad de la ruta y el controlador. 
Va a servir ahí como un guardian, como algo que observa las cosas que estan sucediendo

Las principales funciones son:
    - Login, para saber que peticiones estan llegando a nuestro API
    - Proteger rutas, que solamente un usuario acceda bajo un token de sesión, osea 
    que el usuario tenga una sesión activa.
    - Proteger rutas por roles
    - Infinito
