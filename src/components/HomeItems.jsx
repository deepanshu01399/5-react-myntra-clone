import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bagAction } from "../store/slice/bagSlice";

function HomeItems({ item }) {
  const bag = useSelector(state => state.bag);

  const dispatch = useDispatch();
  const addtoBag1 = (item) => {
    dispatch(bagAction.addToBag(item));
  };
  const removeItem = (item) => {
    dispatch(bagAction.removeFromBag(item));
  };
  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating?.stars} ⭐ | {item.rating?.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      {bag.includes(item.id) ? (
        <button className="btn-remove-bag" onClick={() => removeItem(item.id)}>
          Remove from Bag
        </button>
      ) : (
        <button className="btn-add-bag" onClick={() => addtoBag1(item.id)}>
          Add to Bag
        </button>
      )}
    </div>
  );
}

export default HomeItems;
