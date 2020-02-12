import styled from 'styled-components';
import { media, colors, font } from 'styled/theme';

export const Foot = styled.div`
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #fff;
    padding: .9rem 2rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    height: 8rem;
    box-shadow: 0 1px 4px rgba(0,0,0,.22);
`;

export const FooterTxt = styled.a`
    cursor: pointer;
    line-height: 2;
    font-size: 1.4rem;
    padding: .9rem 1.2rem;
    &:hover {
        color: #61A6C3;
    }
`;