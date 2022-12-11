import logoIcon from '../../images/Logo/logo.svg';
import { LogoContainer, LogoText } from './Logo.styled';

export const Logo = () => {
  return (
    <LogoContainer>
      <img src={logoIcon} alt="Octopus logo" width="32" height="32" />
      <LogoText>Chad</LogoText>
    </LogoContainer>
  );
};
