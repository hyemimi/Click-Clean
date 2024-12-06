// Pagination.js
import React from 'react';
import ReactPaginate from 'react-paginate';
import styled from 'styled-components';

const Pagination: React.FC<IPaginationProps> = ({ pageCount, onPageChange }) => {

  /**pageCount - 총 페이지 수
    pageRangeDisplayed - 한 페이지에 표시할 게시글의 수 */

  return (
    <PaginationContainer>
      <StyledPaginate 
        previousLabel={'<'}
        nextLabel={'>'}
        pageRangeDisplayed={4}
        pageCount={pageCount}
        onPageChange={onPageChange}
        containerClassName={'pagination'}
        activeClassName={'selected'}
        disabledClassName={'disabled'}/>
    </PaginationContainer>
  );
};

export default Pagination;

interface IPaginationProps {
    pageCount: number; // 총 페이지 수
    onPageChange: (selectedItem: { selected: number }) => void; // 페이지 변경 핸들러
  }
  
const PaginationContainer = styled.div`
display: flex;
justify-content: center;
margin: 30px 0;
`;

const StyledPaginate = styled(ReactPaginate)`
display: flex;
list-style: none;
padding: 0;

li {
    margin: 0 5px;

    &.selected a {
    font-weight: bold;
    color: #fff;
    background: #007bff;
    border-radius: 5px;
    }

    a {
    display: block;
    padding: 8px 12px;
    color: #007bff;
    text-decoration: none;
    border: 1px solid #007bff;
    border-radius: 5px;

    &:hover {
        background: #007bff;
        color: white;
    }
    }
}

li.disabled a {
    color: #ccc;
    cursor: not-allowed;
}
`;