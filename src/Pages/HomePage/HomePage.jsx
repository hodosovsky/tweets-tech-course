import { Box } from 'components/Box/Box';
import { Link } from 'react-router-dom';
import { StyledHeader } from './HomePage.styled';

const HomePage = () => {
  return (
    <Box height="calc(100vh - 62px)" textAlign="center">
      <StyledHeader>
        To view tweets, follow the link: <Link to="tweets">Tweets</Link>{' '}
      </StyledHeader>
    </Box>
  );
};
export default HomePage;
