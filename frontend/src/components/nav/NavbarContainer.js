import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Thunks } from 'store/session/actions';
import NavBar from './Navbar';

const mapStateToProps = state => ({
  loggedIn: state.session.isAuthenticated
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(Thunks.logout())
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(NavBar)
);