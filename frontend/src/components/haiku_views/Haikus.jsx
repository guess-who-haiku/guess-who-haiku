import React, { useEffect } from 'react';
import { HaikuSection, HaikuContainer, Title } from './Haikus.styled';
import HaikusItem from './HaikusItem';

export default function Haikus({
    haikus, users, type, selectCurrentUser, fetchHaikus
}) {

    useEffect(
        // () => {
        //     if (Object.values(state.entities.users).length > 0) {
        //         // console.log(selectCurrentUser(state));
        //         fetchChallenges([
        //         "5e289d707a2dcd14d82706b3",
        //         "5e28adea21b1a21a963dbbd1"
        //         ]);
        //     }
        // },
        () => {     //may need condition logic to only fetchChallenges if able to get current user
            // if (state.entitites !== undefined) {

            // currentUser[type] //this will go in the argument to fetchHaikus
                fetchHaikus([
                "5e289d707a2dcd14d82706b3",
                "5e28adea21b1a21a963dbbd1"
                ])
            // };
        },
        [users]
    );

    const renderHaikus = () => {
        const haikusArr = ["5e289d707a2dcd14d82706b3", "5e28adea21b1a21a963dbbd1"]; //for testing
        return (
            // currentUser.haikusSharedWith
            haikusArr  //for testing
            .map(haikuId => {
              return haikus[haikuId]
            })
            .map((haikuObj, idx) => {
              return (<HaikusItem haiku={haikuObj} key={idx} />)
            })
        )
    };

    if (Object.keys(haikus).length === 0) {
        return null;
    };

    return (
        <HaikuSection>
            <Title>
                {type}
            </Title>
            <HaikuContainer>
                {renderHaikus()}
            </HaikuContainer>
        </HaikuSection>
    )
}
