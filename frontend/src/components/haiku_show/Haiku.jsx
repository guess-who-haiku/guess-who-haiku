import React, {useState} from 'react';
import { Multiselect } from 'multiselect-react-dropdown';

import SolvedHaiku from '../solve_haiku/SolvedHaiku';
import SolveHaiku from '../solve_haiku/SolveHaikuContainer';
import { formatHaiku } from 'util/haiku_format_util';
import { Message, Btn, ErrorMsg } from '../haiku_builder/HaikuBuilder.styled';
import { multiSelectStyles, HContainer } from './Haiku.styled';

export default function Haiku({currentUser, solved, creator, users, fastestSolvers, haiku, fetchUsers, createHaikuShare}) {
   
    let usersArr = Object.values(users);

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

  const handleSelect = (selectedList, selectedItem) => {
    setHaikuShares([...haikuShares, selectedItem]);
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
      // console.log(shareIds);
      createHaikuShare(haiku._id, haikuShares)
        .then(() => fetchUsers())
      setHaikuShares([]);
    }
  };

  const sharedMsg = <p>You've already share this haiku with the following friends:</p>

  const determineHaikuShow = () => {
      //if creator of haiku      //not tested
      if (creator) return (
              <>
                {/* <Message>
                  {haikuText.map((line, idx) => (
                    <p key={idx}>{line}</p>
                  ))}
                </Message> */}
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
