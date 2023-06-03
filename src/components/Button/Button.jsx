import PropTypes from 'prop-types';
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

Button.propTypes = {
  type: PropTypes.string,
  following: PropTypes.bool,
};
