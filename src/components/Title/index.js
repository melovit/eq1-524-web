import "./styles.css";

export default function Title({ children, style }) {
  return (
    <h1 style={style} className="title">
      {children}
    </h1>
  );
}

export function Subtitle({ children, style }) {
  return (
    <h2 style={style} className="subtitle">
      {children}
    </h2>
  );
}

export function Subtitle2({ children, style }) {
  return (
    <h3 style={style} className="subtitle2">
      {children}
    </h3>
  );
}