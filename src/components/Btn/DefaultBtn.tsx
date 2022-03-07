import styled from 'styled-components';
import tw from 'twin.macro'

const Button = styled.button`
  ${tw`px-[16px] py-[12px]`}

  position: relative;
  display: flex;
  align-items: center;
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

const DefaultBtn: React.FC = ({ children,...props }) => {
    return (
        <Button
          type="button"
          {...props}
        >
          {children}
        </Button>
    )
  }
  
  export default DefaultBtn;