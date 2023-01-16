import styled from 'styled-components';

const ModalWrapper = styled.div`
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContainer = styled.div`
  width: 100%;
  max-width: 425px;
  border-radius: 4px;
  background-color: ${(props) => props.theme.whiteColor};
`;

const MiddleText = styled.div`
  display: flex;
  justify-content: center;
  margin: 4px 0 28px 0;
  font-size: 28px;
`;

const LeftTextContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const LeftText = styled.div`
  width: 80%;
  font-size: 16px;
`;

const MiddleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const SmallInput = styled.input`
  width: 80%;
  height: 28px;
  border: 1px solid ${(props) => props.theme.blackColor};
  border-radius: 4px;
  margin: 16px 0 32px 0;
  padding: 4px;
`;

const BigInput = styled.input`
  width: 80%;
  height: 208px;
  padding: 4px;
  border: 1px solid ${(props) => props.theme.blackColor};
  border-radius: 4px;
  margin: 16px 0 32px 0;
`;

const CompletButton = styled.button`
  width: 80%;
  height: 41px;
  background-color: ${(props) => props.theme.primaryColor};
  border-radius: 4px;
  margin-bottom: 44px;
  color: ${(props) => props.theme.whiteColor};
`;

const CancleImg = styled.img`
  width: 28px;
  height: 28px;
  margin: 32px 36px 0 0;
`;

const CancleImgContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
`;

export {
  CompletButton,
  BigInput,
  SmallInput,
  MiddleContainer,
  LeftText,
  LeftTextContainer,
  MiddleText,
  ModalContainer,
  ModalWrapper,
  CancleImg,
  CancleImgContainer
};
