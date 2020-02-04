import { connect } from "react-redux";
// import { Thunks } from "store/users/actions";
import { Thunks } from "store/haikus/actions";
import { selectCurrentUser } from "store/selectors";
// import { Creators } from "store/modal/actions";
import { Creators as Modal } from "store/modal/actions";
import Haikus from "./Haikus";

const mapStateToProps = (state, ownProps) => {
  const type =
    ownProps.match.path === "/haikus" ? "haikusCreated" : "haikusSharedWith";
  const currentUser = selectCurrentUser(state);
  return ({
    haikus: state.entities.haikus,
    currentUser: currentUser,
    users: state.entities.users,
    type: type
  })
};

const mapDispatchToProps = dispatch => ({
  fetchHaikus: (haikuIds) => dispatch(Thunks.fetchHaikuChallenges(haikuIds)),
  openModal: (haikuId) => dispatch(Modal.openModal('haikuShow', haikuId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Haikus);
