import { Button } from 'components/Button/Button';
import { Introduction } from 'components/Introduction/Introduction';
import { Logo } from 'components/Logo/Logo';
import { SelectPlatforms } from 'components/SelectPlatforms/SelectPlatforms';
import {
  Account,
  CenteredWrapper,
  Page,
  Wrapper,
  IconSpan,
} from 'pages/Pages.styled';
import { useEffect } from 'react';
import { useState } from 'react';
import { BsCheck2 } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

export const PlatformPage = () => {
  const [platform, setPlatform] = useState(null);
  const [response, setResponse] = useState(null);

  useEffect(() => {
    if (!platform) return;
  }, [platform]);

  const navigate = useNavigate();

  const handleChange = e => {
    setPlatform(e.target.value);
  };

  const handleSubmit = () => {
    setResponse(platform);
  };

  const navigateToGoogle = () => {
    navigate('/google', { replace: true });
  };

  const backToShopify = () => {
    navigate('/shopify', { replace: true });
  };

  return (
    <>
      {!response && (
        <Page>
          <Wrapper>
            <Logo />
            <Introduction
              title="Don’t use Shopify?"
              text="Unfortunately, Chad Beta is currently only available on Shopify. Let us know what platform you use and we’ll let you know when Chad becomes available there."
            />
            <SelectPlatforms handleChange={handleChange} />
            <Button type="button" text="Submit" onClick={handleSubmit} />
            <Account>
              <span>Actually use Shopify?&#32;</span>
              <button type="button" onClick={backToShopify}>
                Connect
              </button>
            </Account>
          </Wrapper>
        </Page>
      )}

      {response && (
        <Page>
          <CenteredWrapper>
            <IconSpan>
              <BsCheck2 />
            </IconSpan>
            <Introduction
              title="Response received"
              text="Thank you for your interest in Chad! We’ll be hard at work building integrations to support your platform."
            />
            <Button type="button" text="Done" onClick={navigateToGoogle} />
          </CenteredWrapper>
        </Page>
      )}
    </>
  );
};
