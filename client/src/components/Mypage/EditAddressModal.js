import {
  ModalContainer,
  ModalView,
  ModalViewBody,
  ModalViewBodyTable,
  ModalViewBodyTableLeft,
  ModalViewBodyTableRightInput,
  AdInputBox,
  ModalViewFooter,
  ModalViewBodyTableButton,
  ModalViewFooterButtonLeft,
  ModalViewFooterButtonRight,
  ModalViewFooterButtonmiddle
} from '../../styles/myPageStyle';

const EditAddressModal = ({ modal, setModal }) => {
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
          <ModalContainer onClick={() => setModal(false)} modal={modal} />

          <ModalView modal={modal}>
            <ModalViewBody>
              <ModalViewBodyTable>
                <ModalViewBodyTableLeft>주소</ModalViewBodyTableLeft>
                <ModalViewBodyTableButton>주소 추가</ModalViewBodyTableButton>
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
              <ModalViewFooterButtonLeft onClick>
                기본 주소 설정
              </ModalViewFooterButtonLeft>
              <ModalViewFooterButtonmiddle onClick={() => setModal((e) => !e)}>
                수정 완료
              </ModalViewFooterButtonmiddle>
              <ModalViewFooterButtonRight onClick={onRemove}>
                삭제
              </ModalViewFooterButtonRight>
            </ModalViewFooter>
          </ModalView>
        </>
      ) : null}
    </>
  );
};

export default EditAddressModal;
