import { useAppDispatch, useAppSelector } from "../app/hooks";
import { addItem } from "../features/cartSlice";

const ProductList = () => {
  const products = useAppSelector((state) => state.products);
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const handleAdd = (id: string) => {
    dispatch(addItem(id));
  };

  return (
    <div className="rounded-lg p-4 bg-white">
      <h2 className="text-xl font-bold mb-1">Products</h2>
      <hr className="mb-7 text-gray-400" />

      <ul className="space-y-3">
        {products.map((product) => {
          const isClicked = Boolean(cart[product.id]);

          return (
            <li
              key={product.id}
              className="flex justify-between items-center border-b border-gray-400 pb-2"
            >
              <div>
                <p className="font-medium">{product.name}</p>
                <p className="text-gray-600">
                  £{product.price.toFixed(2)}
                </p>
              </div>

              <button
                onClick={() => handleAdd(product.id)}
                className={`px-4 py-1 rounded text-white
                  ${isClicked ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"}
                `}
                disabled={isClicked}
              >
                Add
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProductList;
