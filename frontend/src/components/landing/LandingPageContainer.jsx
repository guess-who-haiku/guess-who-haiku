import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import LandingPage from './LandingPage';
import { Thunks } from 'store/haikus/actions';
import { Creators } from 'store/modal/actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser

});

const mapDispatchToProps = dispatch => ({
  openModal: modal => dispatch(Creators.openModal(modal)),
  createHaikuShare: (haikuId, recipientIds) => dispatch(Thunks.createHaikuShare(haikuId, recipientIds)),
  createHaiku: (haiku) => dispatch(Thunks.createHaiku(haiku)),
  fetchNewHaiku: (authors) => dispatch(Thunks.fetchNewHaiku(authors)),
  fetchUsers: () => dispatch(Thunks.fetchUsers()),
  fetchAuthors: () => dispatch(Thunks.fetchAuthors())
})

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(LandingPage)
);
