import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  CartItemContainer,
  CartItemImage,
  CartItemImg,
  CartItemInfo,
  ProductName,
  ProductPrice,
  ProductCount,
  CountButton,
  Count,
  DeleteButton
} from '../../styles/order';
import { ReactComponent as DeleteIcon } from '../../assets/icons/cancleIcon.svg';

const MyCartItem = () => {
  const [count, setCount] = useState(1);

  return (
    <CartItemContainer>
      <CartItemImage>
        <Link>
          <CartItemImg
            img={
              'https://thumbnail9.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/493405785878144-be8efa56-f85d-43e2-bbe2-79dcf26f6eac.jpg'
            }
          />
        </Link>
      </CartItemImage>

      <CartItemInfo>
        <ProductName>
          <Link>사과</Link>
        </ProductName>
        <ProductPrice>
          {`${(12000 * count).toLocaleString('ko-KR')}`}원
        </ProductPrice>
        <ProductCount>
          {count <= 1 ? (
            <CountButton disabled onClick={() => setCount(count - 1)}>
              -
            </CountButton>
          ) : (
            <CountButton onClick={() => setCount(count - 1)}>-</CountButton>
          )}
          <Count
            type={'number'}
            value={count}
            min={'1'}
            max={'40'}
            onChange={(e) =>
              setCount(
                Number(e.target.value) <= 1 || ''
                  ? ''
                  : Number(e.target.value) >= 40
                  ? 40
                  : Number(e.target.value)
              )
            }
          />
          {count >= 40 ? (
            <CountButton disabled onClick={() => setCount(count + 1)}>
              +
            </CountButton>
          ) : (
            <CountButton onClick={() => setCount(count + 1)}>+</CountButton>
          )}
        </ProductCount>
      </CartItemInfo>
      <DeleteButton>
        <DeleteIcon />
      </DeleteButton>
    </CartItemContainer>
  );
};

export default MyCartItem;
