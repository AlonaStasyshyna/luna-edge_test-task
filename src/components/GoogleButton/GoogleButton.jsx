import { ButtonContainer, Button } from './GoogleButton.styled';
import googleIcon from '../../images/Google/google-icon.svg';

export const GoogleButton = ({ connectingGoogle }) => {
  return (
    <ButtonContainer>
      <span>
        <img src={googleIcon} alt="Google logo" />
      </span>
      <Button type="button" onClick={connectingGoogle}>
        Connect Gmail account
      </Button>
    </ButtonContainer>
  );
};
