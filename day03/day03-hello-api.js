const {RESTDataSource} = require('@apollo/datasource-rest');

class HelloApi extends RESTDataSource {
    baseURL = "http://localhost:9090";

    constructor(options) {
        super(options);
        this.memoizeGetRequests = true;
        this.token = options.token;
    }

    async greet(name) {
        let message = await this.get(`${this.baseURL}/hello/${name}`);
        return message;
    }
    willSendRequest(request) {
        request.headers['authorization'] = this.token;
    }
}

module.exports = HelloApi;