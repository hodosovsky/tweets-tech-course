import styled from 'styled-components';

export const StyledHeader = styled.h1`
  margin: 0;
  line-height: calc(100vh - 90px);
  color: ${p => p.theme.colors.secondaryText};

  & a {
    text-decoration: none;
  }
`;
