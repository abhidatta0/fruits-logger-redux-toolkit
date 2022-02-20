import React from 'react';
import { useSelector } from 'react-redux';

const FruitList = ()=>{
    const  fruits = useSelector(state=> state.fruits.fruitList);

    return (
        <div>
            <h1 className="display-4">Fruits</h1>
            <ul className="list-group list-group-flush w-25">
            {
                fruits.map((fruit, index)=> <li className="list-group-item" key={index}>{fruit.name}{' '}
                <span className="badge bg-info rounded-pill mr-3">{fruit.count}</span>
                </li>)
            }
            {fruits.length === 0 && <p className='lead'>No fruits added yet!</p>}
            </ul>
        </div>
    )
}

export default FruitList;