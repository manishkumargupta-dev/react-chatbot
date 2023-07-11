import styled from "styled-components";
import FloatingButton from "./FloatingButton";
import { useState } from "react";
import fakeMessages from "./fakeMessages";
const FloatingContainer = styled.div`
  position: fixed;
  right: 32px;
  bottom: 32px;
`;

const Chatbot = () => {
  const [messages, setMessages] = useState(fakeMessages);
  const unreadMessages = messages.filter((m) => m.isUnread);
  return (
    <FloatingContainer>
      <FloatingButton unreadCount={unreadMessages.length} />
    </FloatingContainer>
  );
};

export default Chatbot;
