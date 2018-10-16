// package: 
// file: ExampleService.proto

var ExampleService_pb = require("./ExampleService_pb");
var grpc = require("grpc-web-client").grpc;

var ExampleService = (function () {
  function ExampleService() {}
  ExampleService.serviceName = "ExampleService";
  return ExampleService;
}());

ExampleService.classify = {
  methodName: "classify",
  service: ExampleService,
  requestStream: false,
  responseStream: false,
  requestType: ExampleService_pb.ClassifyRequest,
  responseType: ExampleService_pb.ClassifyResponse
};

exports.ExampleService = ExampleService;

function ExampleServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

ExampleServiceClient.prototype.classify = function classify(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  grpc.unary(ExampleService.classify, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
};

exports.ExampleServiceClient = ExampleServiceClient;

