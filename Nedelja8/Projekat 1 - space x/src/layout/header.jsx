import React, { useState } from 'react';
import InfoDisplay from '../components/info-display';
import { getInfo } from '../utility/space-x-service';

const Header = (props) => {

    const [info, setInfo] = useState([]);
    getInfo().then(info => {
        setInfo(info);
    },[])

    return (
        <div>
            <InfoDisplay info={info}></InfoDisplay>
        </div>
    )
}

export default Header; 
