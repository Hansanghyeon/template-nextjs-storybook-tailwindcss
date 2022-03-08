import { ReactPropTypes } from 'react';
import styled from 'styled-components';

export const Button = styled.button`
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
Button.defaultProps = {
  className: `px-[16px] py-[12px]`,
};

const DefaultBtn: React.FC<React.HTMLAttributes<HTMLButtonElement> | undefined> = ({
  children,
  ...props
}) => {
  return (
    <Button
      type="button"
      {...props}
      className={`${Button.defaultProps?.className} ${props.className ?? ''}`}
    >
      {children}
    </Button>
  );
};

export default DefaultBtn;
