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

```
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





