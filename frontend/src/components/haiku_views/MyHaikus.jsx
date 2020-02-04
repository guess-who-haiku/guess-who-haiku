import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Thunks as Haikus } from 'store/haikus/actions';
import { selectCurrentUser, selectAllUsers} from 'store/selectors';
import { Creators as Modal } from 'store/modal/actions';
// import {Page, PageTitle} from 'components/base/Base.styled.js';
// import {HaikuGrid, UserHaiku, LineIndex, LineItem} from 'Haikus.styled.js';
import {Page, PageTitle, HaikuGrid, UserHaiku, LineIndex, LineItem} from './MyHaikus.styled'
import { formatHaiku } from 'util/haiku_format_util';
const Haiku = ({haiku, showModal}) => {
  const lines = formatHaiku(haiku.body, Object.keys(haiku.body));

  return (

  )
}

const MyHaikus = () => {
  
  const { currentUser, users, createdHaikus } = useSelector(state => ({
    currentUser: selectCurrentUser(state),
    users: selectAllUsers(state),
    createdHaikus: currentUser.createdHaikus.map(haikuId=> state.entities.haikus[haikuId])
  }));

  const dispatch = useDispatch();
  const { fetchCreatedHaikus, openHaikuShowModal } = ({
    fetchCreatedHaikus: () => dispatch(Haikus.fetchHaikuChallenges(currentUser.haikusCreated)),
    openHaikuShowModal: haikuId => dispatch(Modal.openModal('haikuShow', haikuId))
  })

  useEffect(() => {
    fetchCreatedHaikus()
  }, [users, currentUser, createdHaikus, fetchCreatedHaikus])

return (
  <Page>
    <PageTitle>My Haikus</PageTitle>
    <HaikuGrid>
      {createdHaikus.map(haiku => (
        <UserHaiku />
      ))}
    </HaikuGrid>
  
  </Page>
)


}

export default MyHaikus;