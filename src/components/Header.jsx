import React, { useEffect, useState } from "react";
import { IoPerson } from "react-icons/io5";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const bag = useSelector((state) => state.bag);
  const [items, setItems] = useState([]);

  useEffect(() => {
    let itemString = localStorage.getItem("itemInCart");
    let itemArray = [];
    if (itemString && itemString.trim() !== "") {
      itemArray = itemString
        .split(",")
        .map((item) => item.trim())
        .filter((item) => item !== "");
    }
   
    setItems(itemArray);
  }, [bag]);

  console.log("bag", bag, "item", items);

  return (
    <>
      <header>
        <div className="logo_container">
          <Link to="#">
            <img
              className="myntra_home"
              src="images/myntra_logo.webp"
              alt="Myntra Home"
            />
          </Link>
        </div>
        <nav className="nav_bar">
          <Link to="/">Men</Link>
          <Link to="#">Women</Link>
          <Link to="#">Kids</Link>
          <Link to="#">Home & Living</Link>
          <Link to="#">Beauty</Link>
          <Link to="#">
            Studio <sup>New</sup>
          </Link>
        </nav>
        <div className="search_bar">
          <span className="material-symbols-outlined search_icon">search</span>
          <input
            className="search_input"
            placeholder="Search for products, brands and more"
          />
        </div>
        <div className="action_bar">
          <div className="action_container">
            <IoPerson />
            <span className="action_name">Profile</span>
          </div>

          <div className="action_container">
            <FaHeart />
            <span className="action_name">Wishlist</span>
          </div>

          <Link className="action_container" to="/bags">
            <FaShoppingCart />
            <span className="action_name">Bag</span>
            <span className="bag-item-count">{items?.length}</span>
          </Link>
        </div>
      </header>
    </>
  );
}

export default Header;
