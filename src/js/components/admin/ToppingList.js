import React from "react";

const ToppingList = (props) => {
  const toppingItems = props.data.map((name, index) => {
    return (
      <div key={name['.key']}
        class="col-sm-6 column">
        <div class="column-cell">
          <span class="glyphicon glyphicon glyphicon-trash btn btn-delete"
            aria-hidden="true"
            onClick={props.deleteItem.bind(this, index, name['.key'])}></span>
          <span>{name.name}</span>
        </div>
      </div>
    );
  });

  return (
    <div>
      <h3>Topping List:</h3>
      {toppingItems}
    </div>
  );
}

export default ToppingList;
