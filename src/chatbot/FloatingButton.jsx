import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
const Button = styled.button`
  position: absolute;
  right: 0;
  bottom: 0;

  height: 72px;
  width: 72px;
  border-radius: 50%;
  text-align: center;

  background-color: white;
  color: black;
  cursor: pointer;
`;

const FloatingButton = () => {
  return (
    <Button>
      <FontAwesomeIcon icon={faMessage} size="2x" />
    </Button>
  );
};
export default FloatingButton;
