import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Label = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;

  font-weight: 500;
  font-size: 12px;
  color: #4f637d;

  p {
    color: #d24646;
  }

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

export const Input = styled.input`
  padding: 10px 10px 10px 17px;
  background-color: ${p => (p.error ? '#ffffff' : '#f8f9fc')};
  border: ${p => (p.error ? '1px solid #D24646' : '1px solid transparent')};
  border-radius: 4px;
  font-size: 16px;
  line-height: calc(24 / 16);
  letter-spacing: -0.01em;
  color: #030e16;

  ::placeholder {
    color: #c3cad5;
  }

  &:focus {
    background-color: #ffffff;
    border: ${p => (p.error ? '1px solid #D24646' : '1px solid #32ABF2')};
    outline: none;
  }
`;
