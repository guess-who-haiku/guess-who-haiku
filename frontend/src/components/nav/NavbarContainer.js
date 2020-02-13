import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Thunks as Session } from 'store/session/actions';
import { selectCurrentUser } from 'store/selectors';
import { Creators as Modal } from 'store/modal/actions';
import { Creators as Reset } from 'store/new_haiku/actions';
import NavBar from './Navbar';

const mapStateToProps = state => ({
  currentUser: selectCurrentUser(state)
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(Session.logout()),
  openModal: name => dispatch(Modal.openModal(name)),
  resetBuilder: () => dispatch(Reset.resetBuilder())
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(NavBar)
);