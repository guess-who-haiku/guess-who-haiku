import { connect } from 'react-redux';
import { Thunks } from 'store/session/actions';
import SessionModal from './SessionModal';
const mapStateToProps = state => ({
  currentUser: state.session.currenUser
});

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(Thunks.login(user)),
  signup: user => dispatch(Thunks.signup(user))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionModal);