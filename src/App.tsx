import React, { useState, useEffect, FC } from "react";
import { ChatClient } from "./proto/ChatServiceClientPb";
const { WriteRequest, ReadRequest } = require("./proto/chat_pb");

const chatService = new ChatClient("http://localhost:8000");

export const App = () => {
  const [fromUser, setUser] = useState("");
  const [messages, setMessages] = useState<any[]>();
  const [text, setText] = useState("");

  const getLstMsg = () => {
    const streamRequest = new ReadRequest();
    const stream = chatService.streamLstMsg(streamRequest);

    stream.on("data", (res: any) => {
      const msg = res.toObject();
      setMessages((_messages) => {
        if (!_messages?.length) {
          return [msg];
        }
        return _messages?.length &&
          _messages[_messages?.length - 1].messageId !== msg.messageId
          ? [..._messages, res.toObject()]
          : _messages;
      });
    });
  };

  const sendMsg = (e: any) => {
    e.preventDefault();
    const writeRequest = new WriteRequest();
    writeRequest.setMessage(text);
    writeRequest.setFromUser(fromUser);
    writeRequest.setToUser("user b");
    chatService.writeMsg(writeRequest, {});
    setText("");
  };

  const getMessages = async () => {
    const rq = new ReadRequest();
    const r = await chatService.readMsg(rq, {});
    setMessages(r.toObject().messagesList as any);
  };

  useEffect(() => {
    setUser(prompt("Your name") ?? "");
    getMessages();
    getLstMsg();
  }, []);

  return (
    <div className="App">
      {messages?.map((m) => (
        <MessageItem msg={m} key={m.messageId} />
      ))}

      <form action="submit" onSubmit={sendMsg}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

interface IProps {
  msg: any;
}
const MessageItem: FC<IProps> = ({ msg }) => {
  return (
    <div>
      {msg.message} - {msg.fromUser}
    </div>
  );
};
export default App;
