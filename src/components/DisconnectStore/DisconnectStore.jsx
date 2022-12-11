import logoIcon from '../../images/Logo/logo.svg';
import { CenteredWrapper, Page } from 'pages/Pages.styled';
import { Text } from './DisconnectStore.styled';

export const DisconnectStore = () => {
  return (
    <Page>
      <CenteredWrapper>
        <img src={logoIcon} alt="Octopus logo" width="88" height="88" />
        <Text>Disconnecting store...</Text>
      </CenteredWrapper>
    </Page>
  );
};
