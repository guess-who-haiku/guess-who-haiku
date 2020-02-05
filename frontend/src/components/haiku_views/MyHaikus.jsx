import React, { useState, useEffect, memo } from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import {Page, PageTitle} from 'components/base/Base.styled.js';
// import {HaikuGrid, UserHaiku, LineIndex, LineItem} from 'Haikus.styled.js';
import { Thunks as Haikus } from 'store/haikus/actions';
import { selectCurrentUser, selectAllHaikus } from 'store/selectors';
import { Creators as Modal } from 'store/modal/actions';
import { Page, PageTitle, HaikuGrid, UserHaiku, LineIndex, LineIndexItem, LineAvatar, LineText } from './MyHaikus.styled'
import { formatHaiku, formatHaikuLines } from 'util/haiku_format_util';

const Haiku = memo(({ haiku, openHaikuShow }) => {
  const lines = formatHaikuLines(haiku.body)
  // const lines = []
  return (
    <UserHaiku>
      <LineIndex>
        {lines.map(({author, text}, idx) => (
          <LineIndexItem key={idx}>
            <LineAvatar
              data-color={author.color}
              src={author.url}
              alt={author.name}
            />
            <LineText>{text}</LineText>
          </LineIndexItem>
        ))}
      </LineIndex>
    </UserHaiku>
  )
})

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
      <HaikuGrid>
        {userHaikus && userHaikus.map(haiku => (
          <Haiku haiku={haiku} key={haiku._id} openHaikuShow={openHaikuShow} />
        ))}
      </HaikuGrid>
    </Page>
  )


}

export default MyHaikus;