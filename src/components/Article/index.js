import "./styles.css";

export default function Article({ children }) {
  return <div className="article">{children}</div>;
}

export function ArticleTitle({ children, style }) {
  return (
    <h1 style={style} className="title">
      {children}
    </h1>
  );
}

export function ArticleBody({ children }) {
  return <p className="body">{children}</p>;
}

export function ArticleFont({ children, href }) {
  return (
    <a className="font" href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}
