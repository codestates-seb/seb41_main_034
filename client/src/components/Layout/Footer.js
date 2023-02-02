import {
  FooterWrapper,
  FooterContainer,
  Info,
  InfoName,
  InfoNumber,
  InfoTime,
  EtcContainer,
  Etc,
  EtcDt,
  EtcDd,
  Copyright
} from '../../styles/layoutStyle';

const Footer = ({ location }) => {
  const year = new Date().getFullYear();

  if (location.pathname === '/login' || location.pathname === '/signup') {
    return null;
  }

  return (
    <FooterWrapper>
      <FooterContainer>
        <Info>
          <InfoName>고객센터</InfoName>
          <InfoNumber>
            <a href="tel:3434-3434">3434-3434</a>
          </InfoNumber>
          <InfoTime>평일 09:00 ~ 18:00 (주말 &amp; 공휴일 제외)</InfoTime>
        </Info>

        <EtcContainer>
          <Etc>
            <EtcDt>상호명</EtcDt>
            <EtcDd>푸드밋</EtcDd>
          </Etc>
          <Etc>
            <EtcDt>이메일</EtcDt>
            <EtcDd>
              <a href="mailto:kimdonghun426@gmail.com">
                kimdonghun426@gmail.com
              </a>{' '}
              (제휴문의)
            </EtcDd>
          </Etc>
          <Etc>
            <EtcDt>대표이사</EtcDt>
            <EtcDd>쌈싸조</EtcDd>
          </Etc>
          <Etc>
            <EtcDt>주소</EtcDt>
            <EtcDd>
              <a
                href="https://github.com/codestates-seb/seb41_main_034"
                target="_blank"
                rel="noreferrer"
              >
                https://github.com/codestates-seb/seb41_main_034
              </a>
            </EtcDd>
          </Etc>
        </EtcContainer>
        <Copyright>Copyright &copy; {year}</Copyright>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
