import { Box } from './Box/Box';
import { getUsersCollection } from '../redux/slice/usersSlice';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useGetUsersQuery, useLazyGetUsersQuery } from 'redux/api/usersApi';
import { UserList } from './UsersList/UsersList';
import { Loader } from './Loader/Loader';

export const App = () => {
  const { data, isFetching, isError, error } = useGetUsersQuery();
  console.log('error:', error);
  const users = useSelector(getUsersCollection);
  const [getUsers] = useLazyGetUsersQuery();

  useEffect(() => {
    getUsers(null, { skip: !users });
  }, [getUsers, users]);

  return (
    <Box fontFamily="body" bg="white" color="text" fontSize="m" as="main">
      {data && <UserList users={data} />}

      {isFetching && <Loader />}

      {isError && <h1>{error?.data}</h1>}
    </Box>
  );
};
