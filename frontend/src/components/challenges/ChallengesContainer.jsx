import { connect } from "react-redux";
import Challenges from "./Challenges";
// import { Thunks } from "store/users/actions";
import { Thunks } from "store/haikus/actions";
import { selectCurrentUser } from "store/selectors";
// import { Creators } from "store/modal/actions";

const mapStateToProps = state => ({
    haikus: state.entities.haikus.data,
//   currentUser: state.session.currentUser,
//   users: state.session.users
    state: state
});

const mapDispatchToProps = dispatch => ({
  fetchChallenges: (haikus) => dispatch(Thunks.fetchHaikuChallenges(haikus)),
  selectCurrentUser: (state) => selectCurrentUser(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(Challenges);
