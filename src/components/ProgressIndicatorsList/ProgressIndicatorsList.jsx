import { useLocation } from 'react-router-dom';
import {
  List,
  Item,
  MainNav,
  FirstMainNav,
} from './ProgressIndicatorsList.styled';

export const ProgressIndicatorsList = () => {
  const location = useLocation();

  return (
    <nav>
      <List>
        <Item>
          <FirstMainNav to="/" location={location.pathname}>Welcome</FirstMainNav>
        </Item>
        <Item>
          <MainNav to="shopify" location={location.pathname}>Connect your Shopify store</MainNav>
        </Item>
        <Item>
          <MainNav to="google" location={location.pathname}>Connect your support email</MainNav>
        </Item>
        <Item>
          <MainNav to="ready" location={location.pathname}>Done</MainNav>
        </Item>
      </List>
    </nav>
  );
};
