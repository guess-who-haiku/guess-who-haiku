import { connect } from "react-redux";
import { Thunks } from "store/haikus/actions";
import { selectCurrentUser } from "store/selectors";
import { Creators as Modal } from "store/modal/actions";
import Haiku from "./Haiku";

const mapStateToProps = (state) => {
    const currentUser = selectCurrentUser(state);
    const haikuId = state.ui.modal.haikuId;
    const creator = !!(currentUser && currentUser.haikusCreated.includes(haikuId));
    const solved = state.entities.haikus[haikuId].usersSharedWith.some(
        user => user.complete && user._id === currentUser._id
    )
  return {
    solved: solved,
    currentUser: currentUser,
    users: state.session.users,
    creator: creator
  };
};

const mapDispatchToProps = dispatch => ({
//   fetchHaikus: haikuIds => dispatch(Thunks.fetchHaikuChallenges(haikuIds)),
//   closeModal: () => dispatch(Modal.closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(Haiku);
