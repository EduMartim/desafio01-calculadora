import styled from "styled-components";

import { colors } from "../../global";

export const ButtonContainer = styled.button`
  width: 25%;
  height: 60px;
  color: ${colors.buttonBackground};
  background-color: ${colors.buttonText};
  /* border: 1px solid; */
  border-radius: 10px;
  font-size: 24px;
  cursor: pointer;
  /* sombra */
  box-shadow: 2px 2px 2px ${colors.buttonText};

  &:hover {
    background-color: ${({ color }) => color};
    opacity: 0.8;
  }
`;
