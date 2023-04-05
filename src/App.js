import React, { useState } from "react";

import CustomerForm from "./components/customers/CustomerForm";
import ShowOrders from "./components/customers/ShowOrders";

const App = () => {
  const [orderList, setOrderList] = useState([]);

  const saveOrderHandler = order => {
    setOrderList([...orderList, order])
    localStorage.setItem(order.id, JSON.stringify(order));
  }

  const deleteOrderHandler = orderId => {
    const newOrderList = orderList.filter(ele => ele.id!== orderId)
    setOrderList([...newOrderList]);
  }

  return (
    <React.Fragment>
      <CustomerForm onSaveOrder={saveOrderHandler}/>
      <ShowOrders items={orderList} onDeleteOrder={deleteOrderHandler}/>
    </React.Fragment>
  )
}

export default App;
