import { Button } from './Button/Button';
import { AiFillCar } from 'react-icons/ai';
import { RotatingLines } from 'react-loader-spinner';
import { Box } from './Box/Box';

import { getTweets } from '../redux/slice/tweetsSlice';

import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useGetTweetsQuery, useLazyGetTweetsQuery } from 'redux/api/tweetsApi';

// const Text = styled.p`
//   /* color: ${p => p.theme.colors.primary}; */
//   /* font-family: ${p => p.theme.fonts.monospace}; */
//   /* font-size: ${p => p.theme.fontSizes.xl}; */
//   /* font-weight: ${p => p.theme.fontWeight.normal}; */

//   border: ${p => p.theme.borders.mormal};
//   /* padding: ${p => p.theme.space[3]}; */
// `;

export const App = () => {
  const { data, isFetching } = useGetTweetsQuery('/');
  console.log('data:', data);
  const tweets = useSelector(getTweets);

  const [fetchUser] = useLazyGetTweetsQuery();
  useEffect(() => {
    fetchUser(null, { skip: !tweets.id });
  }, [fetchUser, tweets.id]);

  return (
    <Box
      fontFamily="body"
      bg="white"
      color="text"
      px={4}
      py={5}
      height="100%"
      width="100%"
      fontSize="m"
      display="flex"
      flexWrap="wrap"
      justifyContent="center"
      as="main"
    >
      <Button icon={AiFillCar}>Follow</Button>
      <Button following={true}>Following</Button>

      {isFetching && (
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
      )}

      {data && !isFetching && (
        <ul
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: 40,
            listStyle: 'none',
            paddingLeft: 0,
          }}
        >
          {data.map(item => (
            <li key={item.id} style={{ width: 200 }}>
              <img src={item.avatar} alt={item.user} />
              {item.user}
            </li>
          ))}
        </ul>
      )}

      {/* {isError && <h1>{error?.data}</h1>} */}
    </Box>
  );
};
