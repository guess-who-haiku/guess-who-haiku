import { connect } from 'react-redux';
import { Thunks } from 'store/session/index';
import LoginForm from './LoginForm';

const mapStateToProps = state => ({
  currentUser: state.session.user
});

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(Thunks.login(user))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);