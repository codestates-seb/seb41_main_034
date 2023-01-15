import styled from 'styled-components';

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  width: 100%;
  border-top: 1px solid ${(props) => props.theme.borderColor};
`;

const FooterContainer = styled.dl`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  max-width: 1024px;
  height: 320px;
  padding: 0 0 40px 64px;

  @media ${(props) => props.theme.mobile} {
    padding-left: 32px;
  }
`;

const Info = styled.div``;

const InfoName = styled.dt`
  font-size: 18px;
  margin-bottom: 8px;

  @media ${(props) => props.theme.tablet} {
    font-size: 16px;
    margin-bottom: 4px;
  }

  @media ${(props) => props.theme.mobile} {
    font-size: 14px;
    margin-bottom: 4px;
  }
`;

const InfoNumber = styled.dd`
  margin-bottom: 16px;

  @media ${(props) => props.theme.tablet} {
    margin-bottom: 8px;
  }

  @media ${(props) => props.theme.mobile} {
    margin-bottom: 8px;
  }

  a {
    font-size: 24px;

    @media ${(props) => props.theme.tablet} {
      font-size: 22px;
    }

    @media ${(props) => props.theme.mobile} {
      font-size: 20px;
    }
  }
`;

const InfoTime = styled.dd`
  font-size: 16px;
  margin-bottom: 16px;

  @media ${(props) => props.theme.tablet} {
    font-size: 14px;
    margin-bottom: 8px;
  }

  @media ${(props) => props.theme.mobile} {
    font-size: 12px;
    margin-bottom: 8px;
  }
`;

const EtcContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  @media ${(props) => props.theme.tablet} {
    gap: 4px;
  }

  @media ${(props) => props.theme.mobile} {
    flex-direction: column;
    gap: 4px;
  }
`;

const Etc = styled.div`
  display: flex;
`;

const EtcDt = styled.dt`
  margin-right: 4px;
  font-size: 12px;
  color: ${(props) => props.theme.grayColor};

  @media ${(props) => props.theme.tablet} {
    margin-right: 2px;
    font-size: 10px;
  }

  @media ${(props) => props.theme.mobile} {
    margin-right: 2px;
    font-size: 8px;
  }
`;

const EtcDd = styled.dd`
  font-size: 12px;
  color: ${(props) => props.theme.grayColor};

  @media ${(props) => props.theme.tablet} {
    font-size: 10px;
  }

  @media ${(props) => props.theme.mobile} {
    font-size: 8px;
  }

  a {
    font-size: 12px;
    color: ${(props) => props.theme.grayColor};

    @media ${(props) => props.theme.tablet} {
      font-size: 10px;
    }

    @media ${(props) => props.theme.mobile} {
      font-size: 8px;
    }
  }
`;

export {
  FooterWrapper,
  FooterContainer,
  Info,
  InfoName,
  InfoNumber,
  InfoTime,
  EtcContainer,
  Etc,
  EtcDt,
  EtcDd
};
