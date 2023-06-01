import { Tweet } from 'components/Tweet/Tweet';
import { StyledList, StyledTweet } from './TweetList.styled';

export const TweetsList = ({ tweets }) => {
  return (
    <StyledList>
      {tweets.map(tweet => (
        <StyledTweet key={tweet.id}>
          <Tweet tweet={tweet} />
        </StyledTweet>
      ))}
    </StyledList>
  );
};
