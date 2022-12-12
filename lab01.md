Here's the list of movies in the DB.


``` json 
{
	"id": "m101",
	"name": "Spectre",
	"year": 2015,
	"language": "English",
	"ratings": [{
		"source": "Internet Movie Database",
		"value": "6.8"
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
			"value": "8.3"
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
		"value": "6.5/10"
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
		"value": "4.5/10"
	}, {
		"source": "Rotten Tomatoes",
		"value": "51%"
	}]
}
```

Define the schema and the following queries and mutations

* Find the movies released in year X
* Find the movies with IMDB rating less than X
* Find all the rating sources
* Add a new movie along with the ratings _(Use input)_
* Change the IMDB rating for a movie X
* Add/Remove members of a cast. Introduce a type _'Cast'_.  

