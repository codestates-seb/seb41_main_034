import { useState } from 'react';
import { ProductCount, Count, CountButton } from '../../styles/orderStyle';

const OrderCounter = () => {
  const [count, setCount] = useState(1);

  return (
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
  );
};

export default OrderCounter;
