import styled from 'styled-components';

const BaseBtn = styled.button`
  position: relative;
  border: 1px solid rgba(0, 0, 0, 0.2);
  background-color: white;
  transition: border-color 0.3s ease;
  font-size: 12px;
  line-height: 1.42857143;

  &:hover {
    border-color: rgb(0, 0, 0);
  }
`;
BaseBtn.defaultProps = {
  className: 'px-[16px] py-[12px]',
};

export default BaseBtn;
