import styled from 'styled-components';

const Button = styled.button`
  background-color: #000;
  position: relative;
  min-height: 50px;
  color: #fff;
`;
Button.defaultProps = {
  className: `px-[16px]`,
};

const BlackButton: React.FC<React.HTMLAttributes<HTMLButtonElement> | undefined> = ({
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

export default BlackButton;
