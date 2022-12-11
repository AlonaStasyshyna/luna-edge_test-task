import styled from 'styled-components';

export const Page = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 40%;
  padding: 200px 30px 56px 30px;

  @media screen and (min-width: 1440px) {
    padding: 200px 102px 56px 102px;
  }
`;

export const Main = styled.main`
  width: 60%;
`;
