import React, { useState, useEffect } from 'react';
import InfoFooter from '../components/info-footer';
import { getFooter } from '../utility/space-x-service';

const Footer = (props) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        getFooter().then(data => {
            setData(data);
        });
    }, [])

    return (
        <div className="footer">
            <InfoFooter info={data}></InfoFooter>
        </div>

    )
}

export default Footer;