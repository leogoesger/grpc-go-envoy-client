/**
 * @fileoverview gRPC-Web generated client stub for chat
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as src_proto_chat_pb from '../../src/proto/chat_pb';


export class ChatClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoReadMsg = new grpcWeb.AbstractClientBase.MethodInfo(
    src_proto_chat_pb.ReadResponse,
    (request: src_proto_chat_pb.ReadRequest) => {
      return request.serializeBinary();
    },
    src_proto_chat_pb.ReadResponse.deserializeBinary
  );

  readMsg(
    request: src_proto_chat_pb.ReadRequest,
    metadata: grpcWeb.Metadata | null): Promise<src_proto_chat_pb.ReadResponse>;

  readMsg(
    request: src_proto_chat_pb.ReadRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: src_proto_chat_pb.ReadResponse) => void): grpcWeb.ClientReadableStream<src_proto_chat_pb.ReadResponse>;

  readMsg(
    request: src_proto_chat_pb.ReadRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: src_proto_chat_pb.ReadResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/chat.Chat/ReadMsg',
        request,
        metadata || {},
        this.methodInfoReadMsg,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/chat.Chat/ReadMsg',
    request,
    metadata || {},
    this.methodInfoReadMsg);
  }

  methodInfoWriteMsg = new grpcWeb.AbstractClientBase.MethodInfo(
    src_proto_chat_pb.Message,
    (request: src_proto_chat_pb.WriteRequest) => {
      return request.serializeBinary();
    },
    src_proto_chat_pb.Message.deserializeBinary
  );

  writeMsg(
    request: src_proto_chat_pb.WriteRequest,
    metadata: grpcWeb.Metadata | null): Promise<src_proto_chat_pb.Message>;

  writeMsg(
    request: src_proto_chat_pb.WriteRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: src_proto_chat_pb.Message) => void): grpcWeb.ClientReadableStream<src_proto_chat_pb.Message>;

  writeMsg(
    request: src_proto_chat_pb.WriteRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: src_proto_chat_pb.Message) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/chat.Chat/WriteMsg',
        request,
        metadata || {},
        this.methodInfoWriteMsg,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/chat.Chat/WriteMsg',
    request,
    metadata || {},
    this.methodInfoWriteMsg);
  }

  methodInfoStreamLstMsg = new grpcWeb.AbstractClientBase.MethodInfo(
    src_proto_chat_pb.Message,
    (request: src_proto_chat_pb.ReadRequest) => {
      return request.serializeBinary();
    },
    src_proto_chat_pb.Message.deserializeBinary
  );

  streamLstMsg(
    request: src_proto_chat_pb.ReadRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/chat.Chat/StreamLstMsg',
      request,
      metadata || {},
      this.methodInfoStreamLstMsg);
  }

}

