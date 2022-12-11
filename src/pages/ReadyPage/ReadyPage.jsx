import { Button } from 'components/Button/Button';
import { Page, Wrapper } from 'pages/Pages.styled';
import { register } from 'utils/registration/register';
import { Title, Text } from './ReadyPage.styled';
import { toast } from 'react-toastify';
import { toastStyled } from 'utils/GlobalStyle';

export const ReadyPage = () => {
  const userData = JSON.parse(localStorage.getItem('userData'));
  const shopToken = JSON.parse(localStorage.getItem('shop_token'));
  const googleToken = JSON.parse(localStorage.getItem('google_token'));

  const registrationProcess = () => {
    const user = {
      ...userData,
      shop_token: shopToken,
      google_token: googleToken,
    };

    register(user)
      .then(data => console.log(data))
      .catch(() => {
        toast.error(
          'Chad couldn’t register your account. Please try again.',
          toastStyled
        );
      });
  };

  return (
    <Page>
      <Wrapper>
        <Title>You’re ready to go! &#128640;</Title>
        <Text>
          <span>
            A fully loaded self-service portal is now ready to deploy on your
            Shopify store.
          </span>
          <span>
            We’ve programmed it to follow industry best practices for shipping,
            return & exchange, and payment policy.
          </span>
          <span>
            You can customize these settings to fit your store policy anytime.
          </span>
          <span>
            Lastly, <b>nothing is live until you hit “Go Live”!</b>
          </span>
        </Text>
        <Button
          type="button"
          text="Start customizing"
          onClick={registrationProcess}
        />
      </Wrapper>
    </Page>
  );
};
