import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Scholar from '../Scholar/Scholar';
import './Scholars.css'

const Scholars = () => {
    const [scholars,setScholars] = useState([]);
    const [scholarCount,setScholarCount] = useState(0);
    const [scholarSalary,setScolarSalary] = useState([]);
    const [names,setName] = useState([]);

    useEffect(() =>{
        fetch('./fakeData.JSON')
        .then(res => res.json())
        .then(data => setScholars(data));
    },[]);
    
    const handleAddToCart = (props) => {
        const {salary,name} = props;
        const singleSalary = [...scholarSalary,salary];
        const scholarName = [...names,name];
        setName(scholarName);
        setScolarSalary(singleSalary);
        setScholarCount(() =>scholarCount + 1);
    }
    return (
        <div className='scholars'>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    scholars.map(scholar => <Scholar
                        key={scholar.key} 
                        scholar = {scholar}
                        handleAddToCart={handleAddToCart}
                        >
                        </Scholar>)
                }
            </div>
                <div className='row row-cols-1 row-cols-md-1 text-center p-2 pe-0'>
                    <Cart 
                        scholarSalary={scholarSalary} 
                        scholarCount={scholarCount}
                        name={names}
                        >
                        </Cart>
                </div>
            </div>
    );
};

export default Scholars;