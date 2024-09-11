import React, { useEffect, useState } from "react";
import BagSummary from "./BagSummary";
import BagItem from "./BagItem";
import { useSelector } from "react-redux";
import BagPlaceholder from "./BagPlaceholder";

function Bags() {
  const items = useSelector((state) => state.items);
  const bag = useSelector((state) => state.bag);

  const [items1, setItems1] = useState([]);

  useEffect(() => {
    let itemString = localStorage.getItem("itemInCart");
    let itemArray = [];
    if (itemString && itemString.trim() !== "") {
      itemArray = itemString
        .split(",")
        .map((item) => item.trim())
        .filter((item) => item !== "");
    }
    setItems1(itemArray);
  }, [items, bag]);

  const bagItems = items.filter((item) => {
    return items1.includes(item.id);
  });

  return (
    <main>
      <div className="bag-page" style={{display:'flex'}}>
        {bagItems.length>0 ?bagItems.map((item, index) => (
          <BagItem item={item} key={index} />
        )): <BagPlaceholder/>}
        <BagSummary bagItems={bagItems}/>
      </div>
    </main>
  );
}

export default Bags;
