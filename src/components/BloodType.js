import Button from "./Button";
import Title from "./Title";

export default function BloodType({ title, onClick }) {
  return (
    <Button
      styles={{
        borderRadius: 5,
        paddingRight: 10,
        paddingLeft: 10,
        paddingTop: 5,
        paddingBottom: 5,
        marginRight: 5,
        marginLeft: 5,
      }}
      onClick={onClick}
    >
      <Title>{title}</Title>
    </Button>
  );
}
