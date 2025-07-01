import React from 'react';
import { FaPlus } from 'react-icons/fa';

const ProductCard = ({ product, onAdd }) => {
    if (!product) return null;

    return (
        <div className="bg-white rounded-4xl shadow-md p-6 flex flex-col justify-between hover:shadow-lg transition w-70">
            <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
                <span className="inline-block bg-yellow-100 text-orange-700 text-sm font-medium px-3 py-1 rounded-full mb-2">
                    {product.category}
                </span>
                <p className="text-sm text-gray-600 mb-3">Expiry: {product.expiry}</p>

            </div>

            <div className="flex items-center justify-between">
                <p className="text-2xl font-bold text-green-600">${product.cost}</p>
                <button
                    onClick={() => onAdd(product)}
                    className="flex items-center gap-2 px-5 py-2 text-white rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 shadow-md hover:scale-105 transition"
                >
                    <FaPlus className="text-sm" /> Add
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
