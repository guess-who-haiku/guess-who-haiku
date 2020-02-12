import React, { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import { useHistory } from 'react-router-dom';
import { Multiselect } from 'multiselect-react-dropdown';

import authorAvatars from 'assets/index';
import { Card } from '../../styled/base/CardGrid.styled';
import { HBContainer, HaikuBox, NonLIContainer, LIContainer, LineIndex, LineItem, MessageHighlight, LineText, Message, ErrorMsg, AuthorIcon, AuthorItem, Btn, multiSelectStyles } from './HaikuBuilder.styled';
import { formatHaikuLines } from 'util/haiku_format_util';
import useOnAuth from './useOnAuth'

const HaikuBuilder = ({ createHaiku, createHaikuShare, fetchUsers, fetchNewHaiku, authors, newHaiku, users, openModal, currentUser }) => {
	let history = useHistory();

	//set local state
	const [haikuAuthors, setHaikuAuthors] = useState([]);
	const [haiku, setHaiku] = useState([]);
	const [step, setStep] = useState(0);
	const [reverse, setReverse] = useState(false);
	const [authorError, setAuthorError] = useState(false);
	const [sharesError, setSharesError] = useState(false);
	const onAuth = useOnAuth(currentUser);

	//update selection of haiku authors
	const handleAuthorSelection = e => {
		let newAuthor = e.currentTarget.dataset.name;
		if (!haikuAuthors.includes(newAuthor) && haikuAuthors.length < 3) {
			setHaikuAuthors(prevAuthors => [newAuthor, ...prevAuthors]);
			setAuthorError(false);
		} else if (haikuAuthors.includes(newAuthor)) {
			setHaikuAuthors(prevAuthors => prevAuthors.filter(author => (author !== newAuthor)))
		}
		if (haikuAuthors.length > 0) {
			setAuthorError(false)
		}
	};

	//create new haiku
	const generateHaiku = () => {
		if (haikuAuthors.length === 0) {
			setAuthorError(true)
		} else {
			fetchNewHaiku(haikuAuthors)
			toggleNext();
		}
	};

	//load new haiku
	useEffect(() => {
		if (step === 1) {
			const loading = setTimeout(() => {
				toggleNext()
			}, 2500);
			return () => clearTimeout(loading);
		}
	}, [step])

	//listen for resetting haiku builder
	useEffect(() => {
		if (newHaiku === 'reset') {
			startOver();
		}
	}, [newHaiku])

	//start over
	const startOver = () => {
		setStep(0);
		setHaikuAuthors([]);
		setHaiku([]);
		if (haikuShares) {
			setHaikuShares([]);
		}
	}

	//handle save
	const saveHaiku = () => {
		let h = { body: newHaiku };
		if (!currentUser) { openModal('login') }
		onAuth((currentUser) => {
			console.log(currentUser);
			h.creator = currentUser;
			createHaiku(h)
				.then(() => fetchUsers())
				.then(() => history.push("/haikus"));
		})
	}

	//go to share view
	const toShareView = () => {
		let h = { body: newHaiku };
		if (!currentUser) { openModal('login') }
		onAuth((currentUser) => {
			h.creator = currentUser;
			createHaiku(h);
			toggleNext();
		})
	}

	//set selected users to share with in local state
	const [haikuShares, setHaikuShares] = useState([]);
	
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
			createHaikuShare(newHaiku._id, shareIds)
				.then(() => fetchUsers())
			toggleNext();
			setHaikuShares([]);
        }    
    };

	const authError = <ErrorMsg>Please select at least one author.</ErrorMsg>
	const shareError = <ErrorMsg>Please select at least one friend to share your haiku with.</ErrorMsg>

	//steps
	const ChooseAuthors = () => (
    <>
      <Message>
        Choose up to <MessageHighlight>three</MessageHighlight> figures:
      </Message>
      <LIContainer>
        {authors &&
          authors.map(author => {
            if (Object.keys(authorAvatars).includes(author)) {
              return (
                <AuthorItem
                  data-selected={haikuAuthors.includes(author)}
                  key={author}
                  data-name={author}
                  onClick={handleAuthorSelection}
                >
                  <AuthorIcon src={authorAvatars[author].url} alt={author} />
                  {author}
                </AuthorItem>
              );
            }
          })}
      </LIContainer>
      {authorError ? authError : null}
      <Btn onClick={generateHaiku}>Write my Haiku!</Btn>
    </>
  );

	const GeneratingHaiku = () => (
		<>
			<Message>Just one moment while we build your haiku...</Message>
			<NonLIContainer>
				<Loader
					type="MutatingDots"
					color="#DFBD64"
					height={110}
					width={110}
				/>
			</NonLIContainer>
		</>
	);

	const GeneratedHaiku = () => (
		<>
			<HaikuBox>
				<LineIndex>
					{newHaiku && !newHaiku.body && formatHaikuLines(newHaiku).map(({ author, text }, lineIdx) => (
						<LineItem key={lineIdx}>
							<AuthorItem borderColor={author.color}>
								<AuthorIcon src={author.url} alt={author.name} />
							</AuthorItem>
							<LineText highlightColor={author.color}>{text}</LineText>
						</LineItem>
					))}
				</LineIndex>
			</HaikuBox>
			<Btn onClick={() => { generateHaiku(); toggleBack(); }}>Regenerate</Btn>
			<Btn onClick={startOver}>Start over</Btn>
			<Btn onClick={saveHaiku}>Save for later</Btn>
			<Btn onClick={toShareView}>Share now</Btn>
		</>
	);

 const ShareHaiku = () => (
        <>
            <Message>Challenge your friends to solve your haiku by choosing them below!</Message>
			<NonLIContainer>
				<Multiselect
					options={users.filter(user => (user._id !== currentUser))}
				 	selectedValues={haikuShares}
					onSelect={handleSelect}
					onRemove={handleRemove}
					displayValue="username"
				 	closeIcon="circle"
				 	style={multiSelectStyles}
 				/>
			{sharesError ? shareError : null}
			<Btn onClick={shareHaiku}>Share</Btn>
			</NonLIContainer>  
        </>
   );

	const Confirmation = () => (
		<>
			<Message>All set! Use your My Haikus page to check in and see if your friends have Guessed Who!</Message>
			<Btn onClick={startOver}>Write another</Btn>
			<Btn onClick={() => history.push("/haikus")}>My haikus</Btn>
		</>
	)

	const Steps = [ChooseAuthors, GeneratingHaiku, GeneratedHaiku, ShareHaiku, Confirmation];

	const toggleBack = () => {
		let prevStep = step - 1 < 0 ? Steps.length - 1 : step - 1;
		setStep(prevStep);
		setReverse(true);
	};

	const toggleNext = () => {
		let nextStep = step + 1 < Steps.length ? step + 1 : 0;
		setStep(nextStep);
		setReverse(false);
	};

	return (
		<HBContainer>
			{React.createElement(Steps[step])}
		</HBContainer>
	)
}

export default HaikuBuilder;