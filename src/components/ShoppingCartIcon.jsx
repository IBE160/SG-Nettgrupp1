import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function ShoppingCartIcon() {
  const { cartItems } = useCart();
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="relative">
      <ShoppingCart className="h-6 w-6" />
      {itemCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
          {itemCount}
        </span>
      )}
    </div>
  );
}
