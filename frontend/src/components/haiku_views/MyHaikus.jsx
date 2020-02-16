import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Thunks as Haikus } from 'store/haikus/actions';
import { selectCurrentUser, selectAllHaikus } from 'store/selectors';
import { Page, PageTitle, PageText } from 'styled/base/Page.styled';
import { CardGrid } from 'styled/base/CardGrid.styled';
import { CreateHaikuCard, Feather } from './MyHaikus.styled';
import MyHaiku from './MyHaiku';
import { compareHaikuDateCreated as compareDateCreated } from './compare_time_util'

const MyHaikus = () => {
  const dispatch = useDispatch();
  const fetchUserHaikus = user => dispatch(Haikus.fetchHaikuChallenges(user.haikusCreated))
  let { currentUser, users, haikus } = useSelector(state => ({
    currentUser: selectCurrentUser(state),
    users: state.entities.users,
    haikus: selectAllHaikus(state)
  }))

  useEffect(() => {
    if (currentUser) {
      fetchUserHaikus(currentUser)
    }
  }, [users])

  const createdHaikus = haikus
    .filter(({ _id }) => currentUser.haikusCreated.includes(_id))
    .sort(compareDateCreated);


  return (
    <Page>
      <PageTitle>My Haikus</PageTitle>
      {createdHaikus.length ? (
        <CardGrid>
          <CreateHaikuCard>
            <Feather />
          </CreateHaikuCard>
          {createdHaikus.map((haiku, idx) => (
            <MyHaiku
              key={haiku._id}
              haiku={haiku}
              idx={idx}
              users={users}
            />
          ))}
        </CardGrid>
      ) : <PageText>Looks like you haven't created any Haikus yet.</PageText>}
    </Page>
  )


}

export default MyHaikus;

