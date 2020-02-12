import React, {useState} from 'react'
import SolvedHaiku from '../solve_haiku/SolvedHaiku';
import SolveHaiku from '../solve_haiku/SolveHaikuContainer';
import { formatHaiku } from 'util/haiku_format_util';
import { LIContainer, Message, Btn, ErrorMsg } from '../haiku_builder/HaikuBuilder.styled';
import { HContainer } from './Haiku.styled';

export default function Haiku({currentUser, solved, creator, users, fastestSolvers, haiku, fetchUsers, createHaikuShare}) {
   
    let usersArr = Object.values(users);

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

    let haikuAuthors = Object.keys(haiku.body);
    let haikuText = formatHaiku(haiku.body, haikuAuthors);

    //set selected users to share with in local state
    const [haikuShares, setHaikuShares] = useState([]);
    const [sharesError, setSharesError] = useState(false);
    const shareError = <ErrorMsg>Please select at least one friend to share your haiku with</ErrorMsg>

    //set list of users haiku is already shared with
    const currentShares = haiku.usersSharedWith.map(share => share.userId);

    const alreadySharedWith = () => {
      if (currentShares.length > 0) {
        return currentShares.map((user) => {
          let curr = users[user];
          return (
            <li>{curr.username}</li>
          )
        })
      } else {
        return (
          null
        )
      }
    }

    //update selection of users shared with
    const handleShareSelection = e => {
      let newShare = e.currentTarget.dataset.id;
      // console.log(newShare);
      if (!haikuShares.includes(newShare)) {
        setHaikuShares([...haikuShares, newShare]);
        setSharesError(false);
      } else if (haikuShares.includes(newShare)) {
        setHaikuShares(haikuShares.filter(user => (user !== newShare)))
      }
      if (haikuShares.length > 0) {
        setSharesError(false)
      }
    };
    const sharedMsg = <p>You've already share this haiku with the following friends:</p>

    //share haiku with selected users
    const shareHaiku = () => {
      if (haikuShares.length === 0) {
        setSharesError(true)
      } else {
        createHaikuShare(haiku._id, haikuShares)
          .then(() => fetchUsers()) //fetch all users after sharing
      }
    };

    const determineHaikuShow = () => {
        //if creator of haiku      //not tested
        if (creator) return (
                <>
                  <Message>
                    {haikuText.map((line, idx) => (
                      <p key={idx}>{line}</p>
                    ))}
                  </Message>
                  <Message>Challenge your friends to solve your haiku!</Message>
                  <LIContainer>
                    {users && usersArr.filter(user => ((user._id !== currentUser._id) && (!currentShares.includes(user._id)))).map(user => (
                      <li data-selected={haikuShares.includes(user.username)} key={user.username} data-id={user._id} onClick={handleShareSelection}>
                        {user.username}
                      </li>
                    ))}
                  </LIContainer>
                  {sharesError ? shareError : null}
                  <Btn onClick={shareHaiku}>Share</Btn>
                  {/* {formatSolvers()} */}
                  {alreadySharedWith() ? sharedMsg : null}
                  {alreadySharedWith()}
                </>
                    );
        //if not logged in or unsolved     //not tested
        if (!currentUser || !solved) return <SolveHaiku />;
        //if solved     //not tested
        if (solved) {

          return (

          <SolvedHaiku haiku={haiku} 
                       fastestSolvers={fastestSolvers} 
                       creator={creator}
          />

          )
        };
    }

    return (
        <HContainer>
            {determineHaikuShow()}
        </HContainer>
    )
}
