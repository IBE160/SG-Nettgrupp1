import { Link, Outlet } from 'react-router-dom';
import ShoppingCartIcon from './ShoppingCartIcon';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-800 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-xl font-bold">
            Alta Sigar & Grill
          </Link>
          <nav>
            <ul className="flex space-x-4 items-center">
              <li>
                <Link to="/products" className="hover:text-gray-300">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/admin" className="hover:text-gray-300">
                  Admin
                </Link>
              </li>
              <li>
                <ShoppingCartIcon />
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="flex-grow">
        <Outlet />
      </main>
    </div>
  );
}
