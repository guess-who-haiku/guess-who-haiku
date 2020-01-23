import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import LandingPage from './LandingPage';
import { Thunks } from 'store/haikus/actions';

const mapStateToProps = state => ({


});

const mapDispatchToProps = dispatch => ({
  fetchNewHaiku: authors => dispatch(Thunks.fetchNewHaiku(authors)),
  fetchHaiku: haikuId => dispatch(Thunks.fetchHaiku(haikuId)),
  createHaiku: haikuData => dispatch(Thunks.createHaiku(haikuData)),
  // createHaikuShare: () => dispatch(Thunks.createHaikuShare()),
})

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(LandingPage)
);
