import styled from 'styled-components';

export const ArticleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
  position: relative;
  flex-grow: 1;
  min-height: 434px;
  grid-auto-rows: 120px; /* 카드 높이 고정 */
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
`;
