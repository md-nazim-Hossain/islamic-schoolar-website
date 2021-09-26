import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const salarys = props.scholarSalary;
    let salary = 0;
    for(const key in salarys){
        salary +=salarys[key] ;
    }
    
    return (
        <div className='col pt-2'>
            <div className='card pt-4 bg-dark text-white'>
                <div className='cart-body'>
                    <h3 className='cart-title'>Scholar Added: {props.scholarCount}</h3>
                    <h4>Total Cost: ${salary}</h4>
                    <ul>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Cart;