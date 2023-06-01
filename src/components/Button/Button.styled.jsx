import styled from 'styled-components';

export const StyledButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 14px 56px;
  font-family: inherit;
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeight.bold};
  text-transform: uppercase;
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.normal};
  color: ${p => p.theme.colors.secondaryText};
  background-color: ${p =>
    p.following
      ? p.theme.colors.folowingButtonBackground
      : p.theme.colors.followButtonBackground};

  &:hover,
  &:focus {
    background-color: ${p =>
      p.following
        ? p.theme.colors.folowingButtonHover
        : p.theme.colors.followButtonHover};
  }
`;
