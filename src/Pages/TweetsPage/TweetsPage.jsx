import { useSelector } from 'react-redux';
import { useCallback, useEffect, useState } from 'react';
import { useGetUsersQuery } from 'redux/api/usersApi';
import { Loader } from 'components/Loader/Loader';

import { UserList } from 'components/UsersList/UsersList';
import { Button } from 'components/Button/Button';
import { getUserFollow } from 'redux/slice/followSlice';
import { Box } from 'components/Box/Box';
import { Link } from 'react-router-dom';

const TweetsPage = () => {
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState('all');
  const { data, isFetching, isError, error } = useGetUsersQuery();
  const followUsers = useSelector(getUserFollow);

  const userSort = useCallback(
    filter => {
      switch (filter) {
        case 'all':
          return data;
        case 'followings':
          return data.filter(el => followUsers.includes(el.id));
        case 'follow':
          return data.filter(el => !followUsers.includes(el.id));
        default:
          break;
      }
    },
    [data, followUsers]
  );

  useEffect(() => {
    data &&
      setUsers(prev => [
        ...prev,
        ...userSort(filter).slice(page * 6 - 6, page * 6),
      ]);
  }, [data, filter, page, userSort]);

  const handleFilterChange = e => {
    setPage(1);
    setUsers([]);
    setFilter(e.target.value);
  };

  const handleLodaMoreClick = () => {
    setPage(prev => prev + 1);
  };

  return (
    <>
      <Link to="/">Go BACK</Link>

      <Box mb={20} mt={20} justifySelf="flex-start">
        <label>
          Filter:
          <select value={filter} onChange={handleFilterChange}>
            <option value="all">Show All</option>
            <option value="follow">Follow</option>
            <option value="followings">Followings</option>
          </select>
        </label>
      </Box>

      {users && <UserList users={users} />}

      {users.length >= page * 6 && (
        <Button following={true} onClick={handleLodaMoreClick}>
          Load more
        </Button>
      )}

      {isFetching && <Loader />}

      {isError && <h1>{error?.data}</h1>}
    </>
  );
};

export default TweetsPage;
