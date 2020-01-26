import React, { useState, useEffect } from 'react';
import { HBContainer } from './HaikuBuilder.styled';
import { formatHaiku } from '../../util/haiku_format_util';

const HaikuBuilder = ({createHaiku, createHaikuShares, fetchAuthors, fetchNewHaiku, authors, newHaiku, users, openModal}) => {

    //fetch authors on load
    useEffect(() => {
        fetchAuthors();    
    }, [fetchAuthors]);

    //set selected authors in local state
    const [haikuAuthors, setHaikuAuthors] = useState([]);
    console.log(haikuAuthors);

    //update selection of haiku authors
    const handleAuthorSelection = e => {
        let newAuthor = e.currentTarget.dataset.name;
        if (!haikuAuthors.includes(newAuthor) && haikuAuthors.length < 3) {
            setHaikuAuthors([...haikuAuthors, newAuthor])
        } else if (haikuAuthors.includes(newAuthor)) {
            setHaikuAuthors(haikuAuthors.filter(author => (author !== newAuthor)) )
        }
    };

    //set formatted Haiku in state
    const [haiku, setHaiku] = useState([]);

    //create new haiku
    const generateHaiku = () => {
        fetchNewHaiku(haikuAuthors)
            // .then(() => setHaiku(newHaiku.data, haikuAuthors))
    };

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

    //share haiku

    
    //steps
    const ChooseAuthors = () => (
        <>
            <p>Choose up to three figures below:</p>
            <ul>
                {authors.data && authors.data.map(author => (
                    <li data-selected={haikuAuthors.includes(author)} key={author} data-name={author} onClick={handleAuthorSelection}>
                        {author}
                        {/* <img src={author} alt={author} /> */}
                    </li>
                ))}
            </ul>
            <button onClick={() => { generateHaiku(); toggleNext(); }}>Build my Haiku!</button>
        </>
    );

    const GeneratingHaiku = () => (
        <>
            <h1>Just one moment while we build your haiku...</h1>
            <button onClick={toggleNext}>Next</button>
        </>
    );

    const GeneratedHaiku = () => (
        <>
            <div>
                {newHaiku.data && formatHaiku(newHaiku.data, haikuAuthors).map(line => (
                    <p key={line}>
                        {line}
                    </p>
                ))}
            </div>
            <button>Regenerate haiku</button>
            <button>Let me start over</button> 
            <button onClick={() => openModal('test')}>Save for later</button>
            <button onClick={() => openModal('test')}>Share now</button>   
        </>
    );

    const ShareHaiku = () => (
        <>
            <p>Challenge a friend (or a few friends) to solve your haiku by choosing them below, or generating a link and sending it to them.</p>
            <ul>
                {users && users.map(user => (
                    <li data-selected={haikuShares.includes(user.username)} key={user.username} data-username={user.username} onClick={handleShareSelection}>
                        <strong>{user.username}</strong>
                    </li>
                ))}
            </ul>
            <button>Share</button>
            {/* set input value to current haiku id */}
            <input type="text" name="link"/>
            <button>Share via link</button>
        </>
    );

    const [step, setStep] = useState(0);
    const [reverse, setReverse] = useState(false);
    const Steps = [ChooseAuthors, GeneratingHaiku, GeneratedHaiku, ShareHaiku];

    const toggleBack = () => {
        let prevStep = step - 1 < 0 ? Steps.length - 1 : step - 1;
        setStep(prevStep);
        setReverse(true);
    };

    const toggleNext = () => {
        console.log('toggled next!')
        let nextStep = step + 1 < Steps.length ? step + 1 : 0;
        setStep(nextStep);
        setReverse(false);
    };
    
    return (
        <HBContainer>
            {/* <ChooseAuthors /> */}
            {React.createElement(Steps[step])}
        </HBContainer>
    )
}

export default HaikuBuilder;