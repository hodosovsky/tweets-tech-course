import { StyledButton } from './Button.styled';

export const Button = ({ type = 'button', children, following = false }) => {
  return (
    <StyledButton type={type} following={following}>
      {children}
    </StyledButton>
  );
};
