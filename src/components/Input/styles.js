import styled from "styled-components";

import { colors } from "../../global";

export const InputContainer = styled.div`
  width: 100%;
  height: 75px;
  background-color: ${colors.displayBackground};

  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 5px;

  input {
    width: 100%;
    height: 75%;
    background-color: ${colors.displayBackground};
    border: 0;
    padding: 0 20px;
    font-size: 24px;
    text-align: right;
    color: ${colors.displayText};
  }
`;
