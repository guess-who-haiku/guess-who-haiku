import React, { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import barackObama from '../../assets/barack_obama.jpg';
import donaldTrump from '../../assets/donald_trump.jpg';
import gameOfThrones from '../../assets/game_of_thrones.jpg';
import homerSimpson from '../../assets/homer_simpson.jpg';
import janeAusten from '../../assets/jane_austen.jpg';
import kanyeWest from '../../assets/kanye_west.jpg';
import rickAndMorty from '../../assets/rick_and_morty.jpg';

import { HBContainer, LIContainer, Message, ErrorMsg, AuthorIcon, AuthorItem, Btn } from './HaikuBuilder.styled';
import { formatHaiku } from '../../util/haiku_format_util';

const HaikuBuilder = ({createHaiku, createHaikuShares, fetchAuthors, fetchNewHaiku, authors, newHaiku, users, openModal, currentUser}) => {

    //MVP authors
    let MVPauthors = ["Donald Trump", "Homer Simpson", "Game of Thrones", "Barack Obama", "Jane Austen", "Rick and Morty", "Kanye West"];

    //fetch authors on load
    useEffect(() => {
        fetchAuthors();    
    }, [fetchAuthors]);

    //set local state
    const [haikuAuthors, setHaikuAuthors] = useState([]);
    const [haiku, setHaiku] = useState([]);
    const [step, setStep] = useState(0);
    const [reverse, setReverse] = useState(false);
    const [authorError, setAuthorError] = useState(false);

    console.log(haikuAuthors);

    //update selection of haiku authors
    const handleAuthorSelection = e => {
        console.log(e.currentTarget);
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
        console.log(haikuAuthors.length);
        if (haikuAuthors.length === 0) {
            setAuthorError(true)
        } else {
            fetchNewHaiku(haikuAuthors)
            toggleNext();
        } 
    };

    useEffect(() => {
        newHaiku && setHaiku(formatHaiku(newHaiku.data, haikuAuthors))
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

    //save haiku
    // useEffect(() => {
    //     if (currentUser) {

    //     }
    // }, [currentUser])

    //start over
    const startOver = () => {
        setStep(0);
        setHaikuAuthors([]);
        setHaiku([])
    }

    //set selected users to share with in local state
    const [haikuShares, setHaikuShares] = useState([]);

    //update selection of users shared with
    const handleShareSelection = e => {
        let newShare = e.currentTarget.dataset.username;
        //console.log(newShare);
        if (!haikuShares.includes(newShare)) {
            setHaikuShares([...haikuShares, newShare])
        } else if (haikuShares.includes(newShare)) {
            setHaikuShares(haikuShares.filter(user => (user !== newShare)))
        }
    };

    //
    const error = <ErrorMsg>Please select at least one author</ErrorMsg>

    //steps
    const ChooseAuthors = () => (
        <>
            <Message>Choose up to three figures below:</Message>
            <LIContainer>
                {authors.data && authors.data.map(author => {
                    if (MVPauthors.includes(author)) {
                        return (
                    <AuthorItem data-selected={haikuAuthors.includes(author)} key={author} data-name={author} onClick={handleAuthorSelection}>
                        <AuthorIcon src={barackObama} alt={author}/>
                        {author}
                    </AuthorItem>
                        )}    
                })}
            </LIContainer>
            {authorError ? error : null}
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
            <Btn onClick={() => openModal('login')}>Save for later</Btn>
            <Btn onClick={() => openModal('login')}>Share now</Btn>   
        </>
    );

    const ShareHaiku = () => (
        <>
            <Message>Challenge your friends to solve your haiku by choosing them below, or generating a link to share with them!</Message>
            <LIContainer>
                {users && users.map(user => (
                    <li data-selected={haikuShares.includes(user.username)} key={user.username} data-username={user.username} onClick={handleShareSelection}>
                        <strong>{user.username}</strong>
                    </li>
                ))}
            </LIContainer>
            <Btn>Share</Btn>
            {/* set input value to current haiku id */}
            <input type="text" name="link"/>
            <Btn>Share via link</Btn>
        </>
    );

    const Steps = [ChooseAuthors, GeneratingHaiku, GeneratedHaiku, ShareHaiku];

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