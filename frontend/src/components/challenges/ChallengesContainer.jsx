import { connect } from "react-redux";
import Challenges from "./Challenges";
import { Thunks } from "store/users/actions";
import { Creators } from "store/modal/actions";

const mapStateToProps = state => ({
  haikus: state.haikus,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(Thunks.fetchUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(Challenges);
