import React, { useEffect, memo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Thunks as Haikus } from 'store/haikus/actions';
import { selectCurrentUser, selectAllHaikus } from 'store/selectors';
import { Creators as Modal } from 'store/modal/actions';
import { Page, PageTitle } from 'styled/base/Page.styled';
import { CardGrid } from 'styled/base/CardGrid.styled';
import MyHaiku from './MyHaiku';

const MyHaikus = () => {

  const dispatch = useDispatch();
  const fetchUserHaikus = haikuIds => dispatch(Haikus.fetchHaikuChallenges(haikuIds))
  const openHaikuShow = haikuId => dispatch(Modal.openModal('haikuShow', haikuId))
  const { currentUser, users, userHaikus } = useSelector(state => ({
    currentUser: selectCurrentUser(state),
    users: state.entities.users,
    userHaikus: selectAllHaikus(state)
  }))

  useEffect(() => {
    if (currentUser) {
      fetchUserHaikus(currentUser.haikusCreated)
    }
  }, [users])

  // const createdHaikus = currentUser.createdHaikus.map(haikuId => haikus[haikuId]);

  return (
    <Page>
      <PageTitle>My Haikus</PageTitle>
      <CardGrid>
        {userHaikus && userHaikus.map((haiku, idx) => (
          <MyHaiku
            key={haiku._id}
            haiku={haiku}
            openHaikuShow={openHaikuShow}
            idx={idx}
            users={users}
          />
        ))}
      </CardGrid>
    </Page>
  )


}

export default MyHaikus;