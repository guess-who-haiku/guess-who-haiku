import React, { useEffect } from 'react';
import { HaikuContainer } from './Challenges.styled';
import ChallengesItem from './ChallengesItem';

export default function Challenges({
    haikus, selectCurrentUser, fetchChallenges, state
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
            console.log(state.entities)
            // if (state.entitites !== undefined) {
                fetchChallenges([
                "5e289d707a2dcd14d82706b3",
                "5e28adea21b1a21a963dbbd1"
                ])
            // };
        },
        [state.entities.users] //dependency
    );

    const renderHaikus = () => {
        Object.values(haikus)
        return (
            <ChallengesItem />
        )
    };

    if (haikus === undefined) {
        return null;
    };

    return (
        <HaikuContainer>
            My challenges
            {renderHaikus()}
        </HaikuContainer>
    )
}
