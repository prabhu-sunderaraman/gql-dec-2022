const { APM } = require("./apm");

const RequestLogging = {
    requestDidStart(requestContext) {
      const start = Date.now()
      let op
  
      return {
        didResolveOperation (context) {
          op = context.operationName;
        },
        willSendResponse (context) {
          const stop = Date.now();
          const elapsed = stop - start
          if(op!='IntrospectionQuery'){
            APM.count(`${op}`, 1, {});
            APM.timing(`${op}_response_time`, elapsed, {});
          }
        }
      }
    },
}
module.exports = APM;