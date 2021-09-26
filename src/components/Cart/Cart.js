
import React from 'react';
import './Cart.css'
const Cart = (props) => {

    // scholar salary add function
    const salarys = props.scholarSalary;
    const name = props.name;
    let salary = 0;
    for(const key in salarys){
        salary +=salarys[key] ;
    }

    // put scholars name in the array 
    let nam = [];
    for(const key in name){
      nam.push(name[key]);
    }
    return (
        <div className='col pt-2'>
            <div className='card pt-4 bg-dark text-white cart'>
                <div className='cart-body py-4'>
                    <h3 className='cart-title'>Scholar Added: {props.scholarCount}</h3>
                    <h4>Total Cost: ${salary}</h4>
                    <ol>
                      {
                          nam.map(name => <li>{name}</li>)
                      }
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default Cart;