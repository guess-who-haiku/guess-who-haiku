import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Thunks as Haikus } from 'store/haikus/actions';
import { selectCurrentUser, selectAllHaikus } from 'store/selectors';
import { Page, PageTitle, PageMenu, PageMenuItem } from 'styled/base/Page.styled';
import { CardGrid } from 'styled/base/CardGrid.styled';
import Challenge from './Challenge';
import { compareHaikuDateCreated as compareDate } from './compare_time_util'

const MyChallenges = () => {
  const [filter, setFilter] = useState('unsolved');
  const dispatch = useDispatch();
  const fetchChallenges = user => dispatch(Haikus.fetchHaikuChallenges(user.haikusSharedWith))
  let { currentUser, users, haikus } = useSelector(state => ({
    currentUser: selectCurrentUser(state),
    users: state.entities.users,
    haikus: selectAllHaikus(state)
  }))

  useEffect(() => {
    if (currentUser) {
      fetchChallenges(currentUser)
    }
  }, [users])

  const sharedHaikus = user => haikus.filter(({ _id }) => user.haikusSharedWith.includes(_id));
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
      <CardGrid>
        {haikus && sharedHaikus(currentUser)
          .filter(({ usersSharedWith }) => {
            return usersSharedWith
              .find(({ userId }) => userId === currentUser._id)
              .complete === (filter === 'solved')

          })
          .sort(compareDate)
          .map((haiku, idx) => (
            <Challenge
              dateCreated={haiku.dateCreated}
              key={haiku._id}
              haiku={haiku}
              idx={idx}
              currentUserId={currentUser._id}
            />
          ))}
      </CardGrid>
    </Page>
  )


}

export default MyChallenges;