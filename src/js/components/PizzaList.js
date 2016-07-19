import React from "react";

const PizzaList = (props) => {
  const pizzaItems = props.data.map((item, index) => {
    return (
      <div class="menu-list clearfix" key={index}>
        <div class="left-menu">
          <div class="pizza">{item.name.toUpperCase()}</div>
          <div class="toppings">{item.desc}</div>
        </div>
        <div class="right-menu">${item.price}</div>
      </div>
    );
  });

  return (
    <div class="row rows-menu">
      {pizzaItems}
  </div>
  );
}

export default PizzaList;
