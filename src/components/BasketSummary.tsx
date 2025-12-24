import { useAppSelector } from "../app/hooks";
import { calculateBill } from "../utils/pricingEngine";
import BasketItem from "./BasketItem";

const BasketSummary = () => {
  const cart = useAppSelector((state) => state.cart);
  const products = useAppSelector((state) => state.products);

  const { subtotal, savings, total, appliedOffers } =
    calculateBill(cart, products);

  const basketItems = Object.entries(cart)
    .map(([id, qty]) => {
      const product = products.find((p) => p.id === id);
      if (!product || qty === 0) return null;
      return <BasketItem key={id} product={product} quantity={qty} />;
    })
    .filter(Boolean);

  return (
    <div className="rounded-lg p-4 bg-white">
      <h2 className="text-xl font-bold mb-1">Basket</h2>
      <hr className="mb-7 text-gray-400"/>

      {basketItems.length > 0 ? (
        basketItems
      ) : (
        <p className="text-gray-500 text-center">Your basket is empty</p>
      )}

      <div className="mt-4 pt-4 space-y-2">
        <p className="flex justify-between">
          <span>Sub Total:</span>
          <span>£{subtotal.toFixed(2)}</span>
        </p>

        {appliedOffers.map((offer) => (
          <p
            key={offer}
            className="flex justify-between text-red-500 text-sm"
          >
            <span>{offer}</span>
          </p>
        ))}

        <p className="flex justify-between font-semibold">
          <span>Savings:</span>
          <span>£{savings.toFixed(2)}</span>
        </p>

        <p className="flex justify-between text-lg font-bold">
          <span>Total Amount:</span>
          <span>£{total.toFixed(2)}</span>
        </p>
      </div>
    </div>
  );
};

export default BasketSummary;
