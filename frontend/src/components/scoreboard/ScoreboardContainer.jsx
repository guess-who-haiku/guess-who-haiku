import { connect } from "react-redux";
import Scoreboard from "./Scoreboard";
import { Thunks } from "store/users/actions";
import { Creators } from "store/modal/actions";

const mapStateToProps = state => ({
    users: state.entities.users
});

const mapDispatchToProps = dispatch => ({
  openModal: modal => dispatch(Creators.openModal(modal)),
  fetchUsers: () => dispatch(Thunks.fetchUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(Scoreboard);
