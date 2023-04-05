import React, { useState } from "react";

import Input from "../UI/Input";
import Button from "../UI/Button";

const CustomerForm = props => {
    const [orderId, setOrderId] = useState('');
    const [orderPrice, setOrderPrice] = useState('');
    const [orderDish, setOrderDish] = useState('');
    const [tableCategory, setTableCategory] = useState('');

    const orderIdHandler = event => {
        setOrderId(event.target.value);
    }

    const orderPriceHandler = event => {
        setOrderPrice(event.target.value);
    }

    const orderDishHandler = event => {
        setOrderDish(event.target.value);
    }

    const tableCategoryHandler = event => {
        setTableCategory(event.target.value);
    }

    const customerFormHandler = event => {
        event.preventDefault();

        const order = {
            id: orderId,
            price: orderPrice,
            dish: orderDish,
            category: tableCategory
        }
        props.onSaveOrder(order);
    }
    return (
        <form onSubmit={customerFormHandler}>
            <Input label="Unique Order ID" id="uniqueID" type="number" value={orderId} onChange={orderIdHandler}/>
            <Input label="Choose Price" id="price" type="number" value={orderPrice} onChange={orderPriceHandler}/>
            <Input label="Choose Dish" id="dish" type="text" value={orderDish} onChange={orderDishHandler}/>   
            <label htmlFor="category">Choose a Table</label>
            <select id="category" value={tableCategory} onChange={tableCategoryHandler}>
                <option>Table 1</option>
                <option>Table 2</option>
                <option>Table 3</option>
            </select>
            <Button type="submit">Add to bill</Button>
        </form>
    )
};

export default CustomerForm;