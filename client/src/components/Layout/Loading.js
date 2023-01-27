import styled, { keyframes } from 'styled-components';

const spin = keyframes`
0%,
    100% {
      box-shadow: 0 -18px 0 0 #FF6B6B, 12.727926px -12.727926px 0 0 #FF6B6B,
        18px 0 0 0 #FF6B6B,
        12.727926px 12.727926px 0 -5px rgba(152, 128, 255, 0),
        0 18px 0 -5px rgba(152, 128, 255, 0),
        -12.727926px 12.727926px 0 -5px rgba(152, 128, 255, 0),
        -18px 0 0 -5px rgba(152, 128, 255, 0),
        -12.727926px -12.727926px 0 -5px rgba(152, 128, 255, 0);
    }
    12.5% {
      box-shadow: 0 -18px 0 -5px rgba(152, 128, 255, 0),
        12.727926px -12.727926px 0 0 #FF6B6B, 18px 0 0 0 #FF6B6B,
        12.727926px 12.727926px 0 0 #FF6B6B,
        0 18px 0 -5px rgba(152, 128, 255, 0),
        -12.727926px 12.727926px 0 -5px rgba(152, 128, 255, 0),
        -18px 0 0 -5px rgba(152, 128, 255, 0),
        -12.727926px -12.727926px 0 -5px rgba(152, 128, 255, 0);
    }
    25% {
      box-shadow: 0 -18px 0 -5px rgba(152, 128, 255, 0),
        12.727926px -12.727926px 0 -5px rgba(152, 128, 255, 0),
        18px 0 0 0 #FF6B6B, 12.727926px 12.727926px 0 0 #FF6B6B,
        0 18px 0 0 #FF6B6B,
        -12.727926px 12.727926px 0 -5px rgba(152, 128, 255, 0),
        -18px 0 0 -5px rgba(152, 128, 255, 0),
        -12.727926px -12.727926px 0 -5px rgba(152, 128, 255, 0);
    }
    37.5% {
      box-shadow: 0 -18px 0 -5px rgba(152, 128, 255, 0),
        12.727926px -12.727926px 0 -5px rgba(152, 128, 255, 0),
        18px 0 0 -5px rgba(152, 128, 255, 0),
        12.727926px 12.727926px 0 0 #FF6B6B, 0 18px 0 0 #FF6B6B,
        -12.727926px 12.727926px 0 0 #FF6B6B,
        -18px 0 0 -5px rgba(152, 128, 255, 0),
        -12.727926px -12.727926px 0 -5px rgba(152, 128, 255, 0);
    }
    50% {
      box-shadow: 0 -18px 0 -5px rgba(152, 128, 255, 0),
        12.727926px -12.727926px 0 -5px rgba(152, 128, 255, 0),
        18px 0 0 -5px rgba(152, 128, 255, 0),
        12.727926px 12.727926px 0 -5px rgba(152, 128, 255, 0),
        0 18px 0 0 #FF6B6B, -12.727926px 12.727926px 0 0 #FF6B6B,
        -18px 0 0 0 #FF6B6B,
        -12.727926px -12.727926px 0 -5px rgba(152, 128, 255, 0);
    }
    62.5% {
      box-shadow: 0 -18px 0 -5px rgba(152, 128, 255, 0),
        12.727926px -12.727926px 0 -5px rgba(152, 128, 255, 0),
        18px 0 0 -5px rgba(152, 128, 255, 0),
        12.727926px 12.727926px 0 -5px rgba(152, 128, 255, 0),
        0 18px 0 -5px rgba(152, 128, 255, 0),
        -12.727926px 12.727926px 0 0 #FF6B6B, -18px 0 0 0 #FF6B6B,
        -12.727926px -12.727926px 0 0 #FF6B6B;
    }
    75% {
      box-shadow: 0 -18px 0 0 #FF6B6B,
        12.727926px -12.727926px 0 -5px rgba(152, 128, 255, 0),
        18px 0 0 -5px rgba(152, 128, 255, 0),
        12.727926px 12.727926px 0 -5px rgba(152, 128, 255, 0),
        0 18px 0 -5px rgba(152, 128, 255, 0),
        -12.727926px 12.727926px 0 -5px rgba(152, 128, 255, 0),
        -18px 0 0 0 #FF6B6B, -12.727926px -12.727926px 0 0 #FF6B6B;
    }
    87.5% {
      box-shadow: 0 -18px 0 0 #FF6B6B, 12.727926px -12.727926px 0 0 #FF6B6B,
        18px 0 0 -5px rgba(152, 128, 255, 0),
        12.727926px 12.727926px 0 -5px rgba(152, 128, 255, 0),
        0 18px 0 -5px rgba(152, 128, 255, 0),
        -12.727926px 12.727926px 0 -5px rgba(152, 128, 255, 0),
        -18px 0 0 -5px rgba(152, 128, 255, 0),
        -12.727926px -12.727926px 0 0 #FF6B6B;
    }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoadingSpinner = styled.div`
  position: relative;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: transparent;
  color: transparent;
  box-shadow: 0 -18px 0 0 ${(props) => props.theme.primaryColor},
    12.727926px -12.727926px 0 0 ${(props) => props.theme.primaryColor},
    18px 0 0 0 ${(props) => props.theme.primaryColor},
    12.727926px 12.727926px 0 0 rgba(152, 128, 255, 0),
    0 18px 0 0 rgba(152, 128, 255, 0),
    -12.727926px 12.727926px 0 0 rgba(152, 128, 255, 0),
    -18px 0 0 0 rgba(152, 128, 255, 0),
    -12.727926px -12.727926px 0 0 rgba(152, 128, 255, 0);
  animation: ${spin} 1.5s infinite linear;
`;

const Loading = () => {
  return (
    <Container>
      <LoadingSpinner />
    </Container>
  );
};

export default Loading;
