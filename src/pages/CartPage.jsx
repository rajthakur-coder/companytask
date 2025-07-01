import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProductCard from '../components/ProductCard';
import { addToCart } from '../redux/cartSlice';

const CartPage = () => {
    const products = useSelector((state) => state.products.items);
    const dispatch = useDispatch();

    const handleAdd = (product) => {
        dispatch(addToCart(product));
    };

    return (
        <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Add product to cart</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {products.filter(Boolean).map((product, idx) => (
                    <ProductCard
                        key={product.id || idx}
                        product={product}
                        onAdd={handleAdd}
                    />
                ))}
            </div>
        </div>
    );

};
export default CartPage;
