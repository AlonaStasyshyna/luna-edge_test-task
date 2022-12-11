import { ShopifyBenefits } from 'components/Benefits/ShopifyBenefits';
import { Button } from 'components/Button/Button';
import { DisconnectStore } from 'components/DisconnectStore/DisconnectStore';
import { Introduction } from 'components/Introduction/Introduction';
import { LoaderShopify } from 'components/LoaderShopify/LoaderShopify';
import { Logo } from 'components/Logo/Logo';
import { Page, Wrapper, CenteredWrapper, Account } from 'pages/Pages.styled';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { toastStyled } from 'utils/GlobalStyle';
import { shopify } from 'utils/registration/shopify';
import shopifyAvatar from '../../images/Shopify/shopify-avatar.svg';

export const ShopifyPage = () => {
  const [shopToken, setShopToken] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isDisconnecting, setIsDisconnecting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!shopToken) return;
  }, [shopToken]);

  const { name } = JSON.parse(localStorage.getItem('userData'));

  const connectingShopify = () => {
    setIsLoading(true);

    shopify(name)
      .then(data => {
        setShopToken(data);
        localStorage.setItem('shop_token', JSON.stringify(data));
      })
      .catch(() => {
        toast.error(
          'Chad couldn’t connect to your Shopify account. Please try again.',
          toastStyled
        );
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const navigateToGoogle = () => {
    navigate('/google', { replace: true });
  };

  const changePlatform = () => {
      navigate('/other-platform', { replace: true });
  }

  const disconnectStore = () => {
    setIsDisconnecting(true);
    setShopToken('');
    localStorage.removeItem('shop_token');
    setIsDisconnecting(false);

    toast.success(`${name} has been disconnected.`, toastStyled);
  };

  return (
    <>
      {isLoading && <LoaderShopify text="Connecting to Shopify..." />}
      {isDisconnecting && <DisconnectStore />}

      {!isDisconnecting && !shopToken && (
        <Page>
          <Wrapper>
            <Logo />
            <Introduction
              title="Connect your Shopify store"
              text="This installs the Chad widget in your Shopify store and sets it up to display information that is relevant to your customers."
            />
            <ShopifyBenefits />
            <Button
              type="button"
              text="Connect Shopify store"
              onClick={connectingShopify}
            />
            <Account>
              <button type="button" onClick={changePlatform} style={{ color: '#757C8A' }}>
                I don’t use Shopify
              </button>
            </Account>
          </Wrapper>
        </Page>
      )}

      {shopToken && (
        <Page>
          <CenteredWrapper>
            <img
              src={shopifyAvatar}
              alt="Shopify Avatar"
              width="100"
              height="100"
            />
            <Introduction
              title="Store connected"
              text="Smiling raccoon has been successfully connected to Chad. Find out more in the dashboard"
            />
            <Button type="button" text="Continue" onClick={navigateToGoogle} />
            <Account>
              <span>Wrong store?&#32;</span>
              <button type="button" onClick={disconnectStore}>
                Connect another one
              </button>
            </Account>
          </CenteredWrapper>
        </Page>
      )}
    </>
  );
};
