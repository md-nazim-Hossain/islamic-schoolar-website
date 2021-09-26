import React, { useEffect, useState } from 'react';
import Scholar from '../Scholar/Scholar';
import './Scholars.css'

const Scholars = () => {
    const [scholars,setScholars] = useState([]);

    useEffect(() =>{
        fetch('./fakeData.JSON')
        .then(res => res.json())
        .then(data => setScholars(data));
    },[]);
    
    const handleAddToCart = (props) => {

        console.log(props);
    }
    return (
        <div className='scholars'>
            <div className='socholar-container'>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        scholars.map(scholar => <Scholar
                            key={scholar.name} 
                            scholar = {scholar}
                            handleAddToCart={handleAddToCart}
                            >
                            </Scholar>)
                    }
                </div>
            </div>
            <div className='side-container text-center p-2'>
                <div className='row row-cols-1 row-cols-md-1'>
                    <div className='col'>
                        <h3>Scholar Added: 0</h3>
                        <h4>Total Cost: $</h4>
                        <ul>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Scholars;