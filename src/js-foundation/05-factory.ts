//Aqui tendremos el getUUID que se manda a llamar y tenemos el getUUID
//Tambien tenemos el getAgeque recibe un birthdate de tipo string y regresa un number.
//Al momento de usar las inyecciones tenemos que especificarlo 
interface BuildMakerPersonOptions{
    getUUID: () => string;
    getAge:(birthdate: string) => number;
};

interface PersonOptions{
    name: string,
    birthdate: string
}

export const buildMakePerson = ({getUUID, getAge}:BuildMakerPersonOptions) =>{
    //Esta es la función para crear personas
    return ({name, birthdate}: PersonOptions) =>{
        return{
            id: getUUID(),
            name: name,
            birdhdate: birthdate,
            age: getAge(birthdate)
        }
    };
}

// console.log(john);