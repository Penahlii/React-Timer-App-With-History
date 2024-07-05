import styled from "styled-components";

export const TimerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: ${(props) => props.theme.colors.background};
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const TimerDisplay = styled.div`
  font-size: 48px;
  margin-bottom: 20px;
  color: ${(props) => props.theme.colors.primary};
`;

export const Button = styled.button`
  background: ${(props) => props.theme.colors.primary};
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  margin: 10px;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.3s ease;

  &:hover {
    background: ${(props) => props.theme.colors.secondary};
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

export const HistoryContainer = styled.div`
  margin-top: 20px;
  width: 100%;
`;

export const HistoryItem = styled.div`
  background: ${(props) => props.theme.colors.secondary};
  padding: 10px;
  margin: 5px 0;
  border-radius: 5px;
  color: #fff;
  text-align: center;
`;
