import styled from 'styled-components';
import BaseBtn from './BaseBtn';

const Button = styled(BaseBtn)`
  background-color: #000000;
  color: #ffffff;
`;

const BlackButton: React.FC<React.HTMLAttributes<HTMLButtonElement> | undefined> = ({
  children,
  ...props
}) => (
  <Button
    type="button"
    {...props}
    className={`${Button.defaultProps?.className} ${props.className ?? ''}`}
  >
    {children}
  </Button>
);

export default BlackButton;
