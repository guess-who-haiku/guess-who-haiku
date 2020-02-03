import React, { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import { useHistory } from 'react-router-dom';

import barackObama from '../../assets/barack_obama.jpg';
import donaldTrump from '../../assets/donald_trump.jpg';
import gameOfThrones from '../../assets/game_of_thrones.jpg';
import homerSimpson from '../../assets/homer_simpson.jpg';
import janeAusten from '../../assets/jane_austen.jpg';
import kanyeWest from '../../assets/kanye_west.jpg';
import rickAndMorty from '../../assets/rick_and_morty.jpg';

import { HBContainer, LIContainer, Message, ErrorMsg, AuthorIcon, AuthorItem, Btn } from './HaikuBuilder.styled';
import { formatHaiku } from '../../util/haiku_format_util';

const HaikuBuilder = ({createHaiku, createHaikuShare, fetchAuthors, fetchNewHaiku, authors, newHaiku, users, openModal, currentUser}) => {
    let imageFiles = {
        "Donald Trump": donaldTrump,
        "Homer Simpson": homerSimpson,
        "Game of Thrones": gameOfThrones,
        "Barack Obama": barackObama,
        "Jane Austen": janeAusten,
        "Rick and Morty": rickAndMorty,
        "Kanye West": kanyeWest
    };

    let history = useHistory();
    //MVP authors
    let MVPauthors = ["Donald Trump", "Homer Simpson", "Game of Thrones", "Barack Obama", "Jane Austen", "Rick and Morty", "Kanye West"];

    //fetchAuthors on load
    useEffect(() => {
        fetchAuthors();
    }, [fetchAuthors]);

    //set local state
    const [haikuAuthors, setHaikuAuthors] = useState([]);
    const [haiku, setHaiku] = useState([]);
    const [step, setStep] = useState(0);
    const [reverse, setReverse] = useState(false);
    const [authorError, setAuthorError] = useState(false);
    const [sharesError, setSharesError] = useState(false);

    //update selection of haiku authors
    const handleAuthorSelection = e => {
        let newAuthor = e.currentTarget.dataset.name;
        if (!haikuAuthors.includes(newAuthor) && haikuAuthors.length < 3) {
            setHaikuAuthors([...haikuAuthors, newAuthor])
        } else if (haikuAuthors.includes(newAuthor)) {
            setHaikuAuthors(haikuAuthors.filter(author => (author !== newAuthor)) )
        }
        if (haikuAuthors.length > 0) {
            setAuthorError(false)
        }
    };

    //create new haiku
    const generateHaiku = () => {
        //console.log(camelize(haikuAuthors[0]))
        if (haikuAuthors.length === 0) {
            setAuthorError(true)
        } else {
            fetchNewHaiku(haikuAuthors)
            toggleNext();
        } 
    };

    useEffect(() => {
        newHaiku && newHaiku.data && setHaiku(formatHaiku(newHaiku.data, haikuAuthors))
    }, [newHaiku])

    //load new haiku
    useEffect(() => {
        if (step === 1) {
            const loading = setTimeout(() => {
                toggleNext()
            }, 2000);
            return () => clearTimeout(loading);
        }
    }, [step])

    //start over
    const startOver = () => {
        setStep(0);
        setHaikuAuthors([]);
        setHaiku([])
    }

    //handle save
    const saveHaiku = () => {
        let h = {};
        Object.assign(h, {body: newHaiku.data});
        if (!currentUser) {
            openModal('login')
            console.log('time to sign in!')
        } else {
            Object.assign(h, {creator: currentUser});
            createHaiku(h);
            console.log(h);
            history.push("/haikus")
        }
    }

    //set selected users to share with in local state
    const [haikuShares, setHaikuShares] = useState([]);

    //update selection of users shared with
    const handleShareSelection = e => {
        let newShare = e.currentTarget.dataset.id;
        console.log(newShare);
        if (!haikuShares.includes(newShare)) {
            setHaikuShares([...haikuShares, newShare])
        } else if (haikuShares.includes(newShare)) {
            setHaikuShares(haikuShares.filter(user => (user !== newShare)))
        }
        if (haikuShares.length > 0) {
            setSharesError(false)
        }
    };

    //go to share view
    const toShareView = () => {
        let h = {};
        Object.assign(h, { body: newHaiku.data });
        if (!currentUser) {
            openModal('login')
        } else {

            Object.assign(h, { creator: currentUser });

            console.log('HHHHHHH', h);

            createHaiku(h);
            toggleNext();
        }
    }

    //share haiku with selected users
    const shareHaiku = () => {
        if (haikuShares.length === 0) {
            setSharesError(true)
        } else {

            createHaikuShare(newHaiku.haiku._id, haikuShares) //getting typeError for thunk
            // console.log('shared!')
            toggleNext();
        }    
    }

    //copy to clipboard
    const copyLink = () => {
        let copyText = document.getElementById("shareLink");
        
        copyText.select();
        copyText.setSelectionRange(0, 99999); // For mobile devices

        document.execCommand("copy");
        console.log("Copied the text: " + copyText.value);
    }

    const authError = <ErrorMsg>Please select at least one author</ErrorMsg>
    const shareError = <ErrorMsg>Please select at least one friend to share your haiku with</ErrorMsg>
    console.log(haikuShares);

    //steps
    const ChooseAuthors = () => (
        <>
            <Message>Choose up to three figures below:</Message>
            <LIContainer>
                {authors && authors.map(author => {
                    if (MVPauthors.includes(author)) {
                        return (
                    <AuthorItem data-selected={haikuAuthors.includes(author)} key={author} data-name={author} onClick={handleAuthorSelection}>
                        <AuthorIcon src={imageFiles[author]} alt={author}/>
                        {author}
                    </AuthorItem>
                        )}    
                })}
            </LIContainer>
            {authorError ? authError : null}
            <Btn onClick={generateHaiku}>Build my Haiku!</Btn>
            
        </>
    );

    const GeneratingHaiku = () => (
        <>
            <Message>Just one moment while we build your haiku...</Message>
            <LIContainer>
                <Loader
                    type="Grid"
                    color="#f9cc10"
                    height={80}
                    width={80}
                />
            </LIContainer>
        </>
    );

    const GeneratedHaiku = () => (
        <>
            <div> 
                {newHaiku.data && formatHaiku(newHaiku.data, haikuAuthors).map(line => (
                    <li key={line}>
                        {line}
                    </li>
                ))}
            </div>
            <Btn onClick={() => { generateHaiku(); toggleBack(); }}>Regenerate haiku</Btn>
            <Btn onClick={startOver}>Let me start over</Btn> 
            <Btn onClick={saveHaiku}>Save for later</Btn>
            <Btn onClick={toShareView}>Share now</Btn>   
        </>
    );

    const ShareHaiku = () => (
        <>
            <Message>Challenge your friends to solve your haiku by choosing them below, or generating a link to share with them!</Message>
            <LIContainer>
                {users && users.map(user => (
                    <li data-selected={haikuShares.includes(user.username)} key={user.username} data-id={user._id} onClick={handleShareSelection}>
                        <strong>{user.username}</strong>
                    </li>
                ))}
            </LIContainer>
            {sharesError ? shareError : null}
            <Btn onClick={shareHaiku}>Share</Btn>
            {/* set input value to current haiku id */}
            <input type="text" value={newHaiku.data ? null : newHaiku.haiku._id} id="shareLink"/>
            <Btn onClick={copyLink}>Copy link</Btn>
        </>
    );

    const Confirmation = () => (
        <>
            <Message>All set! Use your My Haikus page to check in and see if your friends have Guessed Who!</Message>
            <Btn onClick={startOver}>Make another Haiku</Btn> 
            <Btn>My Haikus</Btn>
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