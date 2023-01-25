import { ProductCount, Count, CountButton } from '../../styles/orderStyle';

const ProductCounter = ({ count, setCount }) => {
  return (
    <ProductCount>
      {count <= 1 ? (
        <CountButton disabled>-</CountButton>
      ) : (
        <CountButton onClick={() => setCount(count - 1)}>-</CountButton>
      )}
      <Count
        type={'number'}
        value={count}
        min={'1'}
        max={'40'}
        onChange={(e) => setCount(e.target.value)}
      />
      {count >= 40 ? (
        <CountButton disabled>+</CountButton>
      ) : (
        <CountButton onClick={() => setCount(count + 1)}>+</CountButton>
      )}
    </ProductCount>
  );
};

export default ProductCounter;
