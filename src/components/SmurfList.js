import React from 'react';
import Smurf from './Smurf';
import { useSelector } from 'react-redux';




 const SmurfList = ()=> {
    const isLoading = useSelector((state) => state.isLoading);
    const smurfs = useSelector((state) => state.smurfs) 

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    return(<div className="listContainer">
        {smurfs.map((smurf) => (
            <Smurf key={smurfs.id} smurf={smurf} />
        ))}
    </div>);
}

export default SmurfList;

//Task List:
//1. Connect the smurfs and loading state values to the SmurfList component.
//2. Replace the single Smurf component instance with a map return a Smurf component for each entry in the smurfs list.
//3. Replace the static isLoading variable with the state loading variable.