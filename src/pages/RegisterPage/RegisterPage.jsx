import { Logo } from 'components/Logo/Logo';
import { Introduction } from 'components/Introduction/Introduction';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { Page, Wrapper, Account } from 'pages/Pages.styled';

export const RegisterPage = () => {
  return (
    <Page>
      <Wrapper>
        <Logo />
        <Introduction
          title="Welcome to Chad"
          text="Go live in 10 minutes! Chad's self-service widget empowers your
        customers to manage orders and track shipments—with Chad, you can offer
        fast support 24/7 without going crazy."
        />
        <RegisterForm />

        <Account>
          <span>Already have an account?&#32;</span>
          <button type='button'>Login</button>
        </Account>
      </Wrapper>
    </Page>
  );
};
