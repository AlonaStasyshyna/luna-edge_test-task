import styled from 'styled-components';

export const Label = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 24px;

  font-weight: 500;
  font-size: 12px;
  color: #4f637d;

  button {
    position: absolute;
    top: 40px;
    right: 10px;
    padding: 0;
    color: #4f637d;
    background-color: transparent;
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

export const Select = styled.select`
  padding: 10px 10px 10px 17px;
  background-color: #f8f9fc;
  border: 1px solid transparent;
  border-radius: 4px;
  appearance: none;
  font-size: 16px;
  line-height: calc(24 / 16);
  letter-spacing: -0.01em;
  color: #030e16;

  &:focus {
    background-color: #ffffff;
    border: 1px solid #32abf2;
    outline: none;
  }
`;
