import {
  CatagoryButton,
  CatagoryContainer,
  CatagoryWrapper
} from '../../styles/menuStyle';

const Menu = () => {
  return (
    <CatagoryWrapper>
      <CatagoryContainer>
        {['vegetable', 'fruit', 'nut', 'meat', 'seafood'].map((el, idx) => (
          <CatagoryButton to={`/products/${el}`} key={idx}>
            {el === 'vegetable'
              ? '채소'
              : el === 'fruit'
              ? '과일'
              : el === 'nut'
              ? '견과류'
              : el === 'meat'
              ? '육류'
              : '해산물'}
          </CatagoryButton>
        ))}
      </CatagoryContainer>
    </CatagoryWrapper>
  );
};

export default Menu;
