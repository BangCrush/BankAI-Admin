import { useNavigate } from 'react-router-dom';
import CustomModal from 'src/components/CustomModal';

const DoLoginModal = ({ isOpen }) => {
  const navigate = useNavigate();

  const closeModal = () => {
    navigate('/login');
  };

  return (
    <CustomModal
      isOpen={isOpen}
      text={'데이터 접근 권한이 없습니다. 로그인을 해주세요.'}
      closeModal={closeModal}
    />
  );
};

export default DoLoginModal;
