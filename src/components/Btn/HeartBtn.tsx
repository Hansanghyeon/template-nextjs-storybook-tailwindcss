import { useState } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  position: relative;
  text-align: center;
  border: 1px solid rgba(0,0,0, 0.2);
  background-color: white;
  transition: border-color 0.3s ease;
  font-size: 12px;
  line-height: 1.42857143;

  &:hover {
      border-color: rgb(0,0,0);
  }
`;
Button.defaultProps = {
  className: `px-[16px] py-[12px]`
}

const HeartBtn: React.FC<React.HTMLAttributes<HTMLButtonElement> | undefined> = ({ children, ...props }) => {
  const [count, setCount] = useState(0);
  const [isCheck, setIsCheck] = useState(false);

  const toggleCheck = () => {
    setIsCheck(!isCheck);
  }
  const handleClick = () => {
    toggleCheck();
  }

  return (
    <Button
      type="button"
      onClick={handleClick}
      {...props}
      className={`${Button.defaultProps?.className} ${props.className}`}
    >
      <i className={`icon-heart${isCheck ? '' : '-empty'}`}></i>
    </Button>
  )
}

export default HeartBtn;