import { connect } from "react-redux";
import Scoreboard from "./Scoreboard";
import { Thunks } from "store/users/actions";
import { Creators } from "store/modal/actions";
import { selectCurrentUser, selectAllUsers } from 'store/selectors';

const mapStateToProps = state => ({
  currentUser: selectCurrentUser(state),
  users: selectAllUsers(state)
});

const mapDispatchToProps = dispatch => ({
  openModal: modal => dispatch(Creators.openModal(modal)),
  fetchUsers: () => dispatch(Thunks.fetchUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(Scoreboard);
