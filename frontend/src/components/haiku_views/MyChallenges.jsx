import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Thunks as Haikus } from 'store/haikus/actions';
import { selectCurrentUser, selectAllHaikus } from 'store/selectors';
import { Page, PageTitle, PageMenu, PageMenuItem, PageText } from 'styled/base/Page.styled';
import { CardGrid } from 'styled/base/CardGrid.styled';
import MyChallenge from './MyChallenge';
import { compareHaikuDateCreated as compareDate } from './compare_time_util';
import LoadingSpinner from './LoadingSpinner';

const MyChallenges = () => {
  const [loading, setLoading] = useState(true);

  const [filter, setFilter] = useState('unsolved');

  const dispatch = useDispatch();
  const fetchChallenges = user => dispatch(Haikus.fetchHaikuChallenges(user.haikusSharedWith))
  let { currentUser, users, haikus } = useSelector(state => ({
    currentUser: selectCurrentUser(state),
    users: state.entities.users,
    haikus: selectAllHaikus(state)
  }))

  useEffect(() => {
    if (currentUser) fetchChallenges(currentUser)
      .then(() => setLoading(false));
    
  }, [users])

  const sharedHaikus = haikus
    .filter(({ _id }) => currentUser.haikusSharedWith.includes(_id))
    .filter(({ usersSharedWith }) => {
      return usersSharedWith
        .find(({ userId }) => userId === currentUser._id)
        .complete === (filter === 'solved')
    }).sort(compareDate);

  return (
    <Page>
      <PageTitle>My Challenges</PageTitle>
      <PageMenu>
        <PageMenuItem
          onClick={() => setFilter('unsolved')}
          disabled={filter === 'solved'}
        >
          Unsolved
        </PageMenuItem>
        <PageMenuItem
          onClick={() => setFilter('solved')}
          disabled={filter === 'unsolved'}
        >
          Solved
        </PageMenuItem>
      </PageMenu>
      {loading ? <LoadingSpinner /> : (sharedHaikus.length ? (
        <CardGrid>
          {sharedHaikus
            .map((haiku, idx) => (
              <MyChallenge
                dateCreated={haiku.dateCreated}
                key={haiku._id}
                haiku={haiku}
                idx={idx}
                currentUserId={currentUser._id}
              />
            ))}
        </CardGrid>
      ) : <PageText>You have no {filter} challenges</PageText>)
      }
    </Page>
  )


}

export default MyChallenges;