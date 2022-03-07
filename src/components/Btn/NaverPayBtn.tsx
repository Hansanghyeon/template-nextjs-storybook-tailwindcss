import npay from './pc_btn_npay.png';
import Image from 'next/image';
import styled from 'styled-components';
import tw from 'twin.macro'

const Button = styled.button`
  ${tw`px-[16px]`}

  background-color: #00c73c;
  position: relative;
  min-height: 50px;
  display: flex;
  align-items: center;
`;

const NaverPayBtn = ({ ...props }) => {
    return (
        <Button
          type="button"
          {...props}
        >
          <Image src={npay} alt="네이버페이 구매하기" width={98} height={18} />
        </Button>
    )
  }
  
  export default NaverPayBtn;