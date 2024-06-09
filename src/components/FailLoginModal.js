import CustomModal from 'src/components/CustomModal';

const FailLoginModal = ({ isOpen, closeModal }) => {
  return (
    <CustomModal
      isOpen={isOpen}
      text={'로그인에 실패했습니다. 아이디와 비밀번호를 다시 확인해주세요.'}
      closeModal={closeModal}
    />
  );
};

export default FailLoginModal;
