import { connect } from 'react-redux';
import { Thunks as HaikuThunks } from 'store/haikus/actions';
import { Thunks as AuthorThunks } from 'store/authors/actions';
import { selectCurrentUser } from "store/selectors";
import SolveHaiku from './SolveHaiku';


const mapStateToProps = state => ({

  currUser: selectCurrentUser(state),
  haikuId: state.ui.modal.haikuId,
  haiku: state.entities.haikus[state.ui.modal.haikuId],
  authors: state.entities.authors,
  users: state.entities.users
  
});


const mapDispatchToProps = dispatch => ({

  getHaiku: (haikuId) => dispatch(HaikuThunks.fetchHaiku(haikuId)),
  completeHaiku: (haikuShare) => dispatch(HaikuThunks.updateHaikuShare(haikuShare)), 
  getAuthors: () => dispatch(AuthorThunks.fetchAuthors())

})

export default connect(mapStateToProps, mapDispatchToProps)(SolveHaiku);