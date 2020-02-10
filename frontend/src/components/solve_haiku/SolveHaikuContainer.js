import { connect } from 'react-redux';
import { Thunks as HaikuThunks } from 'store/haikus/actions';
import { Thunks as AuthorThunks } from 'store/authors/actions';
import SolveHaiku from './SolveHaiku';


const mapStateToProps = state => {
  const openTS = state.entities.haikus[state.ui.modal.haikuId]
                  .usersSharedWith
                  .filter(share => {
                    return share.userId === state.session.userId
                  })
                  [0].openTimestamp
  return (
    {

      currUserId: state.session.userId,
      haikuId: state.ui.modal.haikuId,
      haiku: state.entities.haikus[state.ui.modal.haikuId],
      authors: state.entities.authors,
      users: state.entities.users,
      openTS: openTS
    
    });
}


const mapDispatchToProps = dispatch => ({

  getHaiku: (haikuId) => dispatch(HaikuThunks.fetchHaiku(haikuId)),
  updateHaiku: (haikuId, userId, complete, openTS, completeTS) => dispatch(HaikuThunks.updateHaikuShare(haikuId, userId, complete, openTS, completeTS)), 
  getAuthors: () => dispatch(AuthorThunks.fetchAuthors())

})

export default connect(mapStateToProps, mapDispatchToProps)(SolveHaiku);