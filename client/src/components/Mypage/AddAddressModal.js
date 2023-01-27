import {
  ModalViewBody,
  ModalViewBodyTable,
  ModalViewBodyTableLeft,
  ModalViewBodyTableRightInput,
  ModalViewFooter,
  ModalViewBodyTableButton,
  ModalViewFooterButtonLeft,
  ModalViewFooterButtonRight,
  AdInputBox,
  AddModalView,
  AddModalContainer
} from './../../styles/myPageStyle';

const AddAddressModal = ({ modal, setModal }) => {
  const onRemove = () => {
    if (window.confirm('주소를 삭제하시겠습니까?')) {
      alert('삭제되었습니다');
    } else {
      alert('취소했습니다.');
    }
  };

  return (
    <>
      {modal ? (
        <>
          <AddModalContainer onClick={() => setModal(false)} modal={modal} />

          <AddModalView modal={modal}>
            <ModalViewBody>
              <ModalViewBodyTable>
                <ModalViewBodyTableLeft>주소</ModalViewBodyTableLeft>
                <ModalViewBodyTableButton onClick={() => setModal((e) => !e)}>
                  주소 추가
                </ModalViewBodyTableButton>
              </ModalViewBodyTable>
              <ModalViewBodyTable>
                <ModalViewBodyTableLeft>받는사람</ModalViewBodyTableLeft>
                <ModalViewBodyTableRightInput>
                  <AdInputBox
                    type="Recipient"
                    aria-label="받는사람을 입력하세요."
                  />
                </ModalViewBodyTableRightInput>
              </ModalViewBodyTable>
            </ModalViewBody>
            <ModalViewFooter>
              <ModalViewFooterButtonLeft>
                기본 주소 설정
              </ModalViewFooterButtonLeft>
              <ModalViewFooterButtonRight>완료</ModalViewFooterButtonRight>
            </ModalViewFooter>
          </AddModalView>
        </>
      ) : null}
    </>
  );
};

export default AddAddressModal;
