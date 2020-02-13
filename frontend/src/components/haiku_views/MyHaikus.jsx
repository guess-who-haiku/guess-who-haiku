import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Thunks as Haikus } from 'store/haikus/actions';
import { selectCurrentUser, selectAllHaikus } from 'store/selectors';
import { Page, PageTitle } from 'styled/base/Page.styled';
import { CardGrid } from 'styled/base/CardGrid.styled';
import MyHaiku from './MyHaiku';
import { compareHaikuDateCreated as compareDate } from './compare_time_util'

const MyHaikus = () => {
  const dispatch = useDispatch();
  const fetchUserHaikus = user => dispatch(Haikus.fetchHaikuChallenges(user.haikusCreated))
  let { currentUser, users, userHaikus } = useSelector(state => ({
    currentUser: selectCurrentUser(state),
    users: state.entities.users,
    userHaikus: selectAllHaikus(state)
  }))

  useEffect(() => {
    if (currentUser) {
      fetchUserHaikus(currentUser)
    }
  }, [users])

  const createdHaikus = user => userHaikus
    .filter(({ _id }) => user.haikusCreated.includes(_id))
    .sort(compareDate);

  return (
    <Page>
      <PageTitle>My Haikus</PageTitle>
      <CardGrid>
        {userHaikus && createdHaikus(currentUser).map((haiku, idx) => (
          <MyHaiku
            key={haiku._id}
            haiku={haiku}
            idx={idx}
            users={users}
          />
        ))}
      </CardGrid>
    </Page>
  )


}

export default MyHaikus;