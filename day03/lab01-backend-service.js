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
let app = require('express')();
app.get('/movies/year/:year', (req, res) => {
    let output = db.movies.filter(movie => movie.year === parseInt(req.params.year));
    res.end(JSON.stringify(output));
});

app.listen(9091, () => {
    console.log("Backend service running in 9091");
});