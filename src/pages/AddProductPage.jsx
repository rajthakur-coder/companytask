import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../redux/productSlice';
import { FaSave, FaUndo } from 'react-icons/fa';

const AddProductPage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);

  const [form, setForm] = useState({
    name: '',
    category: '',
    expiry: '',
    cost: '',
  });

  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = () => {
    if (
      /^[a-zA-Z0-9 ]+$/.test(form.name) &&
      form.category &&
      form.expiry &&
      /^[0-9]+(\.[0-9]{1,2})?$/.test(form.cost)
    ) {
      dispatch(addProduct(form));
      setForm({ name: '', category: '', expiry: '', cost: '' });
    } else {
      alert('Invalid input. Please check the form.');
    }
  };

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 space-y-12">
      {/* Form Section */}
      <div className="bg-white rounded-xl shadow-md p-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-blue-600 mb-6">Add New Product</h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium mb-1">Name of product</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter product name"
              className="w-full border rounded-lg px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Category</label>
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select category</option>
              <option>Category 1</option>
              <option>Category 2</option>
              <option>Category 3</option>
              <option>Category 4</option>
              <option>Category 5</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Expiry date</label>
            <input
              type="date"
              name="expiry"
              value={form.expiry}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Product cost</label>
            <input
              type="text"
              name="cost"
              value={form.cost}
              onChange={handleChange}
              placeholder="$ 0.00"
              className="w-full border rounded-lg px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>

        <div className="flex justify-center items-center gap-4">
          <button
            onClick={handleSubmit}
            className="flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-2 rounded-lg shadow hover:scale-105 transition"
          >
            <FaSave /> Save
          </button>

          <button
            onClick={() => setForm({ name: '', category: '', expiry: '', cost: '' })}
            className="flex items-center gap-2 bg-gray-600 text-white px-6 py-2 rounded-lg shadow hover:bg-gray-700 transition"
          >
            <FaUndo /> Reset
          </button>
        </div>
      </div>

      {/* Table Section */}
      <div className="p-6 bg-gray-50  rounded-xl shadow max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-4">

          <div className="text-gray-500">
            <span className="font-medium">{filtered.length}</span> products
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
                <tr key={p.id || index} className="border-t hover:bg-gray-50">
                  <td className="px-6 py-4">{index + 1}</td>
                  <td className="px-6 py-4 font-semibold text-gray-900">{p.name}</td>
                  <td className="px-6 py-4">
                    <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full">
                      {p.category}
                    </span>
                  </td>
                  <td className="px-6 py-4">{p.expiry}</td>
                  <td className="px-6 py-4 font-semibold text-green-600">${p.cost}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AddProductPage;
