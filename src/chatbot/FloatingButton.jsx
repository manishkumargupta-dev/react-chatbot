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

const CountBadge = styled.span`
  position: absolute;
  right: 0;
  top: 0;

  height: 16px;
  width: 16px;
  border-radius: 16px;
  padding: 6px;

  background-color: #fa3e3e;
  color: white;
  font-weight: bold;
`;

const FloatingButton = ({ unreadCount, onClick }) => {
  return (
    <Button onClick={onClick}>
      <FontAwesomeIcon icon={faMessage} size="2x" />
      {unreadCount > 0 && <CountBadge>{unreadCount}</CountBadge>}
    </Button>
  );
};
export default FloatingButton;
