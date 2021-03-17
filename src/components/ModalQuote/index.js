import "./styles.css";

import Article, { ArticleBody, ArticleFont, ArticleTitle } from "../Article";

export default function ModalQuote({
  titleQuote,
  bodyQuote,
  fontUrl,
  quoteFont,
}) {
  return (
    <div className="quote">
      <Article>
        <ArticleTitle>{titleQuote}</ArticleTitle>
        <ArticleBody>{bodyQuote}</ArticleBody>
        <ArticleFont href={fontUrl}>{quoteFont}</ArticleFont>
      </Article>
    </div>
  );
}
