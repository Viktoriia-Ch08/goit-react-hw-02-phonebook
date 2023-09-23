import styled from 'styled-components';

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const DeleteButton = styled.button`
  display: flex;
  align-items: center;

  width: 25px;
  height: 25px;

  border-radius: 50px;
  border: 2px solid rgba(82, 82, 91, 1);
  background-color: transparent;
`;
export { List, Item, DeleteButton };
