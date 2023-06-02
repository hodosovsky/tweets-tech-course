import { StyledButton } from './Button.styled';

export const Button = ({
  type = 'button',
  children,
  following = false,
  ...props
}) => {
  return (
    <StyledButton type={type} following={following} {...props}>
      {children}
    </StyledButton>
  );
};
