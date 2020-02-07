import React, {useEffect, memo } from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import {Page, PageTitle} from 'components/base/Base.styled.js';
// import {HaikuGrid, UserHaiku, LineIndex, LineItem} from 'Haikus.styled.js';
import { Thunks as Haikus } from 'store/haikus/actions';
import { selectCurrentUser, selectAllHaikus } from 'store/selectors';
import { Creators as Modal } from 'store/modal/actions';
import { Page, PageTitle, HaikuGrid, UserHaiku, LineIndex, LineIndexItem, AuthorBox, AuthorImg, Text, Footer, Share, ShareUsers, ShareIcon, Config, S, Btn, DeleteIcon } from './MyHaikus.styled'
import { formatHaikuLines } from 'util/haiku_format_util';

const sharedUsers = (haiku, users) => {
  let r = [null, 0];
  let len = haiku.usersSharedWith.length;
  if (len === 0) return r;
  debugger;
  let user = users[haiku.usersSharedWith[0].userId].username;
  return [user, len];
}

const Haiku = memo(({ idx, haiku, openHaikuShow, users }) => {
  const [user, count] = sharedUsers(haiku, users);
  const lines = formatHaikuLines(haiku.body)
  const authorColors = lines.map(line => line.author.color);
  return (
    <UserHaiku authorColors={authorColors}>
      <LineIndex>
        {lines.map(({ author, text }, i) => (
          <LineIndexItem key={i}>
            <AuthorBox color={author.color} alignRight={(i + idx) % 2 === 0}>
              <AuthorImg
                src={author.url}
                alt={author.name}
              />
            </AuthorBox>
            <Text color={author.color}>{text}</Text>
          </LineIndexItem>
        ))}
        <Footer>
          <Share>
            <ShareIcon />
            <ShareUsers>
              {count === 0 ? <>Share</> : <>Shared with <S>{user}</S> and <S>{count}</S> other{count > 1 && 's'}</>}
            </ShareUsers>
          </Share>
          <Config>
            <Btn>Scoreboard</Btn>
            <DeleteIcon />
          </Config>

        </Footer>
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
        {userHaikus && userHaikus.map((haiku, idx) => (
          <Haiku haiku={haiku} key={haiku._id} openHaikuShow={openHaikuShow} idx={idx} users={users} />
        ))}
      </HaikuGrid>
    </Page>
  )


}

export default MyHaikus;