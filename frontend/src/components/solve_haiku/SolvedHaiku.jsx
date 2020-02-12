import React from 'react';
import authorAvatars from 'assets/index';
import { formatHaiku, getKeyByValue } from 'util/haiku_format_util';

import {
  HaikuContainer,
  Haiku,
  AuthorIconSm,
  HaikuLineIndex,
  HaikuLineText,
  SuccessMsg
} from "./SolveHaiku.styled";

export default function SolvedHaiku({haiku}) {

  let haikuAuthors = Object.keys(haiku.body);
  let gradientColors = haikuAuthors.map(author => authorAvatars[author].color);
  let haikuText = formatHaiku(haiku.body, haikuAuthors);

    return (
      <>
        <SuccessMsg gradientColors={gradientColors}>Correct!</SuccessMsg>
        
        <HaikuContainer gradientColors={gradientColors} >
          
          <Haiku>
            {haikuText.map((line, idx) => {
              let author = getKeyByValue(haiku.body, line);
              let authorColor = authorAvatars[author].color;
              
              return (

                <HaikuLineIndex key={idx}>
                  
                  {(idx === 0 || idx === 2) ? <AuthorIconSm src={authorAvatars[author].url} alt={author} color={authorColor}/> : null}            
                  
                  <HaikuLineText color={authorColor}>{line}</HaikuLineText>
                  
                  {(idx === 1) ? <AuthorIconSm src={authorAvatars[author].url} alt={author} color={authorColor}/> : null}
                </HaikuLineIndex>
              )

            })}
          </Haiku>

        </HaikuContainer>

      </>
    )
}
