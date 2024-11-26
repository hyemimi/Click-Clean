import styled from 'styled-components';

export const Badge = styled.div<{ probability : number }>`
  position: absolute;
  top: -10px;
  left: -10px;
  background-color: ${({ probability }) => probability >= 80 ? '#A0D5F6' : probability >= 50 ? '#EFD950' : '#F66161' };
  color: white;
  font-size: 0.8rem;
  font-weight: bold;
  padding: 4px 8px;
  border-radius: 12px;
`;