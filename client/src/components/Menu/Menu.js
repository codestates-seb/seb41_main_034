import {
  CatagoryButton,
  CatagoryContainer,
  CatagoryWrapper
} from '../../styles/menuStyle';

const Menu = () => {
  return (
    <CatagoryWrapper>
      <CatagoryContainer>
        {['채소', '과일', '육류', '수산물', '견과류'].map((el, idx) => (
          <CatagoryButton to={`/products/${el}`} key={idx}>
            {el}
          </CatagoryButton>
        ))}
      </CatagoryContainer>
    </CatagoryWrapper>
  );
};

export default Menu;
