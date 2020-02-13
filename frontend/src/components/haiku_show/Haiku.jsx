import React, {useState} from 'react';
import { Multiselect } from 'multiselect-react-dropdown';

import SolvedHaiku from '../solve_haiku/SolvedHaiku';
import SolveHaiku from '../solve_haiku/SolveHaikuContainer';
import { Message, Btn, ErrorMsg } from '../haiku_builder/HaikuBuilder.styled';
import { multiSelectStyles, HContainer, ShareLI } from './Haiku.styled';

export default function Haiku({currentUser, solved, creator, users, fastestSolvers, haiku, fetchUsers, createHaikuShare, closeModal}) {
   
    let usersArr = Object.values(users);

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
            <ShareLI>{curr.username}</ShareLI>
          )
        })
      } else {
        return (
          null
        )
      }
    }

  const handleSelect = (selectedList, selectedItem) => {
    setHaikuShares([...selectedList]);
    setSharesError(false);
  }

  const handleRemove = (selectedList, selectedItem) => {
    setHaikuShares(haikuShares.filter(user => (user !== selectedItem)))
  }

  //share haiku with selected users
  const shareHaiku = () => {
    if (haikuShares.length === 0) {
      setSharesError(true)
    } else {
      let shareIds = haikuShares.map((obj) => obj._id)
      createHaikuShare(haiku._id, shareIds)
        .then(() => fetchUsers())
      setHaikuShares([]);
    }
  };

  const sharedMsg = <p>You've already share this haiku with:</p>

  const determineHaikuShow = () => {
      //if creator of haiku      //not tested
      if (creator) return (
              <>
                <Message>Challenge your friends to solve your haiku!</Message>
                  <Multiselect
                    options={usersArr.filter(user => ((user._id !== currentUser._id) && (!currentShares.includes(user._id))))}
                    selectedValues={haikuShares}
                    onSelect={handleSelect}
                    onRemove={handleRemove}
                    displayValue="username"
                    closeIcon="circle"
                    style={multiSelectStyles}
                  />
                {sharesError ? shareError : null}
                <Btn onClick={shareHaiku}>Share</Btn>
                <div>
                  {alreadySharedWith() ? sharedMsg : null}
                  {alreadySharedWith()}
                </div> 
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
                       closeModal={closeModal}
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
