import { connect } from "react-redux";
import { Thunks as HaikuThunks } from "store/haikus/actions";
import { Thunks as UserThunks } from "store/users/actions";
// import { Thunks }
import { selectCurrentUser } from "store/selectors";
import { Creators as Modal } from "store/modal/actions";
import Haiku from "./Haiku";

const mapStateToProps = (state) => {
  const currentUser = selectCurrentUser(state);
  const haikuId = state.ui.modal.haikuId;
  const creator = !!(currentUser && currentUser.haikusCreated.includes(haikuId));
  const solved = state.entities.haikus[haikuId].usersSharedWith.some(
      user => user.complete && user.userId === currentUser._id
  )

  const compare = (a, b) => {
    const userA = a.completeTimestamp;
    const userB = b.completeTimestamp;

    let comparison = 0;
    if (new Date(userA) > new Date(userB)) {
      comparison = 1;
    } else if (new Date(userA) < new Date(userB)) {
      comparison = -1;
    }
    return comparison;
  }

  let solvedUsers = state.entities.haikus[haikuId].usersSharedWith
                  .filter(user => {
                    return user.complete
                  });
  let sortedSolved = solvedUsers.sort(compare).slice(0,3).map(user => {
    return state.entities.users[user.userId].username
  })

  return {
    solved: solved,
    currentUser: currentUser,
    users: state.entities.users,
    creator: creator,
    fastestSolvers: sortedSolved,
    haiku: state.entities.haikus[haikuId],

  };
};

const mapDispatchToProps = dispatch => ({
  fetchHaikus: haikuIds => dispatch(HaikuThunks.fetchHaikuChallenges(haikuIds)),
  fetchUsers: () => dispatch(UserThunks.fetchUsers()),
  // closeModal: () => dispatch(Modal.closeModal()),
  // getHaiku: (haikuId) => dispatch(HaikuThunks.fetchHaiku(haikuId)), 
  createHaikuShare: (haikuId, recipientIds) => dispatch(HaikuThunks.createHaikuShares(haikuId, recipientIds)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Haiku);
