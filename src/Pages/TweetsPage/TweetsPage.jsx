import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useGetUsersQuery, useLazyGetUsersQuery } from 'redux/api/usersApi';
import { Loader } from 'components/Loader/Loader';
import { getUsersCollection } from 'redux/slice/usersSlice';
import { UserList } from 'components/UsersList/UsersList';

const TweetsPage = () => {
  const { data, isFetching, isError, error } = useGetUsersQuery();

  const users = useSelector(getUsersCollection);

  const [getUsers] = useLazyGetUsersQuery();

  useEffect(() => {
    getUsers(null, { skip: !users });
  }, [getUsers, users]);

  return (
    <>
      {data && <UserList users={data} />}

      {isFetching && <Loader />}

      {isError && <h1>{error?.data}</h1>}
    </>
  );
};

export default TweetsPage;
