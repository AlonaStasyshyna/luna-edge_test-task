import { CustomizedButton } from './Button.styled';

export const Button = ({ type, text, onClick = () => {} }) => {
  return (
    <CustomizedButton type={type} onClick={onClick}>
      {text}
    </CustomizedButton>
  );
};
