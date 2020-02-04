import React, {Fragment, useState} from 'react'
import SolvedHaiku from '../solve_haiku/SolvedHaiku';
import SolveHaiku from '../solve_haiku/SolveHaikuContainer';
import { LIContainer, Message, Btn, ErrorMsg } from '../haiku_builder/HaikuBuilder.styled';

export default function Haiku({currentUser, solved, creator, users, fastestSolvers}) {
    console.log("currentUser", currentUser);
    console.log("solved", solved);
    console.log("creator", creator);
    console.log("fastest solvers", fastestSolvers);

    const formatSolvers = () => {
      if (!fastestSolvers) {
        return null;
      }
      return fastestSolvers.map( (user, idx) => {
        return (
          <p>
            {idx+1+". "+user}
          </p>
        )
      })
    }

    //set selected users to share with in local state
    const [haikuShares, setHaikuShares] = useState([]);
    const [sharesError, setSharesError] = useState(false);
    const shareError = <ErrorMsg>Please select at least one friend to share your haiku with</ErrorMsg>

    //update selection of users shared with
    const handleShareSelection = e => {
      let newShare = e.currentTarget.dataset.id;
      // console.log(newShare);
      if (!haikuShares.includes(newShare)) {
        setHaikuShares([...haikuShares, newShare])
      } else if (haikuShares.includes(newShare)) {
        setHaikuShares(haikuShares.filter(user => (user !== newShare)))
      }
      if (haikuShares.length > 0) {
        setSharesError(false)
      }
    };

    //share haiku with selected users
    const shareHaiku = () => {
      if (haikuShares.length === 0) {
        setSharesError(true)
      } else {
        // console.log('newHaiku about to be created', newHaiku)
        // createHaikuShare(newHaiku._id, haikuShares)
      }
    };

    const determineHaikuShow = () => {
        //if creator of haiku      //not tested
        if (creator) return (
                      // <>
                      //   <p>
                      //     Challenge a friend (or a few friends) to solve your
                      //     haiku by choosing them below, or generating a link and
                      //     sending it to them.
                      //   </p>
                      //   {/* <ul>
                      //     {users &&
                      //       users.map(user => (
                      //         <li
                      //           data-selected={haikuShares.includes(
                      //             user.username
                      //           )}
                      //           key={user.username}
                      //           data-username={user.username}
                      //           onClick={handleShareSelection}
                      //         >
                      //           <strong>{user.username}</strong>
                      //         </li>
                      //       ))}
                      //   </ul> */}
                      //   <button>Share</button>
                      //   {/* set input value to current haiku id */}
                      //   <input type="text" name="link" />
                      //   <button>Share via link</button>
                      //   {formatSolvers()}
                      // </>
                <>
                  <Message>Challenge your friends to solve your haiku by choosing them below,
                     or generating a link to share with them!</Message>
                  <LIContainer>
                    {users && users.filter(user => (user._id !== currentUser._id)).map(user => (
                      <li data-selected={haikuShares.includes(user.username)} key={user.username} data-id={user._id} onClick={handleShareSelection}>
                        <strong>{user.username}</strong>
                      </li>
                    ))}
                  </LIContainer>
                  {sharesError ? shareError : null}
                  <Btn onClick={shareHaiku}>Share</Btn>
                  {formatSolvers()}
                </>
                    );
        //if not logged in or unsolved     //not tested
        if (!currentUser || !solved) return <SolveHaiku />;
        //if solved     //not tested
        if (solved) return <SolvedHaiku />;
    }

    return (
        <div>
            {determineHaikuShow()}
        </div>
    )
}
