import styled from '@emotion/styled';

const FeedbackOptionsList = styled.ul`
  list-style: none;
  display: flex;
  gap: 30px;
`;

const FeedbackOptionsItem = styled.li``;

const FeedbackOptionBtn = styled.button`
  width: 100px;
  height: 40px;
  color: white;
  background-color: blueviolet;
  border-radius: 8px;
  border: none;
  cursor: pointer;
`;

const css = { FeedbackOptionsList, FeedbackOptionsItem, FeedbackOptionBtn };

export default css;
