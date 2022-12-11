import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
  padding-left: 32px;
`;

export const Item = styled.li`
  position: relative;

  span {
    position: absolute;
    top: 0;
    left: -32px;
    width: 24px;
    height: 24px;
    padding: 4px;
    color: #65bd47;
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

export const Title = styled.h3`
  margin-bottom: 4px;
  font-weight: 500;
  font-size: 14px;
  color: #5e636e;
`;

export const Text = styled.p`
  font-size: 12px;
  color: #9196a1;
`;
