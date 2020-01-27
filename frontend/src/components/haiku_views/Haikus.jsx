import React, { useEffect } from 'react';
import { HaikuSection, HaikuContainer, Title } from './Haikus.styled';
import HaikusItem from './HaikusItem';

export default function Haikus({
    haikus, currentUser, users, type, fetchHaikus, openModal
}) {
    useEffect(
        () => {
            if (currentUser) {
                fetchHaikus(currentUser[type])
            }
        },
        [users, type]
    );

    const renderHaikus = () => {
        // const haikusArr = ["5e289d707a2dcd14d82706b3", "5e28adea21b1a21a963dbbd1"]; //for testing
        if (!currentUser) {
            return null;
        }
        return (
            currentUser[type]
            .map(haikuId => {
              return haikus[haikuId]
            })
            .map((haikuObj, idx) => {
              return (<HaikusItem 
                haiku={haikuObj} 
                key={idx}
                openModal={openModal} 
                type={type}
                />)
            })
        )
    };

    if (!currentUser) {
        return null;
    }

    if (currentUser[type].length === 0) {
        return (
            <HaikuSection>
                <Title>
                    {type === 'haikusCreated' ? "You haven't created any haikus" : "You haven't been challenged"}
                </Title>
            </HaikuSection>
        )
    };

    return (
        <HaikuSection>
            {/* <Title> */}
                {/* {type === 'haikusCreated'? 'My Created Haikus' : "My Challenges"} */}
            {/* </Title> */}
            <HaikuContainer>
                {renderHaikus()}
            </HaikuContainer>
        </HaikuSection>
    )
}
