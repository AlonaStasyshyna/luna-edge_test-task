import styled from 'styled-components';

export const ButtonContainer = styled.div`
  position: relative;

  span {
    position: absolute;
    top: 1px;
    left: 1px;
    width: 48px;
    height: 48px;
    background-color: #ffffff;
    border-radius: 1px;
  }

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const Button = styled.button`
  display: block;
  margin-top: 8px;
  margin-bottom: 16px;
  padding: 14.5px 96px 14.5px 145px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: -0.01em;
  color: #ffffff;
  background-color: #5383ec;
  border-radius: 2px;
`;
