import React from "react";

function Menu({ items }) {
  return (
    <div className="section-center">
      {items.map((item) => {
        return (
          <article className="menu-item" key={item.id}>
            <img src={item.img} alt="" className="photo" />
            <div className="item-info">
              <header>
                <h4>{item.title}</h4>
                <h4 className="price">${item.price}</h4>
              </header>
              <p className="item-text">{item.desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default Menu;
