### Need for GraphQL

* Multiple devices in FE need different types of data from APIs in the BE
* Maintaining different BE APIs specific to devices or resolution or screen size is tedious
* Using the same API to cater to all the requests, is not a correct solution as you are eating up the bandwidth
* FE has to make several trips to the BE APIs each time to consume some data

* A middleware that sits between FE and the BE Apis
* Middleware gathers the request from the FE, gets the response from the BE, filters out the unneccessary information and just provides what the FE needs
* Middleware gathers ALL the information that FE needs, and goes to the BE, gets all the data, and collectively sends back the response in one shot to the FE

### GraphQL

* __GraphQL__ is the middleware
* Acts as a __gateway__ to the BE
* It completely __decouples__ your FE from all the BE Apis
* You avoid hitting the Apis individually. You can club several requests and hand them over to GraphQL
* Filtering out data. You ask only for that data that you need. GraphQL filters it out

## Set up a graphql server using Apollo

* Latest version of Apollo is v4
* A lot of times, in your project, you may not have the luxury to set up a graphql server
* It may have been already setup and configured and up and running

* mkdir day01
* cd day01
* sudo npm init
* sudo npm i --save graphql @apollo/server


### Things you need for graphql

* Schema - __All the clients or UI uses this schema__
* Resolver - __Engine that executes the queries and provide the response__


### Query syntax

* Functions with variables

``` graphql

query ($avail: Boolean, $bid: ID) {
  books(available: $avail) {
    title
    price
  }
  book(id: $bid) {
    title
    price
  }
}

//Variables
{
  "avail": true,
  "bid": "b104"
}

```

* Fragments

``` graphql

query($available: Boolean, $bookId: ID) {
  books(available: $available) {
    ...mandatoryBookFields
  }
  book(id: $bookId) {
    ...mandatoryBookFields
  }
}
fragment mandatoryBookFields on Book {
  title
  price
  inStock
  unitsSold
} 
```   

* Aliases for queries and fields

``` graphql

query StockOfBooks {
  inStockBooks: books(available: true) {
    bookId: id
    bookTitle: title
    bookPrice: price
  }
  outOfStockBooks: books(available: false) {
    bookId: id
    bookTitle: title
    bookPrice: price
  }
}

```

* Directives
* __Notice the mandatory or Non-nullable operator in query function's argument when you use directives__

``` graphql

query($available: Boolean!) {
  books(available: $available) {
    title
    price
    inStock @skip(if: $available)
    unitsSold @include(if: $available)
  }
}

```

* Inline Fragments

``` graphql

query AllItems {
  allItems {
# __typename is not mandatory    
#    type: __typename
    id
    price
    title
    ... on Book {
      inStock
    }
    ... on EBook {
      kindleUnlimited
    }
  }
}

```

* union of types
* __union MostViewed = Mobile | OfficeChair | Book__
``` graphql

query Mobile {
  mostViewed {
    type: __typename
    ... on Mobile {
      id
      model
    }
    ... on OfficeChair {
      id
      material
    }
    ... on Book {
      id
      title
      price
      inStock

    }
  }
}

```

``` C#

  void getItems(String bid, String model) {
    getBook(bid);
    getMobile(model);
  }


```

``` graphql

query getItems($bid: String, $model: String) {

  books(bookId: $bid) {
  }

  mobiles(model: $model) {
  }
}

#Variables
{
   bid: "",
   model: ""
}

```

## Merge Schemas and resolvers

* Practically you will maintain the schema and resolvers in a separate set schema files and resolver files
* Merge them using __@graphql-tools/merge__
* use _mergeTypeDefs_ and _mergeResolvers_


``` json

interface Rating {
  source: String
}

type ImdbRating implements Rating {
  source: String,
  value: Float
}

type RTRating implements Rating {
  source: String,
  value: String
}

resolvers: {
  Rating: {
    __resolveType: (obj) => {
          if(typeof(obj.value) === 'string') 
            return 'RTRating';
          else if(typeof(obj.value) === 'number') 
            return 'ImdbRating'
      }
  }
}

```

* Lab01 queries

``` graphql

query Query($year: Int, $value: Float) {
  ratingSources
  moviesReleased(year: $year) {
    id
    name
    year
    language
    cast {
      actors
    }
    ratings {
      source
    }
  }
  moviesWithImdbRatingLessThan(value: $value) {
    id
    name
    year
    language
    cast {
      actors
    }
    ratings {
      source
      ... on ImdbRating {
        imdbValue: value
      }
      ... on RottenTomatoesRating {
        rtValue: value
      }
    }
  }
}

```

### Connecting to backend service using Apollo

* Install express for backend service
* sudo npm i --save express

<br/>

* sudo npm i --save @apollo/datasource-rest
* Create API class that extends RESTDataSource
* Register the API with the ApolloServer
* Use the API from the resolver