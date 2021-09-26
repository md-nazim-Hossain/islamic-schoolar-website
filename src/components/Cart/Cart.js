
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
                <div className='cart-body py-4 '>
                    <h4 className='cart-title d-flex justify-content-center align-items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                        </svg>
                        Scholar Added: {props.scholarCount}</h4>
                    <h5>Total Cost: ${salary}</h5>
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