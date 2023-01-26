import {
  ModalContainer,
  ModalView,
  ModalViewBody,
  ModalViewBodyTable,
  ModalViewBodyTableLeft,
  ModalViewBodyTableRightInput,
  ModalViewFooter,
  ModalViewBodyTableButton,
  ModalViewFooterButtonLeft,
  ModalViewFooterButtonRight,
  AdInputBox
} from '../../styles/myPageStyle';

const EditAddressModal = ({ modal, setModal }) => {
  return (
    <>
      {modal ? (
        <>
          <ModalContainer onClick={() => setModal(false)} modal={modal} />

          <ModalView modal={modal}>
            <ModalViewBody>
              <ModalViewBodyTable>
                <ModalViewBodyTableLeft>주소</ModalViewBodyTableLeft>
                <ModalViewBodyTableRightInput>
                  <AdInputBox type="address" aria-label="주소를 입력하세요." />
                  {/* 서울시 서초구 서초대로 */}
                </ModalViewBodyTableRightInput>
                <ModalViewBodyTableButton>주소 변경</ModalViewBodyTableButton>
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
              <ModalViewFooterButtonRight onClick={() => setModal((e) => !e)}>
                수정 완료
              </ModalViewFooterButtonRight>
            </ModalViewFooter>
          </ModalView>
        </>
      ) : null}
    </>
  );
};

export default EditAddressModal;
