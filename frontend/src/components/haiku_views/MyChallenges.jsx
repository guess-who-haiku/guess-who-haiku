import { useSelector, useDispatch } from 'react-redux';
import { Thunks as Haikus } from 'store/haikus/actions';
import { selectCurrentUser, selectAllUsers, selectAllHaikus } from 'store/selectors';
import { Creators as Modal } from 'store/modal/actions';


const MyChallenges = () => {
  const { currentUser, users, haikus } = useSelector(state => ({
    currentUser: selectCurrentUser(state),
    users: selectAllUsers(state),
    haikus: selectAllHaikus(state)
  }));
  const dispatch = useDispatch();
  const {fetchSharedHaikus, openHaikuShowModal} = ({
    fetchSharedHaiku: () => dispatch(Haikus.fetchHaikuChallenges(currentUser.haikusSharedWith)),
    openHaikuShowModal: haikuId => dispatch(Modal.openModal('haikuShow', haikuId))
  })


}

export default MyChallenges;