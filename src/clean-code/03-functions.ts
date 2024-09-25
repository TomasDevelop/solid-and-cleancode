(() => {

    function getMovieById( id: string ) {
        console.log({ id });
    }

    // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
    function getMovieCastById( id: string ) {
        console.log({ id });
    }

    // funcion para obtener el bio del actor por el id
    function getActorBiographyById( id: string ) {
        console.log({ id });
    }

    interface Movie {
        cast: Cast[],
        description: string,
        rating: number,
        title: string
    }
    
    // Crear una película
    function createMovie({title, description, rating, cast}: Movie ) {
        console.log({ title, description, rating, cast });
    }

    interface Cast {
        birthdate: Date,
        fullName: string
    }

    // Crea un nuevo actor
    function createActor( {fullName, birthdate}: Cast ) {
        try {
            console.log({fullName, birthdate}, 'Create successefully');
        } catch (error) {
            console.error({fullName, birthdate}, 'Create error', error);
        }
    }
})();