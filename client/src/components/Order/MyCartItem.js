import CancelImg from '../../styles/cancelSVG';
import {
  ItemFlex,
  ItemFlex2,
  ItemImg,
  ItemRow,
  ItemText,
  PlusMinusBox,
  PlusMinusButton,
  PlusMinusNum
} from '../../styles/itemStyle';

const Item = () => {
  return (
    <ItemFlex>
      <ItemImg />
      <ItemRow>
        <ItemFlex2>
          <ItemText>상품명</ItemText>
          <CancelImg />
        </ItemFlex2>
        <ItemText>10,000원</ItemText>
        <PlusMinusBox>
          <PlusMinusButton>+</PlusMinusButton>
          <PlusMinusNum>1</PlusMinusNum>
          <PlusMinusButton>-</PlusMinusButton>
        </PlusMinusBox>
      </ItemRow>
    </ItemFlex>
  );
};

export default Item;
