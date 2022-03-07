import styled from 'styled-components';
import tw from 'twin.macro'

const Button = styled.button`
  ${tw`px-[16px]`}

  background-color: #000;
  position: relative;
  min-height: 50px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #fff;
`;

const BlackButton: React.FC = ({ children,...props }) => {
    return (
        <Button
          type="button"
          {...props}
        >
          {children}
        </Button>
    )
  }
  
  export default BlackButton;