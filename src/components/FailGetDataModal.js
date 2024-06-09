import CustomModal from 'src/components/CustomModal';

const FailGetDataModal = ({ isOpen, closeModal }) => {
  return (
    <CustomModal
      isOpen={isOpen}
      text={
        '데이터를 불러오는 데 실패했습니다. \n (Database User Table - 주민등록번호를 확인해보세요!)'
      }
      closeModal={closeModal}
    />
  );
};

export default FailGetDataModal;
