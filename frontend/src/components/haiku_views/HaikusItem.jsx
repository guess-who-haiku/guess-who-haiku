import React from 'react';
import { HaikuBox, HaikuLine } from './Haikus.styled';
import { formatHaiku } from '../../util/haiku_format_util';

export default function HaikusItem({haiku, openModal}) {
    if (haiku === undefined) return null;
    let text = formatHaiku(haiku.body, ["barack obama"])
    return (
      <HaikuBox onClick={() => openModal(haiku._id)}>
        <HaikuLine>{text[0]}</HaikuLine>
        <HaikuLine>{text[1]}</HaikuLine>
        <HaikuLine>{text[2]}</HaikuLine>
      </HaikuBox>
    );
}