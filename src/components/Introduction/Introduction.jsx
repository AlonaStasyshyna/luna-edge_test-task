import { Title, Text } from "./Introduction.styled";

export const Introduction = ({ title, text }) => {
  return (
    <>
      <Title>{title}</Title>
      <Text>{text}</Text>
    </>
  );
};
