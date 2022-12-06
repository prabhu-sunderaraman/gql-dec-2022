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