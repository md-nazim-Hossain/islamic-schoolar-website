import React from 'react';
import './Scholar.css'
const Scholar = (props) => {
    const {name,born,image,nationality,salary} = props.scholar;
    return (
        <div className="col pt-3">
            <div className="card h-100 d-flex justify-content-center align-items-center bg-dark text-white">
                <img src={image} className="card-img-top img" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Name: {name}</h5>
                    <h5 className="card-title">Born: {born}</h5>
                    <h5 className="card-title">Nationality: {nationality}</h5>
                    <h5 className="card-title">Salary: ${salary}</h5>
                </div>
                <div className='p-3'>
                    <button className='btn btn-danger text-white fw-bold' onClick={()=>props.handleAddToCart(props.scholar)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        Add to Cart</button>
                </div>
                <div className='pb-3'>
                    <i className="fab fa-facebook p-2"></i>
                    <i className="fab fa-twitter p-2"></i>
                    <i className="fab fa-instagram p-2"></i>
                    <i className="fab fa-youtube p-2"></i>
                </div>
            </div>
        </div>
    );
};

export default Scholar;