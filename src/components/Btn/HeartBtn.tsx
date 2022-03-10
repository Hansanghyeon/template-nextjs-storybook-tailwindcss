import { useState } from 'react';
import BaseBtn from './BaseBtn';

const HeartBtn: React.FC<React.HTMLAttributes<HTMLButtonElement> | undefined> = ({ ...props }) => {
  // const [count, setCount] = useState(0);

  const [isCheck, setIsCheck] = useState(false);

  const toggleCheck = () => {
    setIsCheck(!isCheck);
  };
  const handleClick = () => {
    toggleCheck();
  };

  return (
    <BaseBtn
      type="button"
      onClick={handleClick}
      {...props}
      className={`${BaseBtn.defaultProps?.className} ${props.className ?? ''}`}
    >
      <i className={`icon-heart${isCheck ? '' : '-empty'}`}></i>
    </BaseBtn>
  );
};

export default HeartBtn;
