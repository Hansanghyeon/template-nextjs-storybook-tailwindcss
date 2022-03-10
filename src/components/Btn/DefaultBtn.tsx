import BaseBtn from './BaseBtn';

const DefaultBtn: React.FC<React.HTMLAttributes<HTMLButtonElement> | undefined> = ({
  children,
  ...props
}) => (
  <BaseBtn
    type="button"
    {...props}
    className={`${BaseBtn.defaultProps?.className} ${props.className ?? ''}`}
  >
    {children}
  </BaseBtn>
);

export default DefaultBtn;
