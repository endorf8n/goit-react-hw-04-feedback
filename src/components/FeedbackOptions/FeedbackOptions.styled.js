import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 40px;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  width: 90px;
  height: 50px;
  cursor: pointer;
  border-radius: 6px;
  background-color: #e4d8bb;
  border-color: transparent;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
  &:hover {
    background-color: #ffbf00;
    border-color: #0000ff;
    box-shadow: none;
  }
`;
