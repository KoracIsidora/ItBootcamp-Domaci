import React from 'react';
import Launch from './launch';

//Has attribute data, which is array that uses for display.
const LaunchList = (props) => {
    let {data} = props;
    return (
        <div>
            {data.map(x=>{return <Launch launch={x} key={x.flight_number}/>})}
        </div>
    );
}

export default LaunchList;