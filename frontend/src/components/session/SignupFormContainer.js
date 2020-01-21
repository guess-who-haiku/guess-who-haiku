import { connect } from 'react-redux';
import { Thunks } from 'store/session/index';
import SignupForm from './SignupForm';

const mapStateToProps = state => ({
  signedIn: state.session.isSignedIn
});

const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(Thunks.signup(user))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);