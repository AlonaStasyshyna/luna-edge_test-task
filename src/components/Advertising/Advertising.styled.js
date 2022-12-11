import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  margin-bottom: 16px;

  border-radius: 8px;
  background: #134267;
  color: #96caf7;
`;

export const Title = styled.h1`
  font-size: 32px;
  line-height: 100%;
`;

export const ButtonsList = styled.ul`
  display: flex;
  gap: 12px;
  justify-content: center;
  line-height: 0;
`;

export const Button = styled.button`
  width: 8px;
  height: 8px;
  padding: 0;
  border-radius: 50%;
  background: #134267;
`;

export const CurrentButton = styled(Button)`
  background: #96caf7;
`;
