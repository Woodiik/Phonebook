import styled from '@emotion/styled';
import { ClipLoader } from 'react-spinners';

export const FormStyles = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 10px;
`;
export const AddContactButton = styled.button`
  position: relative;
  padding: 8px;
  background-color: #808080;
  color: white;
  border: none;
  :hover {
    background-color: #696969;
  }
  :active {
    transform: scale(0.9);
  }
  :disabled {
    background-color: rgb(128, 128, 128, 0.5);
  }
`;

export const Loader = styled(ClipLoader)`
  position: absolute;
  top: 4px;
  left: 6px;
`;
