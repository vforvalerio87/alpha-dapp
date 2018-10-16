// package: 
// file: ExampleService.proto

import * as jspb from "google-protobuf";

export class ClassifyRequest extends jspb.Message {
  getImageType(): string;
  setImageType(value: string): void;

  getImage(): string;
  setImage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClassifyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ClassifyRequest): ClassifyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClassifyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClassifyRequest;
  static deserializeBinaryFromReader(message: ClassifyRequest, reader: jspb.BinaryReader): ClassifyRequest;
}

export namespace ClassifyRequest {
  export type AsObject = {
    imageType: string,
    image: string,
  }
}

export class ClassifyResponse extends jspb.Message {
  clearPredictionsList(): void;
  getPredictionsList(): Array<string>;
  setPredictionsList(value: Array<string>): void;
  addPredictions(value: string, index?: number): string;

  clearConfidencesList(): void;
  getConfidencesList(): Array<number>;
  setConfidencesList(value: Array<number>): void;
  addConfidences(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClassifyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ClassifyResponse): ClassifyResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClassifyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClassifyResponse;
  static deserializeBinaryFromReader(message: ClassifyResponse, reader: jspb.BinaryReader): ClassifyResponse;
}

export namespace ClassifyResponse {
  export type AsObject = {
    predictionsList: Array<string>,
    confidencesList: Array<number>,
  }
}

