import React, { useState, useEffect } from 'react';

const HaikuBuilder = ({createHaiku, createHaikuShares, fetchAuthors, fetchNewHaiku}) => {
    const [allAuthors, setAllAuthors] = useState([])

    useEffect(() => {
        const results = fetchAuthors();
        setAllAuthors(...results);
    })
    return (
        <div>
            <h1>Haiku Builder coming here</h1>
            <div>
                <ul>
                    {allAuthors.map(author => (
                        <li key={author.name}>

                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default HaikuBuilder;