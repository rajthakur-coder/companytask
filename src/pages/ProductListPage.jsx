import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const ProductListPage = () => {
    const products = useSelector((state) => state.products.items);
    const [searchTerm, setSearchTerm] = useState('');

    const filtered = products.filter(
        (item) =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <div className="flex justify-between items-center mb-4">
                <input
                    type="text"
                    placeholder="Search product by name or category"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="px-4 py-2 w-1/3 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <div className="text-gray-500">
                    <span className="font-medium">{filtered.length}</span> products
                </div>

                <div className="flex gap-2">

                    <button className="px-3 py-1 rounded-md border border-blue-600 bg-blue-100 text-blue-700 shadow-sm font-medium">
                        Table
                    </button>
                </div>
            </div>

            <div className="bg-white rounded-lg shadow overflow-x-auto">
                <table className="min-w-full text-sm text-left">
                    <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
                        <tr>
                            <th className="px-6 py-3">No.</th>
                            <th className="px-6 py-3">Name</th>
                            <th className="px-6 py-3">Category</th>
                            <th className="px-6 py-3">Expiry Date</th>
                            <th className="px-6 py-3">Cost</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-700">
                        {filtered.map((p, index) => (
                            <tr key={p.id} className="border-t hover:bg-gray-50">
                                <td className="px-6 py-4">{index + 1}</td>
                                <td className="px-6 py-4 font-semibold text-gray-900">
                                    {p.name}
                                </td>
                                <td className="px-6 py-4">
                                    <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full">
                                        {p.category}
                                    </span>
                                </td>
                                <td className="px-6 py-4">{p.expiry}</td>
                                <td className="px-6 py-4 font-semibold text-green-600">
                                    ${p.cost}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProductListPage;
