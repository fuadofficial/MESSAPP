import React, { useState } from "react";
import Menu from "../../Menu/Menu";
import items from "../../StaticData/Data";
import Categores from "../../categores/Categores";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

function Home() {
  const [categories, setCategories] = useState(allCategories);
  const [menuItems, setMenuItems] = useState(items);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Mess App</h2>
          <div className="underline"></div>
        </div>
        <Categores categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default Home;
