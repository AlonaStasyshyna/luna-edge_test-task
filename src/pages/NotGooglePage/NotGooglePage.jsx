import { Button } from 'components/Button/Button';
import { Introduction } from 'components/Introduction/Introduction';
import { Logo } from 'components/Logo/Logo';
import { NotGoogle } from 'components/SelectPlatforms/NotGoogle';
import {
  Account,
  Page,
  Wrapper,
  CenteredWrapper,
  IconSpan,
} from 'pages/Pages.styled';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsCheck2 } from 'react-icons/bs';

export const NotGooglePage = () => {
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

  const navigateToDone = () => {
    navigate('/ready', { replace: true });
  };

  const backToShopify = () => {
    navigate('/google', { replace: true });
  };

  return (
    <>
      {!response && (
        <Page>
          <Wrapper>
            <Logo />
            <Introduction
              title="Don’t use Gmail?"
              text="Unfortunately, Chad Beta only integrates with Gmail. Let us know what email client you use to receive customer support emails and we’ll let you know when we add it as an integration."
            />
            <NotGoogle handleChange={handleChange} />
            <Button type="button" text="Submit" onClick={handleSubmit} />
            <Account>
              <span>Actually use Gmail?&#32;</span>
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
              text="Thank you for your interest in Chad! We’ll be hard at work building integrations to support your email client."
            />
            <Button type="button" text="Done" onClick={navigateToDone} />
          </CenteredWrapper>
        </Page>
      )}
    </>
  );
};
