import styled from "styled-components";
import FloatingButton from "./FloatingButton";
const FloatingContainer = styled.div`
  position: fixed;
  right: 32px;
  bottom: 32px;
`;

const Chatbot = () => {
  return (
    <FloatingContainer>
      <FloatingButton />
    </FloatingContainer>
  );
};

export default Chatbot;
