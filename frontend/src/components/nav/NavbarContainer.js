import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Thunks as Session } from 'store/session/actions';
import { selectCurrentUser } from 'store/selectors';
import { Creators as Modal } from 'store/modal/actions';
import NavBar from './Navbar';

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.userId)
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(Session.logout()),
  openModal: name => dispatch(Modal.openModal(name))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(NavBar)
);