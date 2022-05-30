import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import {
  commonWords,
  isWord,
  splitWords,
  standardizeText,
} from "../utils/caviarding";
import { GameContext } from "../utils/game";

const _WordContainer: React.FC<{ node: any }> = ({ node }) => {
  const word = node.children[0].value;
  const [caviardingStyle] = useState<number>(Math.floor(Math.random() * 5) + 1);
  return (
    <GameContext.Consumer>
      {({ words, selection }) => {
        const standardizedWord = standardizeText(word);
        const revealed = words.has(standardizedWord);
        const selected = selection && selection[0] === standardizedWord;
        if (revealed) {
          return (
            <span className={`word` + (selected ? " selected" : "")}>
              {word}
            </span>
          );
        } else {
          return (
            <span className={`word caviarded v${caviardingStyle}`}>
              {"█".repeat(word.length)}
            </span>
          );
        }
      }}
    </GameContext.Consumer>
  );
};

const WordContainer = React.memo(_WordContainer);
const MarkdownContainer = React.memo(ReactMarkdown);

const ArticleContainer: React.FC<{
  article: string;
  reveal: boolean;
}> = ({ article, reveal }) => {
  return (
    <div className="article-container">
      <MarkdownContainer
        components={{
          strong: ({ node }) => {
            return <WordContainer node={node} />;
          },
        }}
      >
        {reveal
          ? article
          : splitWords(article).reduce((value, word) => {
              const standardizedWord = standardizeText(word);
              let currentValue;
              if (!commonWords.has(standardizedWord) && isWord(word)) {
                currentValue = `**${word}**`;
              } else {
                currentValue = word;
              }
              return value + currentValue;
            })}
      </MarkdownContainer>
    </div>
  );
};

export default React.memo(ArticleContainer);
