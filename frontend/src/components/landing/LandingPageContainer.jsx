import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import LandingPage from './LandingPage';
import { Thunks as HaikuThunks } from 'store/haikus/actions';
import { Thunks as UserThunks } from 'store/users/actions';
import { Thunks as AuthorThunks } from 'store/authors/actions';
import { Thunks as NewHaikuThunks } from 'store/new_haiku/actions';

import { Creators } from 'store/modal/actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  authors: state.entities.authors

});

const mapDispatchToProps = dispatch => ({
  openModal: modal => dispatch(Creators.openModal(modal)),
  createHaikuShare: (haikuId, recipientIds) => dispatch(HaikuThunks.createHaikuShare(haikuId, recipientIds)),
  createHaiku: (haiku) => dispatch(HaikuThunks.createHaiku(haiku)),
  fetchNewHaiku: (authors) => dispatch(NewHaikuThunks.fetchNewHaiku(authors)),
  fetchUsers: () => dispatch(UserThunks.fetchUsers()),
  fetchAuthors: () => dispatch(AuthorThunks.fetchAuthors())
})

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(LandingPage)
);
