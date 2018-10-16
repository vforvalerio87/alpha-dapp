// package: 
// file: ExampleService.proto

import * as ExampleService_pb from "./ExampleService_pb";
import {grpc} from "grpc-web-client";

type ExampleServiceclassify = {
  readonly methodName: string;
  readonly service: typeof ExampleService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof ExampleService_pb.ClassifyRequest;
  readonly responseType: typeof ExampleService_pb.ClassifyResponse;
};

export class ExampleService {
  static readonly serviceName: string;
  static readonly classify: ExampleServiceclassify;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }
export type ServiceClientOptions = { transport: grpc.TransportConstructor; debug?: boolean }

interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: () => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: () => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<T> {
  write(message: T): BidirectionalStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): BidirectionalStream<T>;
  on(type: 'end', handler: () => void): BidirectionalStream<T>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<T>;
}

export class ExampleServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: ServiceClientOptions);
  classify(
    requestMessage: ExampleService_pb.ClassifyRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: ExampleService_pb.ClassifyResponse|null) => void
  ): void;
  classify(
    requestMessage: ExampleService_pb.ClassifyRequest,
    callback: (error: ServiceError|null, responseMessage: ExampleService_pb.ClassifyResponse|null) => void
  ): void;
}

