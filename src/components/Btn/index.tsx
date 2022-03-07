import DefaultBtn from './DefaultBtn';
import NaverPayBtn from './NaverPayBtn';
import HeartBtn from './HeartBtn';
import BlackBtn from './BlackBtn'

const Btn: React.FC<{ type: string }> = ({ type, ...props }) => {
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