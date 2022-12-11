import {
  Wrapper,
  Title,
  ButtonsList,
  Button,
  CurrentButton,
} from './Advertising.styled';

export const Advertising = () => {
  return (
    <div>
      <Wrapper>
        <Title>5X</Title>
        <p>
          Acquiring a new customer is 5x more costly than making an unhappy
          customer happy
        </p>
      </Wrapper>

      <ButtonsList>
        <li>
          <CurrentButton type="button"></CurrentButton>
        </li>
        <li>
          <Button type="button"></Button>
        </li>
        <li>
          <Button type="button"></Button>
        </li>
        <li>
          <Button type="button"></Button>
        </li>
        <li>
          <Button type="button"></Button>
        </li>
      </ButtonsList>
    </div>
  );
};
