JSON WEB TOKEN
Es un estandar RFC 7519 o método que se utiliza para poder comunicarnos entre un cliente y un API.

Como se compone:
Es un string o cadena de texto. 
Estan divididas por un "." y consta de 3 secciones.
Estan codificados por un algoritmo llamado HS256.

La primera parte hace referencia al header al encabezado de ese
token.
La parte roja es el tipo de algoritmo.

La parte dos se suelen colocar los datos publicos, puede ser
el nombre, email del usuario, son datos que no comprometen a la aplicación. Ahí no se colocara un tokend de sesión especial.
Y puede ser un dato qeu no puede ser tan comprometedor.

La última parte se tiene la sección de verificar la firma.
Para poder hacer el jwt el backend necesita firmarlo.

Un JWT lo puede generar cualquier cosa.
La firma es un dato secretoq ue estarán en mi variables de
entorno, y cuando mi aplicación nativa haga una petición a nuestra api. Y este pasando un json web token alterado. Cuando llegue al backend este basado a su firma, dirá y buscará que sea firmado por el mismo.

