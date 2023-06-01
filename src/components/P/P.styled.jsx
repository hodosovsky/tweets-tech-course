import styled from 'styled-components';

export const StyledP = styled.p`
  color: ${p => p.theme.colors.primaryText};
  font-weight: ${p => p.theme.fontWeight.normal};
  font-size: ${p => p.theme.fontSizes.l};
  line-height: ${p => p.theme.lineHeight.body};
  text-transform: uppercase;
  margin: ${p => p.theme.space[0]};
`;
