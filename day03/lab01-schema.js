let schema = `
    interface Rating {
        source: String
    }

    type ImdbRating implements Rating {
        source: String,
        value: Float
    }

    type RottenTomatoesRating implements Rating {
        source: String,
        value: String
    }

    type Cast {
        actors: [String]
    }

    type Movie {
        id: ID!,
        name: String,
        year: Int,
        language: String,
        cast: Cast,
        ratings: [Rating] 
    }

    type Query {
        moviesReleased(year: Int): [Movie],
        moviesWithImdbRatingLessThan(value: Float): [Movie]
        ratingSources: [String]
    }

    input AddRottenTomatoesRatingInput {
        source: String,
        value: String
    }

    input AddImdbRatingInput {
        source: String,
        value: Float
    }

    input AddMovieInput {
        name: String,
        year: Int,
        language: String,
        imdbRatingInput: AddImdbRatingInput,
        rottenTomatoesRatingInput: AddRottenTomatoesRatingInput
    }

    

    type Mutation {
        addMovie(movieInput: AddMovieInput): Movie
    }
`;

module.exports = schema;