let db = {
    "movies": [
        {
            "id": "m101",
            "name": "Spectre",
            "year": 2015,
            "language": "English",
            "ratings": [{
                "source": "Internet Movie Database",
                "value": 6.8
            }, {
                "source": "Rotten Tomatoes",
                "value": "68%"
            }]
        }, 
        {
            "id": "m102",
            "name": "Lagaan",
            "year": 2002,
            "language": "Hindi",
            "ratings": [{
                    "source": "Internet Movie Database",
                    "value": 8.3
                }, {
                    "source": "Rotten Tomatoes",
                    "value": "93%"
                }]
        }, 
        {
            "id": "m103",
            "name": "Kaala",
            "year": 2019,
            "language": "Tamil",
            "ratings": [{
                "source": "Internet Movie Database",
                "value": 6.5
            }, {
                "source": "Rotten Tomatoes",
                "value": "71%"
            }]
        },
        {
            "id": "m104",
            "name": "Don",
            "year": 2008,
            "language": "Hindi",
            "ratings": [{
                "source": "Internet Movie Database",
                "value": 4.5
            }, {
                "source": "Rotten Tomatoes",
                "value": "51%"
            }]
        }
    ]
};

let resolvers = {
    Rating: {
        __resolveType: (obj) => {
            if(typeof(obj.value) === 'string') {
                return "RottenTomatoesRating";
            } else {
                return "ImdbRating";
            }
        }
    },
    Query: {
        moviesReleased: (src, {year}) => {
            return db.movies.filter(movie => movie.year === year);
        },
        moviesWithImdbRatingLessThan: (src, {value}) => {
            return db.movies.filter(movie => {
                let movieWithImdbRatingLt = movie
                    .ratings
                    .find(m => m.source === "Internet Movie Database" && m.value < value)
                return movieWithImdbRatingLt !== undefined;
            });
        },
        ratingSources: () => db.movies[0].ratings.map(rating => rating.source)
    },
    Mutation: {
        addMovie: (src, {movieInput}) => {
            //LOGIC GOES HERE
            console.log(movieInput);
            return {id: "sdkjfhks"};
        }
    }
};

module.exports = resolvers;