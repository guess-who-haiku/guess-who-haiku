import React from 'react';
import authorAvatars from 'assets/index';
import { formatHaiku, getKeyByValue } from 'util/haiku_format_util';
import colorFamilies from 'assets/color-index';
import { Link } from 'react-router-dom'

import {
  HaikuContainerSolved,
  Haiku,
  AuthorIconSm,
  HaikuLineIndex,
  HaikuLineText,
  SuccessMsg, 
  Button
} from "./SolveHaiku.styled";

export default function SolvedHaiku({haiku, closeModal}) {

  let haikuAuthors = Object.keys(haiku.body);
  let gradientColors = haikuAuthors.map(author => authorAvatars[author].color);
  let haikuText = formatHaiku(haiku.body, haikuAuthors);
  let colorFamilyBg = colorFamilies.red1.url;
  let colorFamilyArr = colorFamilies.red1.colors;

    return (
      <>
        <SuccessMsg>Correct!</SuccessMsg>

        <HaikuContainerSolved
          gradientColors={gradientColors}
          url={colorFamilyBg}
        >
          <Haiku>
            {haikuText.map((line, idx) => {
              let author = getKeyByValue(haiku.body, line);
              let authorColor = colorFamilyArr[idx];

              return (
                <HaikuLineIndex key={idx}>
                  {idx === 0 || idx === 2 ? (
                    <AuthorIconSm
                      src={authorAvatars[author].url}
                      alt={author}
                      color={authorColor}
                    />
                  ) : null}

                  <HaikuLineText color={authorColor}>{line}</HaikuLineText>

                  {idx === 1 ? (
                    <AuthorIconSm
                      src={authorAvatars[author].url}
                      alt={author}
                      color={authorColor}
                    />
                  ) : null}
                </HaikuLineIndex>
              );
            })}
          </Haiku>
        </HaikuContainerSolved>

        <Button onClick={closeModal}>
          Back to Challenges
        </Button>
      </>
    );
}
