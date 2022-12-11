import styled from 'styled-components';

export const Page = styled.section`
  padding-top: 132px;
  padding-bottom: 68px;
  width: 100%;
`;

export const Wrapper = styled.div`
  width: 380px;
  margin: 0 auto;
  padding: 64px 40px;

  background: #ffffff;
  box-shadow: 0px 5px 20px rgba(108, 117, 139, 0.2);
  border-radius: 8px;

  @media screen and (min-width: 1440px) {
    width: 480px;
  }
`;

export const CenteredWrapper = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 126px 66px;

  h2 {
    margin-top: 24px;
    margin-bottom: 8px;
  }

  p {
    text-align: center;
    margin-bottom: 16px;
  }

  button {
    width: 310px;
    margin-top: 0;
  }
`;

export const Account = styled.div`
  font-size: 12px;
  color: #464a53;
  text-align: center;

  button {
    width: auto;
    padding: 0;
    background-color: transparent;
    color: #469fd2;
  }
`;

export const IconSpan = styled.span`
  position: relative;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #65bd47;
  color: #f3fcf4;

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 52px;
    height: 52px;
  }
`;
