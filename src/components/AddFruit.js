import React, {useState} from 'react';

const AddFruit = ()=>{
    const [fruitName, setFruitName] = useState('');
    const [fruitCount, setFruitCount] = useState(0);
    const [error, setError] = useState(null);

    const addFruitHandler = ()=>{
        setError(null);
        if(fruitName.length > 0 && Number.isInteger(fruitCount) && fruitCount > 0){
            console.log(fruitName, fruitCount);
        }
        else{
            setError('Please enter a fruit name and count should be more than 0');
        }
    }

    return (
        <div>
            <p className='lead'>Add Fruit Detail</p>
            <input className='form-control my-3' placeholder='Fruit Name' type="text" onChange={(e)=> setFruitName(e.target.value)} value={fruitName} />
            <input className='form-control mb-3' placeholder='Number of fruit' type="number" onChange={(e)=> setFruitCount(parseInt(e.target.value))} value={fruitCount} />
            <button type="button" className="btn btn-primary" onClick={addFruitHandler}>Add fruit</button><br/>
            <p className='text-danger'>{error}</p>
        </div>
    )
}

export default AddFruit;