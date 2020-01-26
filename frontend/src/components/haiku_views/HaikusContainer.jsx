import { connect } from "react-redux";
import Haikus from "./Haikus";
// import { Thunks } from "store/users/actions";
import { Thunks } from "store/haikus/actions";
import { selectCurrentUser } from "store/selectors";
// import { Creators } from "store/modal/actions";

const mapStateToProps = (state, ownProps) => {
  const type =
    ownProps.match.path === "/haikus" ? "haikusCreated" : "haikusSharedWith";
  return ({
      haikus: state.entities.haikus,
  //   currentUser: state.session.currentUser,
      users: state.session.users,
      type: type
      // state: state
  })
};

const mapDispatchToProps = dispatch => ({
  fetchHaikus: (haikuIds) => dispatch(Thunks.fetchHaikuChallenges(haikuIds)),
  selectCurrentUser: (state) => selectCurrentUser(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(Haikus);
