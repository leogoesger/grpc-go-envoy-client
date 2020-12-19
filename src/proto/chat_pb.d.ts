import * as jspb from 'google-protobuf'



export class ReadRequest extends jspb.Message {
  getName(): string;
  setName(value: string): ReadRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReadRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReadRequest): ReadRequest.AsObject;
  static serializeBinaryToWriter(message: ReadRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReadRequest;
  static deserializeBinaryFromReader(message: ReadRequest, reader: jspb.BinaryReader): ReadRequest;
}

export namespace ReadRequest {
  export type AsObject = {
    name: string,
  }
}

export class WriteRequest extends jspb.Message {
  getToUser(): string;
  setToUser(value: string): WriteRequest;

  getFromUser(): string;
  setFromUser(value: string): WriteRequest;

  getMessage(): string;
  setMessage(value: string): WriteRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WriteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WriteRequest): WriteRequest.AsObject;
  static serializeBinaryToWriter(message: WriteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WriteRequest;
  static deserializeBinaryFromReader(message: WriteRequest, reader: jspb.BinaryReader): WriteRequest;
}

export namespace WriteRequest {
  export type AsObject = {
    toUser: string,
    fromUser: string,
    message: string,
  }
}

export class Message extends jspb.Message {
  getMessageId(): string;
  setMessageId(value: string): Message;

  getToUser(): string;
  setToUser(value: string): Message;

  getFromUser(): string;
  setFromUser(value: string): Message;

  getMessage(): string;
  setMessage(value: string): Message;

  getDateCreated(): string;
  setDateCreated(value: string): Message;

  getDateUpdated(): string;
  setDateUpdated(value: string): Message;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Message.AsObject;
  static toObject(includeInstance: boolean, msg: Message): Message.AsObject;
  static serializeBinaryToWriter(message: Message, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Message;
  static deserializeBinaryFromReader(message: Message, reader: jspb.BinaryReader): Message;
}

export namespace Message {
  export type AsObject = {
    messageId: string,
    toUser: string,
    fromUser: string,
    message: string,
    dateCreated: string,
    dateUpdated: string,
  }
}

export class ReadResponse extends jspb.Message {
  getMessagesList(): Array<Message>;
  setMessagesList(value: Array<Message>): ReadResponse;
  clearMessagesList(): ReadResponse;
  addMessages(value?: Message, index?: number): Message;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReadResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ReadResponse): ReadResponse.AsObject;
  static serializeBinaryToWriter(message: ReadResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReadResponse;
  static deserializeBinaryFromReader(message: ReadResponse, reader: jspb.BinaryReader): ReadResponse;
}

export namespace ReadResponse {
  export type AsObject = {
    messagesList: Array<Message.AsObject>,
  }
}

