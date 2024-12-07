// components/CategoryTab.tsx
import React from 'react';
import styled from 'styled-components';

interface ICategoryTabProps {
  categories: string[];
  activeCategory: string;
  onCategorySelect: (category: string) => void;
}

const CategoryTab: React.FC<ICategoryTabProps> = ({ categories, activeCategory, onCategorySelect }) => {
  return (
    <Tabs>
      {categories.map((category) => (
        <Tab
          key={category}
          active={activeCategory === category ? 'true' : 'false'}
          onClick={() => onCategorySelect(category)}
        >
          {category}
        </Tab>
      ))}
    </Tabs>
  );
};

export default CategoryTab;

const Tabs = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 12px;
  }
`;

const Tab = styled.button<{ active: string }>`
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
  color: ${({ active }) => (active === 'true' ? '#007bff' : '#333')};
  border-bottom: 2px solid ${({ active }) => (active === 'true' ? '#007bff' : 'transparent')};
  padding-bottom: 4px;

  &:hover {
    color: #007bff;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;