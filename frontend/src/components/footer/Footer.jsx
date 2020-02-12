import React from 'react';
import { Foot, FooterTxt } from './Footer.styled';

const Footer = () => {
    return (
        <Foot>
            <FooterTxt>
                <a href="https://github.com/segersalex/guess-who-haiku" target="_blank">
                    Guess Who Haiku, 2020
                </a>
            </FooterTxt>
        </Foot>
    )
}

export default Footer;