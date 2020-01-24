import React, { useState, useEffect } from 'react';
import ListItem from './ListItem';

const HaikuBuilder = ({createHaiku, createHaikuShares, fetchAuthors, fetchNewHaiku, authors}) => {

    useEffect(() => {
        fetchAuthors();    
    }, [fetchAuthors])

    const [haikuAuthors, setHaikuAuthors] = useState([]);

    const handleSelection = e => {
        let newAuthor = e.target.alt;
        console.log(e.currentTarget);
        if (!haikuAuthors.includes(newAuthor) && haikuAuthors.length < 3) {
            e.currentTarget.classList.add("selected")
            setHaikuAuthors([...haikuAuthors, newAuthor])
        } else if (haikuAuthors.includes(newAuthor)) {
            e.currentTarget.classList.remove("selected")
            setHaikuAuthors(haikuAuthors.filter(author => (author !== newAuthor)) )
        }
        console.log(haikuAuthors);
    }

    const handleSubmit = e => {
        e.preventDefault();
        fetchNewHaiku(haikuAuthors)
    }
    
    return (
        <div>
            <div>
                <p>Choose up to three figures below:</p>
                <ul>
                    {authors.data ? authors.data.map(author => (
                        <ListItem key={author.name} author={author} handleSelection={handleSelection}/>
                    )) : null}
                </ul>
                <button type="button">Build my Haiku!</button>
            </div>
        </div>
    )
}

export default HaikuBuilder;