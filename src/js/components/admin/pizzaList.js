import React from "react";
import { Link } from "react-router";

const PizzaList = (props) => {

  // console.log("props:",props.data);

  const PizzaItems = props.data.map((pizza, index) => {

    const toppings = pizza.toppings.map((topping) => {
      return topping.name;
    });

    // const passingPropsToEdit = () => {
    //   console.log(pizza['.key']);
    //   let { data } = pizza
    //   let id = pizza['.key']
    //   this.context.router.push({    // use push
    //     pathname: `/admin/addedit/${data}`,
    //     id: { id }
    //   })
    // }

    return (
      <div class="row border-bottom div-table" key={pizza['.key']} >
        <div class="col-sm-1">{index+1}.</div>
        <div class="col-sm-2">{pizza.name}</div>
        <div class="col-sm-4">{pizza.desc}</div>
        <div class="col-sm-1">${pizza.price}.00</div>
        <div class="col-sm-3">{toppings.join(", ")}</div>
        <div class="col-sm-1">
          <Link to={"/admin/edit/" + pizza['.key']}>
            <span class="glyphicon glyphicon-edit btn btn-primary btn-xs" aria-hidden="true" />
          </Link>
          <span class="glyphicon glyphicon-remove btn btn-danger btn-xs" aria-hidden="true"
            onClick={props.deleteItem.bind(this, pizza['.key'])} />
        </div>
      </div>
    );
  });

  return (
    <div>
      {PizzaItems}
    </div>
  );
}

export default PizzaList;
