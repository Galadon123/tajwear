import React from 'react';
import Person from '../Person/person';
import './menu.css'
const Menu = (props) => {
    const {menu}=props;
    let totalQuantity = 0;
    let total = 0;
    for (const product of menu) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        total = total + product.Value * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }
    
    return (
        <div className="total">
            <h2>Selected Teacher panel</h2>
            <h3>Total Recruit: {totalQuantity}</h3>
            <h3>Recruitants : <Person person={props}></Person> </h3>
            <h3>Total Value: {total}</h3>
        </div>
    );
};

export default Menu;