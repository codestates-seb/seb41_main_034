import styled from 'styled-components';

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: ${(props) => (props.isOpenQuestion ? 'block' : 'none')};
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 97;
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 160px;
  left: 160px;
  width: 100%;
  max-width: 425px;
  padding: 24px 48px 48px 48px;
  margin-top: 24px;
  border-radius: 4px;
  background-color: ${(props) => props.theme.whiteColor};
  transition: all 0.5s;
  transform: ${(props) =>
    props.isOpenQuestion ? 'translateY(0)' : 'translateY(100%)'};
  z-index: 98;

  @media ${(props) => props.theme.mobile} {
    padding: 12px 24px 24px 24px;
  }
`;

const MiddleText = styled.div`
  display: flex;
  margin: 4px 0 28px 0;
  justify-content: center;
  font-size: 28px;

  @media ${(props) => props.theme.mobile} {
    font-size: 20px;
  }
`;

const LeftTextContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const LeftText = styled.label`
  width: 100%;
  font-size: 16px;

  @media ${(props) => props.theme.mobile} {
    font-size: 12px;
  }
`;

const MiddleContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const SmallInput = styled.input`
  width: 100%;
  margin: 16px 0 32px 0;
  padding: 4px;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 4px;
  font-size: 12px;

  @media ${(props) => props.theme.mobile} {
    margin: 12px 0 20px 0;
    font-size: 8px;
  }

  &:focus {
    border: 1px solid ${(props) => props.theme.borderColor};
  }
`;

const BigInput = styled.textarea`
  width: 100%;
  padding: 4px 4px 208px 4px;
  margin: 16px 0 32px 0;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  border-left: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 4px;
  resize: none;
  font-size: 12px;

  @media ${(props) => props.theme.mobile} {
    margin: 12px 0 20px 0;
    font-size: 8px;
  }

  &:focus {
    border: 1px solid ${(props) => props.theme.borderColor};
  }
`;

const CompletButton = styled.button`
  width: 100%;
  padding: 8px;
  background-color: ${(props) => props.theme.primaryColor};
  border-radius: 4px;
  color: ${(props) => props.theme.whiteColor};

  @media ${(props) => props.theme.mobile} {
    padding: 8px 0 8px 0;
    font-size: 8px;
  }

  &:hover {
    background-color: ${(props) => props.theme.hoverColor};
    transition: background-color 0.5s;
  }
`;

const CancleImgContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: end;

  svg {
    fill: black;
  }
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
  CancleImgContainer
};
