import React from "react";
import Button from "../UI/Button";

const ShowOrders = (props) => {
    const deleteOrder = id => {
        localStorage.removeItem(id);
        props.onDeleteOrder(id);   
    }
  return (
    <React.Fragment>
      <h1>Orders</h1>
      <ul>
        <h2>Table 1</h2>
        {props.items.map((item) => {
          if (item.category === "Table 1") {
            return (
              <li key={item.id}>
                {item.price} - {item.category} - {item.dish}{" "}
                <Button type="button" onClick={() => deleteOrder(item.id)}>Delete Order</Button>
              </li>
            );
          }
        })}
      </ul>
      <ul id="Table 2">
        <h2>Table 2</h2>
        {props.items.map((item) => {
          if (item.category === "Table 2") {
            return (
              <li key={item.id}>
                {item.price} - {item.category} - {item.dish}{" "}
                <Button type="button" onClick={() => deleteOrder(item.id)}>Delete Order</Button>
              </li>
            );
          }
        })}
      </ul>
      <ul id="Table 3">
        <h2>Table 3</h2>
        {props.items.map((item) => {
          if (item.category === "Table 3") {
            return (
              <li key={item.id}>
                {item.price} - {item.category} - {item.dish}{" "}
                <Button type="button" onClick={() => deleteOrder(item.id)}>Delete Order</Button>
              </li>
            );
          }
        })}
      </ul>
    </React.Fragment>
  );
};

export default ShowOrders;
