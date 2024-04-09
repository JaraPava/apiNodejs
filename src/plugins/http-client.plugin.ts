/* 
    Se crea esta función llamada httpClientPlugin.
    Puede que se pueda exportar otra información de ese archivo, y que se tenga una unica exportación.
    El get recibe la url y en ese caso se hará el WRAPPER (ENVOLTORIO DE FETCH EN ESTE CASO), lo que me interesa es que cuando alguien use mi
    cliente http, yo recibo la url y regresaré el producto de la respuesta. 
    Tomamos e
*/
export const httpClientPlugin = {
    get: async (url:string) => {
        const resp = await fetch(url);
        return await resp.json();
    },

    // post: async(url:string, body:any) => {},
    // put: async(url:string, body:any) => {},
    // delete:async(url:string)=>{},
};
