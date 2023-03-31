import { Form, Field } from 'formik';
import styled from 'styled-components';

const Forms = styled(Form)`
  border-bottom: 2px solid rgb(135, 136, 145);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  font-size: 18px;
  line-height: 22px;
  font-weight: 400;
`;

const Input = styled(Field)`
  margin-top: 8px;
  border-radius: 3px;
  height: 25px;
  width: 180px;
  padding: 0 10px;
  display: flex;
  outline: none;
  border: 1px solid rgb(189, 189, 189);
  &:hover,
  &:focus {
    border-color: #1b7fdd;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  }
`;

const Button = styled.button`
  border: none;
  font: inherit;
  cursor: pointer;
  border-radius: 15px;
  padding: 5px 20px;
  background-color: #1b7fdd;
  color: white;
  font-weight: 500;
`;

export { Forms, Input, Button };
