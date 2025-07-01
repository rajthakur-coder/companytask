import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
    const cartItems = useSelector((state) => state.cart.items);
    const location = useLocation();

    const linkClass = (path) =>
        `text-sm font-medium px-3 py-2 rounded hover:bg-gray-200 transition ${location.pathname === path ? 'text-blue-600 font-semibold' : 'text-gray-700'
        }`;

    return (
        <nav className="bg-white shadow-sm px-6 py-4 flex justify-between items-center">
            <div className="text-xl font-bold text-blue-600">LOGO</div>

            <div className="flex items-center gap-6">
                <Link to="/add-products" className={linkClass('/add-products')}>
                    Add Products
                </Link>
                <Link to="/" className={linkClass('/')}>
                    Products
                </Link>

                <Link to="/cart" className="flex items-center gap-2 text-gray-800 hover:text-blue-600 transition">
                    <FaShoppingCart />
                    <span className="text-sm">
                        {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in cart
                    </span>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
