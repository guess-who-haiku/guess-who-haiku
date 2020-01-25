import { connect } from 'react-redux';
import { Thunks } from 'store/haikus/actions';
import { selectCurrentUser } from "store/selectors";
import SolveHaiku from './SolveHaiku';

const mapStateToProps = state => ({

  currUser: selectCurrentUser(state)

});

const mapDispatchToProps = dispatch => ({

  getHaiku: (haikuId) => dispatch(Thunks.fetchHaiku(haikuId)),
  completeHaiku: () => dispatch(Thunks.updateHaikuShare),
  getUserHaikus: (userId) => dispatch(Thunks.fetchHaikusUser(userId))

})

export default connect(mapStateToProps, mapDispatchToProps)(SolveHaiku);