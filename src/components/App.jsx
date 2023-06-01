import { RotatingLines } from 'react-loader-spinner';
import { Box } from './Box/Box';
import { getTweets } from '../redux/slice/tweetsSlice';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useGetTweetsQuery, useLazyGetTweetsQuery } from 'redux/api/tweetsApi';
import { TweetsList } from './TweetsList/TweetList';

export const App = () => {
  const { data, isFetching, isError, error } = useGetTweetsQuery('/');
  console.log('data:', data);
  const tweets = useSelector(getTweets);

  const [getFollowing] = useLazyGetTweetsQuery();
  useEffect(() => {
    getFollowing(null, { skip: !tweets.id });
  }, [getFollowing, tweets.id]);

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
      {data && <TweetsList tweets={data} />}

      {isFetching && (
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
      )}

      {isError && <h1>{error?.data}</h1>}
    </Box>
  );
};
