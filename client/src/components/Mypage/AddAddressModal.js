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
  return (
    <>
      {modal ? (
        <>
          <AddModalContainer onClick={() => setModal(false)} modal={modal} />

          <AddModalView modal={modal}>
            <ModalViewBody>
              <ModalViewBodyTable>
                <ModalViewBodyTableLeft>주소</ModalViewBodyTableLeft>
                <AdInputBox />
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
