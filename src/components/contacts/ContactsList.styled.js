import styled from 'styled-components';

export const List = styled.ul`
  margin-top: 30px;
  font-weight: 500;
  font-size: 18px;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const ContactsBtn = styled.button`
  height: auto;
  cursor: pointer;
  display: inline-block;
  background-repeat: no-repeat;
  background-size: contain;
  background-color: tomato;
  border-radius: 5px;
  padding: 5px 8px;
  border: none;
  outline: none;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.1);
  }
`;

// .list {
//   margin-top: 30px;
//   color: var(--secondaryTextColor);
//   font-weight: 500;
//   font-size: 18px;
// }

// .item {
//   display: flex;
//   justify-content: space-between;
// }

// .item:not(:last-child) {
//   margin-bottom: 10px;
// }

// .btn {
//   width: 30px;
//   height: auto;
//   cursor: pointer;
//   display: inline-block;
//   background-image: url(../../img/delete.svg);
//   background-repeat: no-repeat;
//   background-size: contain;
//   background-color: transparent;
//   border: none;
//   outline: none;
//   transition: transform 250ms var(--timingFn);
// }

// .btn:hover {
//   transform: scale(1.1);
// }
