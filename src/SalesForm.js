// src/SalesForm.js
import React, { useState } from 'react';
import './App.css';

const SalesForm = () => {
  const [itemName, setItemName] = useState('');
  const [unitPrice, setUnitPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [sales, setSales] = useState([]);
  const [total, setTotal] = useState(0);

  const handleAddItem = () => {
    if (itemName && unitPrice && quantity) {
      const newItem = {
        itemName,
        unitPrice: parseFloat(unitPrice),
        quantity: parseInt(quantity),
        total: parseFloat(unitPrice) * parseInt(quantity),
      };
      setSales([...sales, newItem]);
      setTotal(total + newItem.total);
      setItemName('');
      setUnitPrice('');
      setQuantity('');
    } else {
      alert('Please fill in all fields');
    }
  };

  const handleDelete = (index) => {
    const updatedSales = [...sales];
    const removedItem = updatedSales.splice(index, 1);
    setSales(updatedSales);
    setTotal(total - removedItem[0].total);
  };

  return (
    <div className="sales-form-container">
      <h2 className="sales-form-header">SALES FORM</h2>

      <div className="form-group">
        <label>Item Name</label>
        <input
          type="text"
          className="form-control"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Unit Price</label>
        <input
          type="number"
          className="form-control"
          value={unitPrice}
          onChange={(e) => setUnitPrice(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Quantity</label>
        <input
          type="number"
          className="form-control"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </div>

      <button className="btn btn-add-item" onClick={handleAddItem}>
        Add Item
      </button>

      <h4 className="sales-details-header">Sales Details</h4>
      <table className="sales-details-table">
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Unit Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {sales.map((item, index) => (
            <tr key={index}>
              <td>{item.itemName}</td>
              <td>${item.unitPrice.toFixed(2)}</td>
              <td>{item.quantity}</td>
              <td>${item.total.toFixed(2)}</td>
              <td>
                <button className="btn-delete" onClick={() => handleDelete(index)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="3" className="text-right"><strong>Total Sales</strong></td>
            <td colSpan="2">${total.toFixed(2)}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default SalesForm;
