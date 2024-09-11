import React from "react";
import HomeItems from "../components/HomeItems";
import { useSelector } from "react-redux";

export default function Home() {
  const items = useSelector((state) => state.items);
  return (
    <main>
      <div className="items-container">
        {items.map((item, index) => (
          <HomeItems key={item.key} item={item} />
        ))}
      </div>
    </main>
  );
}
