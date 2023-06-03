import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

import { Box } from 'components/Box/Box';
import { P } from 'components/P/P';
import picture1 from '../../images/picture-1.png';
import picture2 from '../../images/picture-2.png';
import logo1 from '../../images/logo.png';
import logo2 from '../../images/logo-2.png';
import { AvatarStyled, PictureStyled } from './UserCard.styled';
import { numberFormating } from 'helpers/helpers';
import { Button } from 'components/Button/Button';
import { useFollowTogleMutation } from 'redux/api/usersApi';
import { getUserFollow, setFollow } from 'redux/slice/followSlice';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const UserCard = ({ user }) => {
  const dispatch = useDispatch();
  const [followers, setFollowers] = useState(user.followers);

  const [userFollows] = useFollowTogleMutation();
  const userFollow = useSelector(getUserFollow);

  const handleTogleFollow = () => {
    const followed = {};

    if (userFollow?.includes(user.id)) {
      setFollowers(prevState => prevState - 1);

      followed.followers = followers - 1;
      followed.id = user.id;

      userFollows(followed);

      dispatch(setFollow(userFollow.filter(el => el !== user.id)));
      Notify.info('Remove from followings');
    } else {
      setFollowers(prevState => prevState + 1);

      followed.followers = followers + 1;
      followed.id = user.id;

      userFollows(followed);

      const updatedFollows = [...userFollow, user.id];

      dispatch(setFollow(updatedFollows));
      Notify.success('Add to following');
    }
  };

  return (
    <>
      <picture>
        <source srcSet={`${picture1} 1x, ${picture2} 2x`} />
        <img src={picture1} alt="tweet" />
      </picture>

      <PictureStyled>
        <source srcSet={`${logo1} 1x, ${logo2} 2x`} />
        <img src={logo1} alt="logo" />
      </PictureStyled>

      <Box
        position="absolute"
        width={380}
        height={8}
        left={0}
        top={214}
        backgroundColor="followButtonBackground"
        boxShadow="0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06), inset 0px -1.71846px 3.43693px #AE7BE3, inset 0px 3.43693px 2.5777px #FBF8FF"
      ></Box>

      <Box
        position="absolute"
        top={178}
        left={150}
        zIndex={2}
        width={80}
        height={80}
        boxShadow="0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06), inset 0px -2.19582px 4.39163px #AE7BE3, inset 0px 4.39163px 3.29372px #FBF8FF;"
        borderRadius="round"
      >
        <AvatarStyled src={user.avatar} alt="avatar" />
      </Box>

      <Box mt={86}>
        <P>{user.tweets} tweets</P>
        <Box mt={16} mb={26}>
          <P>{numberFormating(followers)} Followers</P>
        </Box>
      </Box>
      <Button
        following={userFollow?.includes(user.id)}
        onClick={handleTogleFollow}
      >
        {userFollow?.includes(user.id) ? 'Following' : 'follow'}
      </Button>
    </>
  );
};
