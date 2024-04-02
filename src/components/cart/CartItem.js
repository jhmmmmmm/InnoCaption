import React from 'react';

const CartItem = ({ item, onRemove, onQuantityChange }) => {
  return (
    <div className="list-group-item">
      <div className="row align-items-center">
        <div className="col-md-4">{item.name}</div>
        <div className="col-md-3">${item.price}</div>
        <div className="col-md-2">
          <input
            type="number"
            className="form-control"
            value={item.quantity}
            onChange={(e) => onQuantityChange(item.id, parseInt(e.target.value))}
            min="1"
          />
        </div>
        <div className="col-md-3">
          <button className="btn btn-danger" onClick={() => onRemove(item.id)}>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
