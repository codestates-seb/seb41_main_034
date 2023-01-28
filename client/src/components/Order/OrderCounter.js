import { useDispatch } from 'react-redux';
import { updateCart } from '../../store/orderSlice';
import { ProductCount, Count, CountButton } from '../../styles/orderStyle';

const OrderCounter = ({ cart }) => {
  const dispatch = useDispatch();

  return (
    <ProductCount>
      {cart.quantity <= 1 ? (
        <CountButton disabled>-</CountButton>
      ) : (
        <CountButton
          onClick={() =>
            dispatch(
              updateCart({
                productId: cart.productId,
                quantity: cart.quantity - 1
              })
            )
          }
        >
          -
        </CountButton>
      )}
      <Count
        type={'number'}
        value={cart.quantity}
        min={'1'}
        max={'40'}
        onChange={(e) =>
          dispatch(
            updateCart({
              productId: cart.productId,
              quantity:
                Number(e.target.value) <= 1 || ''
                  ? ''
                  : Number(e.target.value) >= 40
                  ? 40
                  : Number(e.target.value)
            })
          )
        }
      />
      {cart.quantity >= 40 ? (
        <CountButton disabled>+</CountButton>
      ) : (
        <CountButton
          onClick={() =>
            dispatch(
              updateCart({
                productId: cart.productId,
                quantity: cart.quantity + 1
              })
            )
          }
        >
          +
        </CountButton>
      )}
    </ProductCount>
  );
};

export default OrderCounter;
