import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Thunks as Session } from 'store/session/actions';
import { Creators as Modal } from 'store/modal/actions';
import SessionModal from './SessionModal';

const mapStateToProps = state => ({
  isLoggedIn: Boolean(state.session.userId),
  action: 'Signup'
});

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(Session.login(user)),
  signup: user => dispatch(Session.signup(user)),
  openAltModal: () => dispatch(Modal.openModal('login')),
  closeModal: () => dispatch(Modal.closeModal())
})

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SessionModal)
);