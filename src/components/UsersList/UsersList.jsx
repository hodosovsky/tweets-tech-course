import PropTypes from 'prop-types';
import { UserCard } from 'components/UserCard/UserCard';
import { StyledList, StyledCard } from './UsersList.styled';

export const UserList = ({ users }) => {
  return (
    <StyledList>
      {users.map(user => (
        <StyledCard key={user.id}>
          <UserCard user={user} />
        </StyledCard>
      ))}
    </StyledList>
  );
};

UserList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      User: PropTypes.string.isRequired,
      tweets: PropTypes.string.isRequired,
      followers: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
    })
  ),
};
