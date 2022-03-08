import DefaultBtn from './DefaultBtn';
import NaverPayBtn from './NaverPayBtn';
import HeartBtn from './HeartBtn';
import BlackBtn from './BlackBtn'

interface BtnProps extends React.HTMLAttributes<HTMLButtonElement> {
  type?: 'naver' | 'heart' | 'black';
}

const Btn: React.FC<BtnProps> = ({ type, ...props }) => {
  switch (type) {
    case 'naver':
      return <NaverPayBtn {...props} />
    case 'heart':
      return <HeartBtn {...props} />
    case 'black':
      return <BlackBtn {...props} />
    default:
      return <DefaultBtn {...props} />
  }
}

export default Btn;