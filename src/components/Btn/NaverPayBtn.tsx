import npay from './pc_btn_npay.png';
import Image from 'next/image';
import styled from 'styled-components';
import BaseBtn from './BaseBtn';

const Button = styled(BaseBtn)`
  background-color: #00c73c;
  border-color: #00c73c;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    border-color: #00c73c;
  }
`;

const NaverPayBtn: React.FC<React.HTMLAttributes<HTMLButtonElement> | undefined> = ({
  ...props
}) => (
  <Button
    type="button"
    {...props}
    className={`${Button.defaultProps?.className} ${props.className ?? ''}`}
  >
    <Image src={npay} alt="네이버페이 구매하기" width={98} height={18} />
  </Button>
);

export default NaverPayBtn;
