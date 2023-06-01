import styled from 'styled-components';

export const StyledList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin: 0;
  padding: 26px 36px 36px 36px;
`;

export const StyledCard = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 26px 36px 36px 36px;
  border-radius: ${p => p.theme.radii.normal};
  text-align: center;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
`;
