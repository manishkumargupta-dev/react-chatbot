import styled from "styled-components";
import FloatingButton from "./FloatingButton";
import { useState } from "react";
import fakeMessages from "./fakeMessages";
import NewMessageForm from "./NewMessageForm";
import MessagesList from "./MessagesList";
const FloatingContainer = styled.div`
  position: fixed;
  right: 32px;
  bottom: 32px;
`;

const FloatingWindow = styled.div`
  position: absolute;
  right: 0;
  bottom: 80px;
  background-color: white;
  color: black;
  border-radius: 8px;
  box-shadow: 0px 5px 15px black;
  width: 400px;
  height: 400px;
  display: flex;
  flex-direction: column;
  z-index: 2;
  padding: 8px;
`;

const MessagesSection = styled.div`
  overflow: auto;
  padding: 8px;
  flex: 1;
`;

const Chatbot = () => {
  const [messages, setMessages] = useState(fakeMessages);
  const [windowIsOpen, setWindowIsOpen] = useState(false);
  const unreadMessages = messages.filter((m) => m.isUnread);
  return (
    <FloatingContainer>
      {windowIsOpen && (
        <FloatingWindow>
          <MessagesSection>
            <MessagesList messages={messages} />
          </MessagesSection>
          <NewMessageForm />
        </FloatingWindow>
      )}
      <FloatingButton
        unreadCount={unreadMessages.length}
        onClick={() => setWindowIsOpen(!windowIsOpen)}
      />
    </FloatingContainer>
  );
};

export default Chatbot;
