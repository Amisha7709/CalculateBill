import { useAppDispatch } from "../app/hooks";
import { addItem, removeItem } from "../features/cartSlice";
import type { Product } from "../features/productsSlice";

interface BasketItemProps {
  product: Product;
  quantity: number;
}

const BasketItem = ({ product, quantity }: BasketItemProps) => {
  const dispatch = useAppDispatch();

  const itemTotal = product.price * quantity;

  return (
    <div className="border-b pb-3 mb-3 border-gray-400">
      <div className="flex justify-between items-center">
        <div>
          <p className="font-medium">{product.name}</p>
          <p className="text-sm text-gray-600">
            £{product.price.toFixed(2)} × {quantity} = £{itemTotal.toFixed(2)}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => dispatch(removeItem(product.id))}
            className="border p-2 rounded font-semibold hover:bg-blue-600 border-blue-600 hover:text-white"
          >
            −
          </button>

          <span className="w-6 text-center">{quantity}</span>

          <button
            onClick={() => dispatch(addItem(product.id))}
            className="border p-2 font-semibold rounded hover:bg-blue-600 border-blue-600 hover:text-white"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default BasketItem;
