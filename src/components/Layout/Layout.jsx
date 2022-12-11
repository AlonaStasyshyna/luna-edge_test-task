import { Outlet } from 'react-router-dom';
import { ProgressIndicatorsList } from 'components/ProgressIndicatorsList/ProgressIndicatorsList';
import { Advertising } from 'components/Advertising/Advertising';
import { Page, Header, Main } from './Layout.styled';

const Layout = () => {
  return (
    <Page>
      <Header>
        <ProgressIndicatorsList />
        <Advertising />
      </Header>

      <Main>
        <Outlet />
      </Main>
    </Page>
  );
};

export default Layout;
