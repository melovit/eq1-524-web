import "./styles.css";

export default function Button({ children, styles, onClick }) {
  return (
    <button onClick={onClick} style={styles} className="button">
      {children}
    </button>
  );
}
