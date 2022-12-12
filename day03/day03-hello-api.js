const {RESTDataSource} = require('@apollo/datasource-rest');

class HelloApi extends RESTDataSource {
    baseURL = "http://localhost:9090/hello";

    async greet(name) {
        let message = await this.get(`${this.baseURL}/${name}`);
        return message;
    }
}

module.exports = HelloApi;