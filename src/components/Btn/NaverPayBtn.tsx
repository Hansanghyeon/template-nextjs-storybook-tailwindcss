import npay from './pc_btn_npay.png';
import Image from 'next/image';
import styled from 'styled-components';

const Button = styled.button`
  background-color: #00c73c;
  position: relative;
  min-height: 50px;
`;
Button.defaultProps = {
  className: 'px-[16px]',
};

const NaverPayBtn: React.FC<React.HTMLAttributes<HTMLButtonElement> | undefined> = ({
  ...props
}) => {
  return (
    <Button
      type="button"
      {...props}
      className={`${Button.defaultProps?.className} ${props.className ?? ''}`}
    >
      <Image src={npay} alt="네이버페이 구매하기" width={98} height={18} />
    </Button>
  );
};

export default NaverPayBtn;
