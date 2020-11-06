import styled from 'styled-components';
import { MEDIA_QUERY_MD, MEDIA_QUERY_LG } from './constants/breakpoint';

const TodoItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  margin-top: 20px;
  word-break: break-word;
  width: 95%;
  border-bottom: 0.5px solid ${(props) => props.theme.colors.primary_4};
  & + & {
    margin-top: 5px;
  }
  & button {
    opacity: 0;
  }
  &:hover button {
    opacity: 1;
  }
`;

const TodoContent = styled.div`
  color: ${(props) => props.theme.colors.primary_5};
  font-size: 20px;
  word-break: break-word;
  width: 68%;
  ${MEDIA_QUERY_MD} {
    font-size: 24px;
  }

  ${MEDIA_QUERY_LG} {
    font-size: 28px;
  }

  ${(props) =>
    props.$isDone &&
    `
    text-decoration: line-through;
  `}
`;

const TodoButtonWrapper = styled.div``;

const TodoButton = styled.button`
  margin: 5px 0 0 10px;
  transition: all 0.1s linear;
`;
export default function todoItem({
  todo,
  handleDeleteTodo,
  handleToggleIsDone,
}) {
  const handleDeleteClick = () => handleDeleteTodo(todo.id);
  const handleCompleteTodo = () => handleToggleIsDone(todo.id);
  return (
    <TodoItemWrapper data-id={todo.id}>
      <TodoContent $isDone={todo.isDone}>{todo.content}</TodoContent>
      <TodoButtonWrapper>
        <TodoButton onClick={handleCompleteTodo}>
          {todo.isDone ? '未完成' : '已完成'}
        </TodoButton>
        <TodoButton>編輯</TodoButton>
        <TodoButton onClick={handleDeleteClick}>刪除</TodoButton>
      </TodoButtonWrapper>
    </TodoItemWrapper>
  );
}
