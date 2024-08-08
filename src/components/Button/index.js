import { ButtonContainer } from "./styles";

export const Button = ({ label, onClick }) => (
  <ButtonContainer onClick={onClick} type="button">
    {label}
  </ButtonContainer>
);
