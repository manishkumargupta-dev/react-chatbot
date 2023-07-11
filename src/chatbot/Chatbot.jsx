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

const FloatingWindow = styled.div``;

const Chatbot = () => {
  const [messages, setMessages] = useState(fakeMessages);
  const [windowIsOpen, setWindowIsOpen] = useState(false);
  const unreadMessages = messages.filter((m) => m.isUnread);
  return (
    <FloatingContainer>
      {windowIsOpen && (
        <FloatingWindow>
          <MessagesList />
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
