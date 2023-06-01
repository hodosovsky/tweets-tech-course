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
