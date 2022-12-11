import { useEffect, useState } from 'react';
import { Button } from 'components/Button/Button';
import { Account, Page, Wrapper, CenteredWrapper } from 'pages/Pages.styled';
import { Logo } from 'components/Logo/Logo';
import { Introduction } from 'components/Introduction/Introduction';
import { GoogleBenefits } from 'components/Benefits/GoogleBenefits';
import { GoogleButton } from 'components/GoogleButton/GoogleButton';
import { useNavigate } from 'react-router-dom';
import { google } from 'utils/registration/google';
import { toast } from 'react-toastify';
import { toastStyled } from 'utils/GlobalStyle';
import { LoaderShopify } from 'components/LoaderShopify/LoaderShopify';
import shopifyAvatar from '../../images/Shopify/shopify-avatar.svg';

export const GooglePage = () => {
  const [googleToken, setGoogleToken] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!googleToken) return;
  }, [googleToken]);

  const connectingGoogle = () => {
    setIsLoading(true);

    google()
      .then(data => {
        setGoogleToken(data);
        localStorage.setItem('google_token', JSON.stringify(data));
      })
      .catch(() => {
        toast.error(
          'Chad couldn’t connect to your Google account. Please try again.',
          toastStyled
        );
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const navigateToDone = () => {
    navigate('/ready', { replace: true });
  };

  const changePlatform = () => {
    navigate('/not-google', { replace: true });
  };

  return (
    <>
      {isLoading && <LoaderShopify text="Connecting to Google..." />}

      {!googleToken && (
        <Page>
          <Wrapper>
            <Logo />
            <Introduction
              title="Connect your customer support email"
              text="Allows Chad to send automated rote responses on your behalf, for instance to confirm that a customer’s missing item complaint is being evaluated."
            />
            <GoogleBenefits />
            <GoogleButton connectingGoogle={connectingGoogle} />
            <Account>
              <button
                type="button"
                onClick={changePlatform}
                style={{ color: '#757C8A', textDecoration: 'underline' }}
              >
                I don’t use Gmail
              </button>
            </Account>
          </Wrapper>
        </Page>
      )}

      {googleToken && (
        <Page>
          <CenteredWrapper>
            <img
              src={shopifyAvatar}
              alt="Shopify Avatar"
              width="100"
              height="100"
            />
            <Introduction
              title="Google account connected"
              text="Smiling raccoon has been successfully connected to Chad. Find out more in the dashboard"
            />
            <Button type="button" text="Continue" onClick={navigateToDone} />
          </CenteredWrapper>
        </Page>
      )}
    </>
  );
};
