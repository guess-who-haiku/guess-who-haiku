import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import LandingPage from './LandingPage';
import { Thunks } from 'store/haikus/actions';
import { Creators } from 'store/modal/actions';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  openModal: modal => dispatch(Creators.openModal(modal))
  // createHaikuShare: () => dispatch(Thunks.createHaikuShare()),
})

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(LandingPage)
);
