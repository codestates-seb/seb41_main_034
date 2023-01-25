import { useDispatch } from 'react-redux';
import { updateCart } from '../../store/orderSlice';
import { ProductCount, Count, CountButton } from '../../styles/orderStyle';

const OrderCounter = ({ cart }) => {
  const dispatch = useDispatch();

  return (
    <ProductCount>
      {cart.count <= 1 ? (
        <CountButton disabled>-</CountButton>
      ) : (
        <CountButton
          onClick={() =>
            dispatch(updateCart({ id: cart.id, count: cart.count - 1 }))
          }
        >
          -
        </CountButton>
      )}
      <Count
        type={'number'}
        value={cart.count}
        min={'1'}
        max={'40'}
        onChange={(e) =>
          dispatch(
            updateCart({
              id: cart.id,
              count:
                Number(e.target.value) <= 1 || ''
                  ? ''
                  : Number(e.target.value) >= 40
                  ? 40
                  : Number(e.target.value)
            })
          )
        }
      />
      {cart.count >= 40 ? (
        <CountButton disabled>+</CountButton>
      ) : (
        <CountButton
          onClick={() =>
            dispatch(updateCart({ id: cart.id, count: cart.count + 1 }))
          }
        >
          +
        </CountButton>
      )}
    </ProductCount>
  );
};

export default OrderCounter;
