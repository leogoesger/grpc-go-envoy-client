/**
 * @fileoverview gRPC-Web generated client stub for chat
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.chat = require('./chat_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.chat.ChatClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.chat.ChatPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.chat.ReadRequest,
 *   !proto.chat.ReadResponse>}
 */
const methodDescriptor_Chat_ReadMsg = new grpc.web.MethodDescriptor(
  '/chat.Chat/ReadMsg',
  grpc.web.MethodType.UNARY,
  proto.chat.ReadRequest,
  proto.chat.ReadResponse,
  /**
   * @param {!proto.chat.ReadRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.chat.ReadResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.chat.ReadRequest,
 *   !proto.chat.ReadResponse>}
 */
const methodInfo_Chat_ReadMsg = new grpc.web.AbstractClientBase.MethodInfo(
  proto.chat.ReadResponse,
  /**
   * @param {!proto.chat.ReadRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.chat.ReadResponse.deserializeBinary
);


/**
 * @param {!proto.chat.ReadRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.chat.ReadResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.chat.ReadResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.chat.ChatClient.prototype.readMsg =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/chat.Chat/ReadMsg',
      request,
      metadata || {},
      methodDescriptor_Chat_ReadMsg,
      callback);
};


/**
 * @param {!proto.chat.ReadRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.chat.ReadResponse>}
 *     Promise that resolves to the response
 */
proto.chat.ChatPromiseClient.prototype.readMsg =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/chat.Chat/ReadMsg',
      request,
      metadata || {},
      methodDescriptor_Chat_ReadMsg);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.chat.WriteRequest,
 *   !proto.chat.Message>}
 */
const methodDescriptor_Chat_WriteMsg = new grpc.web.MethodDescriptor(
  '/chat.Chat/WriteMsg',
  grpc.web.MethodType.UNARY,
  proto.chat.WriteRequest,
  proto.chat.Message,
  /**
   * @param {!proto.chat.WriteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.chat.Message.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.chat.WriteRequest,
 *   !proto.chat.Message>}
 */
const methodInfo_Chat_WriteMsg = new grpc.web.AbstractClientBase.MethodInfo(
  proto.chat.Message,
  /**
   * @param {!proto.chat.WriteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.chat.Message.deserializeBinary
);


/**
 * @param {!proto.chat.WriteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.chat.Message)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.chat.Message>|undefined}
 *     The XHR Node Readable Stream
 */
proto.chat.ChatClient.prototype.writeMsg =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/chat.Chat/WriteMsg',
      request,
      metadata || {},
      methodDescriptor_Chat_WriteMsg,
      callback);
};


/**
 * @param {!proto.chat.WriteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.chat.Message>}
 *     Promise that resolves to the response
 */
proto.chat.ChatPromiseClient.prototype.writeMsg =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/chat.Chat/WriteMsg',
      request,
      metadata || {},
      methodDescriptor_Chat_WriteMsg);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.chat.ReadRequest,
 *   !proto.chat.Message>}
 */
const methodDescriptor_Chat_StreamLstMsg = new grpc.web.MethodDescriptor(
  '/chat.Chat/StreamLstMsg',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.chat.ReadRequest,
  proto.chat.Message,
  /**
   * @param {!proto.chat.ReadRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.chat.Message.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.chat.ReadRequest,
 *   !proto.chat.Message>}
 */
const methodInfo_Chat_StreamLstMsg = new grpc.web.AbstractClientBase.MethodInfo(
  proto.chat.Message,
  /**
   * @param {!proto.chat.ReadRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.chat.Message.deserializeBinary
);


/**
 * @param {!proto.chat.ReadRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.chat.Message>}
 *     The XHR Node Readable Stream
 */
proto.chat.ChatClient.prototype.streamLstMsg =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/chat.Chat/StreamLstMsg',
      request,
      metadata || {},
      methodDescriptor_Chat_StreamLstMsg);
};


/**
 * @param {!proto.chat.ReadRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.chat.Message>}
 *     The XHR Node Readable Stream
 */
proto.chat.ChatPromiseClient.prototype.streamLstMsg =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/chat.Chat/StreamLstMsg',
      request,
      metadata || {},
      methodDescriptor_Chat_StreamLstMsg);
};


module.exports = proto.chat;

