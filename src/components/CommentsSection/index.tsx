import { useQuery } from '@tanstack/react-query';
import { getCommentList, postComment } from 'apis/article';
import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from 'styles/common/button';

interface ICommentsSectionProps {
    id: number
}

const CommentsSection:React.FC<ICommentsSectionProps> = ({ id }) => {
  const [userTitle, setUserTitle] = useState('');
  const { data, refetch } = useQuery({
    queryKey: ['getCommentList', { id }],
    queryFn: () => getCommentList({ id })
  });
  
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserTitle(e.target.value);
  };

  // 댓글 등록
  const registerCommentHandler = async () => {
    await postComment({ id, userTitle }).then(() => refetch() );
  };

  return (
    <CommentsDiv>
      <TitleInput
        type="text"
        value={userTitle}
        onChange={handleTitleChange}
        placeholder="기사의 새로운 제목을 지어주세요!"
      />
      <CommentButton onClick={registerCommentHandler}>등록</CommentButton>
      {data?.data.length > 0 && <CommentSection>
        <CommentHeader>{data?.data.length}개의 의견</CommentHeader>
        {data?.data.map((comment: any) => {
          return (
            <Comment key={comment.id}>
              <CommentText>
                {comment.userTitle}
              </CommentText>
              <LikeDislikeButtons>
                <LikeButton onClick={registerCommentHandler}>👍</LikeButton>
                <DislikeButton onClick={registerCommentHandler}>👎</DislikeButton>
              </LikeDislikeButtons>
            </Comment>
          );
        })}
       
      </CommentSection>
      }
    </CommentsDiv>
     
  );
};

export default CommentsSection;

// 스타일 정의
const CommentsDiv = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 20px;
`;

const TitleInput = styled.input`
  padding: 10px;
  width: 80%;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 20px;
  margin-right: 20px;
`;

const CommentButton = styled(Button)`
  height: 38px;
`;

const CommentSection = styled.div`
  margin-top: 20px;
`;

const CommentHeader = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Comment = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 10px;
`;

const CommentText = styled.p`
  flex-grow: 1;
  font-size: 14px;
`;

const LikeDislikeButtons = styled.div`
  display: flex;
  align-items: center;
`;

const LikeButton = styled.button`
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  margin-right: 10px;
  
  &:hover {
    background-color: #45a049;
  }
`;

const DislikeButton = styled.button`
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  
  &:hover {
    background-color: #e53935;
  }
`;
